import { Form, Formik } from 'formik';
import tw from 'twin.macro';

import AdminBox from '@/components/admin/AdminBox';
import Field, { FieldRow } from '@/components/elements/Field';

export default () => {
    const submit = () => {
        //
    };

    return (
        <Formik onSubmit={submit} initialValues={{}}>
            <Form>
                <div css={tw`grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6`}>
                    <AdminBox title="Брендинг">
                        <FieldRow>
                            <Field id={'appName'} name={'appName'} type={'text'} label={'Название Приложения'} description={''} />
                        </FieldRow>
                    </AdminBox>

                    <AdminBox title="Аналитика">
                        <FieldRow>
                            <Field
                                id={'googleAnalytics'}
                                name={'googleAnalytics'}
                                type={'text'}
                                label={'Аналитика Google'}
                                description={''}
                            />
                        </FieldRow>
                    </AdminBox>
                </div>
            </Form>
        </Formik>
    );
};
