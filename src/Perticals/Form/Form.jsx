/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    FormProvider,
} from 'react-hook-form';




const PHForm = ({ onSubmit, children, }) => {


    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
};

export default PHForm;