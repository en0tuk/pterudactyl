import { faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { useFormikContext } from 'formik';
import tw from 'twin.macro';

import AdminBox from '@/components/admin/AdminBox';
import Field from '@/components/elements/Field';

export default () => {
    const { isSubmitting } = useFormikContext();

    return (
        <AdminBox icon={faConciergeBell} title={'Feature Limits'} isLoading={isSubmitting}>
            <div css={tw`grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6`}>
                <Field
                    id={'featureLimits.allocations'}
                    name={'featureLimits.allocations'}
                    label={'Лимит Адресов'}
                    type={'number'}
                    description={'Общее количество адресов, которое пользователь может создать для этого сервера.'}
                />
                <Field
                    id={'featureLimits.backups'}
                    name={'featureLimits.backups'}
                    label={'Лимит Бэкапов'}
                    type={'number'}
                    description={'Общее количество бэкапов, которые могут быть созданы для этого сервера.'}
                />
                <Field
                    id={'featureLimits.databases'}
                    name={'featureLimits.databases'}
                    label={'Лимит Баз Данных'}
                    type={'number'}
                    description={'Общее количество баз данных, которое пользователь может создать для этого сервера.'}
                />
            </div>
        </AdminBox>
    );
};
