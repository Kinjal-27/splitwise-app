import { getRandomColor } from 'shared/util/utility';
import { profileImgMapper } from '../constants/constant';

const SettleUp = () => {
	const getExpenseData = JSON.parse(localStorage.getItem('Expenses') || '[]');

	return (
		<div className='common-list-wrapper'>
			<h5 className='expense-list-title mt--30'>Settle Up</h5>
			{getExpenseData &&
				Array.isArray(getExpenseData) &&
				getExpenseData.map((expense: any, index: number) => {
					const { amount, description, involvedFriends, whoPaid, date } = expense;
					return (
						<div key={index} className='flex flex--column expense-card'>
							<div className='flex justify-content--between'>
								<p className='expense-description font-size--24 font--semi-bold mb--5'>{description}</p>
								<p className='date-text'>{date}</p>
							</div>
							<div className='font-size--md'>
								<span className='font-size--xxl'>$ {amount} </span> paid by{' '}
								<span style={{ color: `${getRandomColor()}` }}>{whoPaid}</span>{' '}
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
												Owes {amount / involvedFriends.length}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default SettleUp;
