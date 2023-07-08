import { Field, Form, Formik } from 'formik';
import React, { useState, FC } from 'react';
import { Button } from 'react-bootstrap';
import { IFormikValues } from '../interface/dashboard';
import groupMembers from 'assets/JSONDATA/groupMembers.json';
import { ReactSelect } from 'shared/components/form/reactSelect';
import { REACT_SELECT_STYLE, STATUS_REACT_SELECT_STYLE } from 'shared/constants/constants';
import * as schema from 'shared/constants/validation-schema';
import { IOption } from 'shared/interface';
import CheckboxInput from '../components/checkboxInput';

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
	const getMembers = JSON.parse(storedMembers as string);

	localStorage.setItem('groupMembers', JSON.stringify(groupMembers));

	const formattedDate = new Date().toLocaleString('en-us', { month: 'short', year: 'numeric', day: '2-digit' }) + '';

	const handleSubmit = (values: IFormikValues) => {
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
										enter a description:{' '}
									</label>
									<Field name='description' className='form-control' />
								</div>
								{errors.description && touched.description ? (
									<div className='error'>{errors.description}</div>
								) : null}
								<div className='flex width--full justify-content--between align-items--end'>
									<label htmlFor='amount' className='form-label'>
										enter the $ amount:{' '}
									</label>
									<Field name='amount' className='form-control' />
								</div>
								{errors.amount && touched.amount ? <div className='error'>{errors.amount}</div> : null}
								<div className='flex width--full justify-content--between align-items--end mt--30'>
									<label htmlFor='whoPaid' className='form-label'>
										who paid:{' '}
									</label>
									<ReactSelect
										styles={{ ...REACT_SELECT_STYLE, ...STATUS_REACT_SELECT_STYLE }}
										options={getMembers}
										isMulti={false}
										isSearchable={false}
										name='whoPaid'
										onChange={(selectedOption: IOption) => {
											setFieldValue('whoPaid', selectedOption.label);
										}}
									/>
								</div>
								{errors.whoPaid && touched.whoPaid ? (
									<div className='error'>{errors.whoPaid}</div>
								) : null}
								<div className='flex justify-content--between mt--20'>
									{getMembers.map((item: any) => (
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

							<div className='flex justify-content--end'>
								<div className='cancel-btn mr--20'>
									<Button type='submit' className='btn btn-danger mt--40'>
										Cancel
									</Button>
								</div>
								<div className='submit-btn'>
									<Button type='submit' className='button btn btn-success mt--40'>
										Add Expense
									</Button>
								</div>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default AddExpenses;
