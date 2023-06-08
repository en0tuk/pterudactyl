import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { useFormikContext } from 'formik';
import tw from 'twin.macro';

import AdminBox from '@/components/admin/AdminBox';
import Field from '@/components/elements/Field';
import FormikSwitch from '@/components/elements/FormikSwitch';

export default () => {
    const { isSubmitting } = useFormikContext();

    return (
        <AdminBox icon={faBalanceScale} title={'Resources'} isLoading={isSubmitting}>
            <div css={tw`grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6`}>
                <Field
                    id={'limits.cpu'}
                    name={'limits.cpu'}
                    label={'Лимит CPU'}
                    type={'text'}
                    description={
                        'Каждый поток в системе в системе считается как 100%. Установка этого значения на 0 позволит серверу использовать процессор без ограничений.'
                    }
                />
                <Field
                    id={'limits.threads'}
                    name={'limits.threads'}
                    label={'Фиксация ядер'}
                    type={'text'}
                    description={
                        'Продвинутый: Введите определенные ядра на которых может работать сервер или оставьте пустым, чтобы разрешить все ядра. Это может быть одно число или список через запятую или пунктирный диапазон. Например: 0, 0-1,3 или 0,1,3,4. Рекомендуется оставить это значение пустым и позволить процессору самостоятельно распределять нагрузку.'
                    }
                />
                <Field
                    id={'limits.memory'}
                    name={'limits.memory'}
                    label={'Лимит ОЗУ'}
                    type={'number'}
                    description={
                        'Максимальный объем памяти, установленный дляконтейнера. Установка этого параметра на 0 позволит использовать неограниченный объем ОЗУ в контейнере.'
                    }
                />
                <Field id={'limits.swap'} name={'limits.swap'} label={'Swap Limit'} type={'number'} />
                <Field
                    id={'limits.disk'}
                    name={'limits.disk'}
                    label={'Размер Диска'}
                    type={'number'}
                    description={
                        'Сервер не будет загружен, если он использует больше указанного объема места. Если сервер превысит этот лимит во время работы, он будет безопасно остановлен и заблокирован до тех пор, пока не освободится достаточно места. Установите на 0, чтобы разрешить неограниченное использование диска.'
                    }
                />
                <Field
                    id={'limits.io'}
                    name={'limits.io'}
                    label={'Ограничение IO'}
                    type={'number'}
                    description={
                        'Продвинутый: Производительность IO этого сервера относительно других запущенных контейнеров в системе. Значение должно находиться в диапазоне от 10 до 1000.'
                    }
                />
                <div css={tw`xl:col-span-2 bg-neutral-800 border border-neutral-900 shadow-inner p-4 rounded`}>
                    <FormikSwitch
                        name={'limits.oomKiller'}
                        label={'OOM Killer'}
                        description={
                            'Включение Out of Memory Killer может привести к неожиданному завершению процесса сервера.'
                        }
                    />
                </div>
            </div>
        </AdminBox>
    );
};
