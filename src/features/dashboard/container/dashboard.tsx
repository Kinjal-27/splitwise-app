import { Button } from 'react-bootstrap';
import React, { useState, FC } from 'react';
import Header from 'shared/components/header/header';
import CustomModal from 'shared/modal/modal';
import AddExpenses from '../components/addExpense';
import ExpenseList from '../components/expenseList';
import SettleUp from '../components/settleUp';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/dashboard.scss';

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
				<div className='flex justify-content--between'>
					<ExpenseList />
					<SettleUp />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
