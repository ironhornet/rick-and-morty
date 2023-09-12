import { ReactNode } from 'react';
import { ObjectSchema, Maybe, AnyObject } from 'yup';
import { FormikHelpers, FormikProps } from 'formik';

export interface IFromWithFormikProps<T extends Maybe<AnyObject>> {
  dataTestId?: string;
  initialValues: T;
  validationSchema?: ObjectSchema<T>;
  className?: string;
  children: (formik: FormikProps<T>) => ReactNode;
  onSubmit: (values: T, actions: FormikHelpers<T>) => void;
}
