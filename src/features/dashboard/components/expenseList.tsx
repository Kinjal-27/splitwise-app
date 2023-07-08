import { indexOf } from 'lodash';
import { FC, useEffect, useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { getRandomColor } from 'shared/util/utility';
import { profileImgMapper } from '../constants/constant';
import { IFormikValues } from '../interface/dashboard';

const ExpenseList: FC = () => {
	const [getExpenseData, setExpenseData] = useState<IFormikValues[]>([]);

	const expenseList = localStorage.getItem('Expenses');
	const expenseListData = expenseList && JSON.parse(expenseList);
	useEffect(() => {
		setExpenseData(expenseListData);
	}, [localStorage]);
	const handleSettleUp = useCallback((summaryIndex: number) => {
		const index = expenseListData.findIndex((expenseData: any, index: number) => index === summaryIndex);

		if (index !== -1) {
			const updatedArr = [...expenseListData];
			updatedArr[index].amountStatus = true;
			localStorage.setItem('Expenses', JSON.stringify(updatedArr));
			setExpenseData(updatedArr);
		}
	}, []);

	return (
		<div className='common-list-wrapper'>
			<h5 className='expense-list-title mt--30'>Recently Added</h5>
			<div className='flex flex--wrap justify-content--between'>
				{getExpenseData &&
					Array.isArray(getExpenseData) &&
					getExpenseData.map((expense: any, index: number) => {
						const { amount, description, involvedFriends, whoPaid, date, amountStatus } = expense;

						return (
							<div key={index} className='flex flex--column expense-card'>
								<div className='flex justify-content--between'>
									<p className='expense-description font-size--24 font--semi-bold mb--5'>
										{description}
									</p>
									<p className='date-text'>{date}</p>
								</div>
								<div className='font-size--md flex justify-content--between'>
									<div className='font-size--md'>
										<span className='font-size--xxl'>$ {amount} </span> paid by{' '}
										<span style={{ color: `${getRandomColor()}` }}>{whoPaid}</span>{' '}
									</div>
									{!amountStatus ? (
										<Button className='btn settle-up-btn' onClick={() => handleSettleUp(index)}>
											Settle Up
										</Button>
									) : (
										<p className='settled-text'>SETTLED</p>
									)}
								</div>

								<div className='flex mt--5'>
									{involvedFriends.map((friendName: string, index: number) => {
										return (
											<div className='flex flex--column align-items--center mr--10'>
												<img
													key={index}
													src={profileImgMapper[friendName]}
													alt='profile-img'
													className='expense-list-img'
												/>
												<p className='mt--10'>{friendName}</p>
												<p className='font-size--xxs' style={{ color: `${getRandomColor()}` }}>
													{amountStatus
														? 'paid $ 0.00'
														: `Owes  ${(amount / involvedFriends.length).toFixed(2)}`}
												</p>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default ExpenseList;
