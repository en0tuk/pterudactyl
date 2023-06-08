import { AdjustmentsIcon, ChipIcon, CodeIcon, MailIcon, ShieldCheckIcon } from '@heroicons/react/outline';
import { Route, Routes } from 'react-router-dom';
import tw from 'twin.macro';

import AdminContentBlock from '@/components/admin/AdminContentBlock';
import MailSettings from '@/components/admin/settings/MailSettings';
import FlashMessageRender from '@/components/FlashMessageRender';
import { SubNavigation, SubNavigationLink } from '@/components/admin/SubNavigation';
import GeneralSettings from '@/components/admin/settings/GeneralSettings';

export default () => {
    return (
        <AdminContentBlock title={'Настройки'}>
            <div css={tw`w-full flex flex-row items-center mb-8`}>
                <div css={tw`flex flex-col flex-shrink`} style={{ minWidth: '0' }}>
                    <h2 css={tw`text-2xl text-neutral-50 font-header font-medium`}>Настройки</h2>
                    <p css={tw`text-base text-neutral-400 whitespace-nowrap overflow-ellipsis overflow-hidden`}>
                        Настройка и управление параметрами для Pterodactyl.
                    </p>
                </div>
            </div>

            <FlashMessageRender byKey={'admin:settings'} css={tw`mb-4`} />

            <SubNavigation>
                <SubNavigationLink to="/admin/settings" name="Общее">
                    <ChipIcon />
                </SubNavigationLink>
                <SubNavigationLink to="/admin/settings/mail" name="Почта">
                    <MailIcon />
                </SubNavigationLink>
                <SubNavigationLink to="/admin/settings/security" name="Безопасность">
                    <ShieldCheckIcon />
                </SubNavigationLink>
                <SubNavigationLink to="/admin/settings/features" name="Особенности">
                    <AdjustmentsIcon />
                </SubNavigationLink>
                <SubNavigationLink to="/admin/settings/advanced" name="Продвинутое">
                    <CodeIcon />
                </SubNavigationLink>
            </SubNavigation>

            <Routes>
                <Route path="/admin/settings" element={<GeneralSettings />} />
                <Route path="/admin/settings/mail" element={<MailSettings />} />
                <Route path="/admin/settings/security" element={<p>Безопасность</p>} />
                <Route path="/admin/settings/features" element={<p>Особенности</p>} />
                <Route path="/admin/settings/advanced" element={<p>Продвинутое</p>} />
            </Routes>
        </AdminContentBlock>
    );
};
