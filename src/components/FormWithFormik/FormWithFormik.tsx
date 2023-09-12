import { FormikProvider, useFormik } from 'formik';
import { IFromWithFormikProps } from './FormWithFormik.interface';

export const FormWithFormik = <T extends object>(props: IFromWithFormikProps<T>) => {
  const {
    dataTestId = 'Form',
    children,
    initialValues,
    validationSchema,
    onSubmit,
  } = props;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <FormikProvider value={formik}>
      <form 
        data-testid={dataTestId} 
        className='rootForm' 
        noValidate
      >
        {children(formik)}
      </form>
    </FormikProvider>
  );
};
