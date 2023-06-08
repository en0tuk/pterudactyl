import type { FormikHelpers } from 'formik';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import tw from 'twin.macro';
import { object, string } from 'yup';

import createNest from '@/api/admin/nests/createNest';
import getNests from '@/api/admin/nests/getNests';
import { Button } from '@/components/elements/button';
import { Size, Variant } from '@/components/elements/button/types';
import Field from '@/components/elements/Field';
import FlashMessageRender from '@/components/FlashMessageRender';
import Modal from '@/components/elements/Modal';
import useFlash from '@/plugins/useFlash';

interface Values {
    name: string;
    description: string;
}

const schema = object().shape({
    name: string().required('Должно быть указано название.').max(32, 'Название не должно превышать 32 символа.'),
    description: string().max(255, 'Описание гнезда не должно превышать 255 символов.'),
});

export default () => {
    const [visible, setVisible] = useState(false);
    const { clearFlashes, clearAndAddHttpError } = useFlash();
    const { mutate } = getNests();

    const submit = ({ name, description }: Values, { setSubmitting }: FormikHelpers<Values>) => {
        clearFlashes('nest:create');
        setSubmitting(true);

        createNest(name, description)
            .then(async nest => {
                await mutate(data => ({ ...data!, items: data!.items.concat(nest) }), false);
                setVisible(false);
            })
            .catch(error => {
                clearAndAddHttpError({ key: 'nest:create', error });
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
                        <FlashMessageRender byKey={'nest:create'} css={tw`mb-6`} />

                        <h2 css={tw`mb-6 text-2xl text-neutral-100`}>Новое гнездо</h2>

                        <Form css={tw`m-0`}>
                            <Field
                                type={'text'}
                                id={'name'}
                                name={'name'}
                                label={'Название'}
                                description={'Короткое название гнезда.'}
                                autoFocus
                            />

                            <div css={tw`mt-6`}>
                                <Field
                                    type={'text'}
                                    id={'description'}
                                    name={'description'}
                                    label={'Описание'}
                                    description={'Описание гнезда.'}
                                />
                            </div>

                            <div css={tw`flex flex-wrap justify-end mt-6`}>
                                <Button.Text
                                    type="button"
                                    variant={Variant.Secondary}
                                    className="w-full sm:mr-2 sm:w-auto"
                                    onClick={() => setVisible(false)}
                                >
                                    Отмена
                                </Button.Text>

                                <Button type="submit" className="mt-4 w-full sm:mt-0 sm:w-auto">
                                    Создать гнездо
                                </Button>
                            </div>
                        </Form>
                    </Modal>
                )}
            </Formik>

            <Button
                type="button"
                size={Size.Large}
                className="h-10 whitespace-nowrap px-4 py-0"
                onClick={() => setVisible(true)}
            >
                Новое гнездо
            </Button>
        </>
    );
};
