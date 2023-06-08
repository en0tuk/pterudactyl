import type { FormikHelpers } from 'formik';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import tw from 'twin.macro';
import { object, string } from 'yup';

import { getRoles, createRole } from '@/api/admin/roles';
import FlashMessageRender from '@/components/FlashMessageRender';
import Button from '@/components/elements/Button';
import Field from '@/components/elements/Field';
import Modal from '@/components/elements/Modal';
import useFlash from '@/plugins/useFlash';

interface Values {
    name: string;
    description: string;
}

const schema = object().shape({
    name: string().required('Необходимо указать имя роли.').max(32, 'Имя роли не должно превышать 32 символа.'),
    description: string().max(255, 'Описание роли не должно превышать 255 символ'),
});

export default () => {
    const [visible, setVisible] = useState(false);
    const { clearFlashes, clearAndAddHttpError } = useFlash();
    const { mutate } = getRoles();

    const submit = ({ name, description }: Values, { setSubmitting }: FormikHelpers<Values>) => {
        clearFlashes('role:create');
        setSubmitting(true);

        createRole(name, description)
            .then(async role => {
                await mutate(data => ({ ...data!, items: data!.items.concat(role) }), false);
                setVisible(false);
            })
            .catch(error => {
                clearAndAddHttpError({ key: 'role:create', error });
                setSubmitting(false);
            });
    };

    return (
        <>
            <Formik onSubmit={submit} initialValues={{ name: '', description: '' }} validationSchema={schema}>
                {({ isSubmitting, resetForm }) => (
                    <Modal
                        visible={visible}
                        dismissable={!isSubmitting}
                        showSpinnerOverlay={isSubmitting}
                        onDismissed={() => {
                            resetForm();
                            setVisible(false);
                        }}
                    >
                        <FlashMessageRender byKey={'role:create'} css={tw`mb-6`} />
                        <h2 css={tw`mb-6 text-2xl text-neutral-100`}>Новая роль</h2>
                        <Form css={tw`m-0`}>
                            <Field
                                type={'text'}
                                id={'name'}
                                name={'name'}
                                label={'Name'}
                                description={'A short name used to identify this role.'}
                                autoFocus
                            />

                            <div css={tw`mt-6`}>
                                <Field
                                    type={'text'}
                                    id={'description'}
                                    name={'description'}
                                    label={'Description'}
                                    description={'A description for this role.'}
                                />
                            </div>

                            <div css={tw`flex flex-wrap justify-end mt-6`}>
                                <Button
                                    type={'button'}
                                    isSecondary
                                    css={tw`w-full sm:w-auto sm:mr-2`}
                                    onClick={() => setVisible(false)}
                                >
                                    Отмена
                                </Button>
                                <Button css={tw`w-full mt-4 sm:w-auto sm:mt-0`} type={'submit'}>
                                    Создать роль
                                </Button>
                            </div>
                        </Form>
                    </Modal>
                )}
            </Formik>

            <Button
                type={'button'}
                size={'large'}
                css={tw`h-10 px-4 py-0 whitespace-nowrap`}
                onClick={() => setVisible(true)}
            >
                Новая роль
            </Button>
        </>
    );
};
