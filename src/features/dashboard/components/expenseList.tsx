import { FC, useEffect, useState, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import { Button } from 'react-bootstrap';

import { getRandomColor } from 'shared/util/utility';
import { notify } from 'shared/components/notification/notification';
import { Delete } from 'shared/components/icons/icons';

import { profileImgMapper } from '../constants/constant';
import { IExpenseDataProps } from '../interface/dashboard';

const ExpenseList: FC = () => {
	const expenseList = localStorage.getItem('Expenses');
	const expenseListData = expenseList && JSON.parse(expenseList);
	const [getExpenseData, setExpenseData] = useState<IExpenseDataProps[]>([]);

	useEffect(() => {
		setExpenseData(expenseListData);
	}, [localStorage]);

	//Delete expenses
	const handleDeleteExpense = useCallback(
		(index: number) => {
			const deletedIndex = expenseListData.findIndex(
				(expenseData: IExpenseDataProps, index: number) => index === index
			);

			if (deletedIndex !== -1) {
				const updatedArr = [...expenseListData];
				updatedArr.splice(index, 1);
				localStorage.setItem('Expenses', JSON.stringify(updatedArr));
				setExpenseData([...updatedArr]);
				notify('Your expense has been deleted successfully', 'success');
			}
		},
		[expenseListData, localStorage]
	);

	//Settle up expenses
	const handleSettleUp = useCallback(
		(summaryIndex: number) => {
			const index = expenseListData.findIndex(
				(expenseData: IExpenseDataProps, index: number) => index === summaryIndex
			);

			if (index !== -1) {
				const updatedArr = [...expenseListData];
				updatedArr[index].amountStatus = true;
				localStorage.setItem('Expenses', JSON.stringify(updatedArr));
				setExpenseData([...updatedArr]);
				notify('Your expense has been settled', 'success');
			}
		},
		[expenseListData, localStorage]
	);

	return (
		<div className='expense-list-wrapper'>
			<h5 className='expense-list-title mt--10'>Recently Added</h5>
			<div className='flex flex--wrap justify-content--between'>
				{expenseListData &&
					expenseListData.map((expense: IExpenseDataProps, index: number) => {
						const { amount, description, involvedFriends, whoPaid, date, amountStatus } = expense;

						return (
							<div key={index} className='flex flex--column expense-card'>
								<div className='flex justify-content--between'>
									<p className='expense-description font-size--28 font--semi-bold mb--5'>
										{description}
									</p>
									<p className='date-text'>{date}</p>
								</div>
								<div className='font-size--md flex justify-content--between'>
									<p>
										<span className='font-size--xxl'>${amount} </span> paid by{' '}
										<span className='font-size-xxl' style={{ color: `${getRandomColor()}` }}>
											{whoPaid === 'Lily' ? 'You' : `${whoPaid}`}
										</span>{' '}
									</p>
									{!amountStatus ? (
										<Button className='btn settle-up-btn' onClick={() => handleSettleUp(index)}>
											SETTLE UP
										</Button>
									) : (
										<p className='settled-text'>SETTLED</p>
									)}
								</div>
								<div className='flex align-items--end justify-content--between'>
									<div className='flex flex--wrap mt--15'>
										{involvedFriends &&
											involvedFriends.map((friendName: string, index: number) => {
												return (
													<div
														key={index}
														className='member-amount-wrapper flex flex--column align-items--center mr--10'
													>
														<img
															src={profileImgMapper[friendName]}
															alt='profile-img'
															className='friend-img'
														/>
														<p className='friend-name mt--5 font-size--lg'>
															{friendName === 'Lily' ? 'You' : `${friendName}`}
														</p>
														<p
															className='font-size--xs'
															style={{ color: `${getRandomColor()}` }}
														>
															{amountStatus
																? 'Owes $ 0.00'
																: `Owes  ${(
																		Number(amount) / involvedFriends.length
																  ).toFixed(2)}`}
														</p>
													</div>
												);
											})}
									</div>
									<div className='cursor--pointer' onClick={() => handleDeleteExpense(index)}>
										<Delete className='bi-trash' />
									</div>
								</div>
							</div>
						);
					})}
				{isEmpty(expenseListData) && (
					<div className='no-data-wrapper'>
						<h5 className='text--center'>No expense found</h5>
					</div>
				)}
			</div>
		</div>
	);
};

export default ExpenseList;
