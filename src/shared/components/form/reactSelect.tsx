import React from 'react';
import Select from 'react-select';

import { reactSelectStyles } from './reactSelectStyles';

const initStyles = {
	control: () => ({
		// none of react-selects styles are passed to <View />
		display: 'flex',
		width: '100%',
		minHeight: '38px  ',
		border: '1px solid #e5e6e7',
		padding: '0px',
		color: 'black'
	})
};

const ReactSelect: React.FC<any> = (props) => {
	const {
		placeholder,
		menuPlacement,
		value,
		onChange,
		isOptionDisabled,
		onInputChange,
		options,
		components,
		getOptionLabel,
		getOptionValue,
		isClearable,
		closeMenuOnSelect,
		isSearchable,
		isMulti,
		isDisabled,
		styles,
		defaultValue
	} = props;
	return (
		<Select
			defaultValue={defaultValue}
			placeholder={placeholder || 'Select member'}
			menuPlacement={menuPlacement || 'auto'}
			value={value}
			onChange={onChange}
			isOptionDisabled={(options) => (isOptionDisabled ? isOptionDisabled(options) : false)}
			onInputChange={onInputChange}
			options={options}
			components={components || {}}
			getOptionLabel={getOptionLabel}
			getOptionValue={getOptionValue}
			isClearable={isClearable}
			styles={{ ...reactSelectStyles, ...(styles || initStyles) }}
			closeMenuOnSelect={closeMenuOnSelect}
			isSearchable={isSearchable}
			isMulti={isMulti}
			isDisabled={isDisabled}
		/>
	);
};

export { ReactSelect };
