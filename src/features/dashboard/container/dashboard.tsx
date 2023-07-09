import { useState, FC } from 'react';
import { Button } from 'react-bootstrap';

import Header from 'shared/components/header/header';
import CustomModal from 'shared/modal/modal';
import { IObj } from 'shared/interface';
import AddExpenses from '../components/addExpense';
import ExpenseList from '../components/expenseList';
import { profileImgMapper } from '../constants/constant';
import groupMembers from 'assets/JSONDATA/groupMembers.json';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/dashboard.scss';

const Dashboard: FC = () => {
	const [isOpenModel, setIsOpenModel] = useState(false);

	localStorage.setItem('groupMembers', JSON.stringify(groupMembers));

	const storedMembers = localStorage.getItem('groupMembers');
	const getMembers = storedMembers && JSON.parse(storedMembers as string);

	return (
		<>
			<Header />
			<div className='dashboard-wrapper'>
				<div className='flex justify-content--between align-items--center'>
					<Button className='btn btn-success mt--10' onClick={() => setIsOpenModel(true)}>
						Add Expense
					</Button>
					<div className='flex profile-group-wrapper'>
						{getMembers &&
							Array.isArray(getMembers) &&
							getMembers.map((members: IObj, index: number) => {
								return (
									<div key={index} className='position--relative cursor--pointer tooltip-wrapper'>
										<img
											src={profileImgMapper[members.label]}
											alt='profile'
											className='profile-img'
										/>
										<span className='tooltip-text font-size--lg mt--5'>{members.label}</span>
									</div>
								);
							})}
					</div>
				</div>
				{isOpenModel && (
					<CustomModal show={true} handleClose={() => setIsOpenModel(!isOpenModel)}>
						<AddExpenses handleClose={() => setIsOpenModel(!isOpenModel)} />
					</CustomModal>
				)}
				<div className='height--full flex flex--wrap'>
					<ExpenseList />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
