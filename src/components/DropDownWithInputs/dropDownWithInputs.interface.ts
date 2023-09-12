import { FormikProps } from 'formik';
import { ICategory, IInitialValues } from '../Filter/filter.interface';

export interface IDropDownWithInputs extends FormikProps<IInitialValues> {
  categories: ICategory[];
}
