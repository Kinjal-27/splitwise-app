import { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { ReactSelect } from 'shared/components/form/reactSelect';
import { REACT_SELECT_STYLE } from 'shared/constants/constants';
import * as schema from 'shared/constants/validation-schema';
import { IObj, IOption } from 'shared/interface';

import { IExpenseDataProps } from '../interface/dashboard';
import CheckboxInput from '../components/checkboxInput';
import { formattedDate } from 'shared/util/utility';

interface ICommonFormProps {
	handleClose: () => void;
}

const AddExpenses: FC<ICommonFormProps> = ({ handleClose }) => {
	const initialData = {
		description: '',
		amount: '',
		whoPaid: '',
		date: '',
		involvedFriends: [],
		amountStatus: false
	};
	const storedMembers = localStorage.getItem('groupMembers');
	const getMembers = storedMembers && JSON.parse(storedMembers as string);

	const handleSubmit = (values: IExpenseDataProps) => {
		values.date = formattedDate;
		const storedArray = JSON.parse(localStorage.getItem('Expenses') || '[]');
		storedArray.push(values);
		localStorage.setItem('Expenses', JSON.stringify(storedArray));
		handleClose();
	};

	return (
		<div>
			<Formik
				initialValues={initialData}
				validateOnChange
				validationSchema={schema.createModuleValidationSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched, setFieldValue }) => {
					return (
						<Form className='form-wrapper flex flex--column' autoComplete='off'>
							<h3 className='form-title'>Add Expense</h3>
							<div className='form-inputs'>
								<div className='flex width--full justify-content--between align-items--end'>
									<label htmlFor='description' className='form-label'>
										Enter a description :{' '}
									</label>
									<Field name='description' className='form-control' placeholder='Description' />
								</div>
								{errors.description && touched.description && (
									<div className='error flex justify-content--end'>{errors.description}</div>
								)}
								<div className='flex width--full justify-content--between align-items--end'>
									<label htmlFor='amount' className='form-label'>
										Enter the $ amount :{' '}
									</label>
									<Field name='amount' type='number' className='form-control' placeholder='Amount' />
								</div>
								{errors.amount && touched.amount && (
									<div className='error flex justify-content--end'>{errors.amount}</div>
								)}
								<div className='flex width--full justify-content--between align-items--end mt--20'>
									<label htmlFor='whoPaid' className='form-label'>
										Who paid :{' '}
									</label>
									<ReactSelect
										styles={{ ...REACT_SELECT_STYLE }}
										options={getMembers}
										isMulti={false}
										isSearchable={false}
										name='whoPaid'
										className='text--white'
										onChange={(selectedOption: IOption) => {
											setFieldValue('whoPaid', selectedOption.label);
										}}
									/>
								</div>
								{errors.whoPaid && touched.whoPaid && (
									<div className='error flex justify-content--end'>{errors.whoPaid}</div>
								)}
								<div className='flex flex--column  mt--30'>
									<p className='form-label'>Part of the Expense :</p>
									<div className='flex justify-content--between mt--10'>
										{getMembers.map((item: IObj) => (
											<Field
												key={item.value}
												name='involvedFriends'
												component={CheckboxInput}
												label={item.label}
												additionalProp={initialData.whoPaid}
											/>
										))}
									</div>
								</div>
							</div>

							<div className='flex justify-content--end'>
								<div className='submit-btn mr--20'>
									<Button type='submit' className='button btn btn-success mt--40'>
										Add Expense
									</Button>
								</div>
								<Button type='button' className='btn cancel-btn mt--40' onClick={() => handleClose()}>
									Cancel
								</Button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default AddExpenses;
