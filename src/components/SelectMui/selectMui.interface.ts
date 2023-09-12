import { FormikProps } from 'formik';
import { ICategory, IInitialValues } from '../Filter/filter.interface';

export interface ISelectMuiProps extends FormikProps<IInitialValues> {
  categories: ICategory[];
}
