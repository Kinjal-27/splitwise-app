import { FC } from 'react';

const ExpenseList: FC = () => {
	const getExpenseData = JSON.parse(localStorage.getItem('Expenses') || '[]');
	return (
		<div className='expense-list-wrapper'>
			<h4 className='expense-list-title mt--30'>Expense List</h4>
			{getExpenseData &&
				Array.isArray(getExpenseData) &&
				getExpenseData.map((expense: any, index: number) => {
					const { amount, description, involvedFriends, whoPaid, date } = expense;
					return (
						<div key={index} className='flex expense-card'>
							<p>{date}</p>
							<p>Description: {description}</p>
							<p>Amount: {amount}</p>
							<p>Who Paid: {whoPaid}</p>
							<p>Involved Friends: {involvedFriends}</p>
						</div>
					);
				})}
		</div>
	);
};

export default ExpenseList;
