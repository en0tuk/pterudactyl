import tw from 'twin.macro';

import { useServerFromRoute } from '@/api/admin/server';
import AdminBox from '@/components/admin/AdminBox';
import Button from '@/components/elements/Button';

export default () => {
    const { data: server } = useServerFromRoute();

    if (!server) return null;

    return (
        <div css={tw`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-2`}>
            <div css={tw`h-auto flex flex-col`}>
                <AdminBox title={'Переустановить Сервер'} css={tw`relative w-full`}>
                    <div css={tw`flex flex-row text-red-500 justify-start items-center mb-4`}>
                        <div css={tw`w-12 mr-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <p css={tw`text-sm`}>Осторожно! Это может привести к перезаписи данных сервера.</p>
                    </div>
                    <Button size={'large'} color={'red'} css={tw`w-full`}>
                        Переустановить Сервер
                    </Button>
                    <p css={tw`text-xs text-neutral-400 mt-2`}>
                    Это приведет к переустановке сервера с назначенным сценарием установки.
                    </p>
                </AdminBox>
            </div>
            <div css={tw`h-auto flex flex-col`}>
                <AdminBox title={'Установка статуса'} css={tw`relative w-full`}>
                    <Button size={'large'} color={'primary'} css={tw`w-full`}>
                        Установить Статус сервер как Устанавливается
                    </Button>
                    <p css={tw`text-xs text-neutral-400 mt-2`}>
                    Если вам необходимо изменить статус установки с неустановленной на установленную или наоборот,
                     вы можете сделать это с помощью кнопки ниже.
                    </p>
                </AdminBox>
            </div>
            <div css={tw`h-auto flex flex-col`}>
                <AdminBox title={'Приостановить Сервер'} css={tw`relative w-full`}>
                    <Button size={'large'} color={'primary'} css={tw`w-full`}>
                        Приостановить Сервер
                    </Button>
                    <p css={tw`text-xs text-neutral-400 mt-2`}>
                        Это приостановит работу сервера, остановит все запущенные процессы и немедленно заблокирует пользователя от
                        доступа к своим файлам или иного управления сервером через панель или API.
                    </p>
                </AdminBox>
            </div>
        </div>
    );
};
