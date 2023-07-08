import { Button } from 'react-bootstrap';
import React, { useState, FC } from 'react';
import Header from 'shared/components/header/header';
import AddExpenses from '../components/addExpense';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/dashboard.scss';
import CustomModal from 'shared/modal/modal';
import ExpenseList from '../components/expenseList';

const Dashboard: FC = () => {
	const [isOpenModel, setIsOpenModel] = useState(false);
	return (
		<>
			<Header />
			<div className='dashboard-wrapper content-container'>
				<Button className='btn btn-success mt--30' onClick={() => setIsOpenModel(true)}>
					Add Expenses
				</Button>
				{isOpenModel && (
					<CustomModal show={true} handleClose={() => setIsOpenModel(!isOpenModel)}>
						<AddExpenses handleClose={() => setIsOpenModel(!isOpenModel)} />
					</CustomModal>
				)}
				<ExpenseList />
			</div>
		</>
	);
};

export default Dashboard;
