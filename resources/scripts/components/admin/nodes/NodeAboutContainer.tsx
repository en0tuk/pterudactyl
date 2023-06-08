import type { Actions } from 'easy-peasy';
import { useStoreActions } from 'easy-peasy';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

import type { NodeInformation } from '@/api/admin/nodes/getNodeInformation';
import getNodeInformation from '@/api/admin/nodes/getNodeInformation';
import AdminBox from '@/components/admin/AdminBox';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
import { Context } from '@/components/admin/nodes/NodeRouter';
import type { ApplicationStore } from '@/state';

const Code = ({ className, children }: { className?: string; children: ReactNode }) => {
    return (
        <code css={tw`text-sm font-mono bg-neutral-900 rounded`} style={{ padding: '2px 6px' }} className={className}>
            {children}
        </code>
    );
};

export default () => {
    const { clearFlashes, clearAndAddHttpError } = useStoreActions(
        (actions: Actions<ApplicationStore>) => actions.flashes,
    );

    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState<NodeInformation | null>(null);

    const node = Context.useStoreState(state => state.node);

    if (node === undefined) {
        return <></>;
    }

    useEffect(() => {
        clearFlashes('node');

        getNodeInformation(node.id)
            .then(info => setInfo(info))
            .catch(error => {
                console.error(error);
                clearAndAddHttpError({ key: 'node', error });
            })
            .then(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <AdminBox title={'Информация о Ноде'} css={tw`relative`}>
                <SpinnerOverlay visible={loading} />
            </AdminBox>
        );
    }

    return (
        <AdminBox title={'Информация о Ноде'}>
            <table>
                <tbody>
                    <tr>
                        <td css={tw`py-1 pr-6`}>Версия Wings</td>
                        <td css={tw`py-1`}>
                            <Code css={tw`ml-auto`}>{info?.version}</Code>
                        </td>
                    </tr>
                    <tr>
                        <td css={tw`py-1 pr-6`}>Операционная система</td>
                        <td css={tw`py-1`}>
                            <Code css={tw`ml-auto`}>{info?.system.type}</Code>
                        </td>
                    </tr>
                    <tr>
                        <td css={tw`py-1 pr-6`}>Архитектура</td>
                        <td css={tw`py-1`}>
                            <Code css={tw`ml-auto`}>{info?.system.arch}</Code>
                        </td>
                    </tr>
                    <tr>
                        <td css={tw`py-1 pr-6`}>Ядро</td>
                        <td css={tw`py-1`}>
                            <Code css={tw`ml-auto`}>{info?.system.release}</Code>
                        </td>
                    </tr>
                    <tr>
                        <td css={tw`py-1 pr-6`}>Потоки CPU</td>
                        <td css={tw`py-1`}>
                            <Code css={tw`ml-auto`}>{info?.system.cpus}</Code>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TODO: Description code-block with edit option */}
        </AdminBox>
    );
};
