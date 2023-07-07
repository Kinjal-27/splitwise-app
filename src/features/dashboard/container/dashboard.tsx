import React, { SelectHTMLAttributes, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { ReactSelect } from 'shared/components/form/reactSelect';
import { REACT_SELECT_STYLE, STATUS_REACT_SELECT_STYLE } from 'shared/constants/constants';
import CustomModal from 'shared/modal/modal';
import groupMembers from 'assets/JSONDATA/groupMembers.json';

import * as schema from 'shared/constants/validation-schema';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/dashboard.scss';

interface IOption {
	label: string;
	value: string | number | boolean | null;
}

interface IFormikValues {
	description: string;
	amount: string;
	whoPaid: string;
}
const Dashboard = () => {
	const [selected, setSelected] = useState({});
	const [isOpenModel, setIsOpenModel] = useState(false);
	const [initialData, setInitialData] = useState({
		description: '',
		amount: '',
		whoPaid: ''
	});
	const getMembers = localStorage.getItem('groupMembers');

	const STATUS_DROPDOWN = [
		{
			label: 'jasmeen',
			value: 111
		},
		{
			label: 'rita',
			value: 112
		},
		{
			label: 'kinjal',
			value: 113
		}
	];

	const handleChange = (selectedOption: string) => {
		setSelected(selectedOption);
	};

	localStorage.setItem('groupMembers', JSON.stringify(groupMembers));

	const handleSubmit = (values: IFormikValues) => {
		localStorage.setItem('Expenses', JSON.stringify(values));
		setIsOpenModel(!isOpenModel);
	};

	return (
		<div className='dashboard-wrapper'>
			<h3 className='text--center pt--30'>Dashboard</h3>
			<Button onClick={() => setIsOpenModel(true)}>Add Expenses</Button>
			{isOpenModel && (
				<CustomModal show={true} handleClose={() => setIsOpenModel(!isOpenModel)}>
					<Formik
						initialValues={initialData}
						validateOnChange
						// validationSchema={schema.createModuleValidationSchema}
						onSubmit={handleSubmit}
					>
						{({ errors, touched, values, setFieldValue }) => {
							return (
								<Form className='form-wrapper flex flex--column'>
									<div className='form-title'>
										<h3 className='text--black'>Add Expense</h3>
									</div>
									<div className='form-inputs'>
										<div className='flex width--full justify-content--between align-items--center'>
											<label htmlFor='description'>enter a description: </label>
											<Field
												name='description'
												className='form-control'
												placeholder='description'
											/>
										</div>
										{errors.description && touched.description ? (
											<div className='error'>{errors.description}</div>
										) : null}
										<div className='flex width--full justify-content--between align-items--center'>
											<label htmlFor='amount'>enter the $ amount: </label>
											<Field name='amount' className='form-control' placeholder='amount' />
										</div>
										{errors.amount && touched.amount ? (
											<div className='error'>{errors.amount}</div>
										) : null}
										<div className='flex width--full justify-content--between align-items--center mt--30'>
											<label htmlFor='whoPaid'>who paid: </label>
											<ReactSelect
												styles={{ ...REACT_SELECT_STYLE, ...STATUS_REACT_SELECT_STYLE }}
												options={STATUS_DROPDOWN}
												isMulti={false}
												isSearchable={false}
												name='whoPaid'
												onChange={(selectedOption: IOption) => {
													setFieldValue('whoPaid', selectedOption.label);
													handleChange(selectedOption.label);
												}}
											/>
										</div>
										{errors.whoPaid && touched.whoPaid ? (
											<div className='error'>{errors.whoPaid}</div>
										) : null}
									</div>
									<div className='submit-btn'>
										<Button type='submit' className='button mt--40'>
											Submit
										</Button>
									</div>
								</Form>
							);
						}}
					</Formik>
				</CustomModal>
			)}
		</div>
	);
};

export default Dashboard;
