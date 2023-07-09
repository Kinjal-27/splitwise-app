import { useCallback } from 'react';
import { profileImgMapper } from '../constants/constant';

const CheckboxInput = ({ field, form, label }: any) => {
	const handleChange = useCallback(() => {
		const involvedFriends = Array.isArray(field.value) ? [...field.value] : [];

		const index = involvedFriends.indexOf(label);
		if (index >= 0) {
			involvedFriends.splice(index, 1);
		} else {
			involvedFriends.push(label);
		}

		form.setFieldValue(field.name, involvedFriends);
	}, [field.value, field.name, form, label]);

	return (
		<div>
			<label htmlFor={label} className='position--relative'>
				<input
					type='checkbox'
					id={field.name + label}
					{...field}
					onChange={handleChange}
					className='checkbox-input cursor--pointer'
					checked={Array.isArray(field.value) && field.value.includes(label)}
				/>
				<img
					src={profileImgMapper[label as keyof Record<string, any>]}
					alt='profile-img'
					className='profile-img'
				/>
			</label>
		</div>
	);
};

export default CheckboxInput;
