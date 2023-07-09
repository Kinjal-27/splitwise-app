import { CSSProperties } from 'react';

const FIRST_LEVEL_BREADCRUMBS = [{ name: 'home', link: '/' }];

const NUMBER_REGEX = /[0-9]*\.?[0-9]*$/;
const PASSWORD_VALIDATOR_REGEX = /^(?=.{8,})(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+*!=]).*$/;
const EMAIL_VALIDATOR_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const DATE_AND_TIME_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])*$/;

const REACT_SELECT_STYLE = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		...state,
		fontSize: '13px',
		fontWeight: '$font-regular',
		borderBottom: '1px solid rgb(8 161 8 / 40%)',
		padding: 5,
		backgroundColor: state.isSelected ? '#198754' : state.isFocused ? '#198754' : '',
		':active': {
			backgroundColor: '#198754',
			color: 'white'
		},
		':hover': {
			backgroundColor: '#198754',
			color: 'white'
		},
		':focus': {
			backgroundColor: '#198754',
			color: 'white',
			outline: 0
		},
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	}),
	menu: (base: CSSProperties) => ({
		...base,
		zIndex: 6,
		marginTop: 0,
		position: 'absolute',
		top: '49px',
		left: '0px',
		borderRadius: '5px',
		border: 'none',
		boxShadow: 'none',
		backgroundColor: 'white',
		color: 'rgba(27, 27, 27, 0.87)'
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		padding: 0,
		backgroundColor: 'white',
		width: '100%',
		border: '1px solid rgb(8 161 8 / 40%)',
		borderRadius: '5px',
		maxWidth: '220px',
		maxHeight: '250px',
		boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.25) 0px 2px 10px 0px',
		color: 'rgba(27, 27, 27, 0.87)'
	}),
	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),
	dropdownIndicator: (base: CSSProperties, state: any) => ({
		...base,
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none'
	}),
	indicatorSeparator: () => ({
		width: '0'
	}),
	singleValue: (base: CSSProperties, state: any) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';
		return { ...base, opacity: opacity, transition: transition };
	},
	control: (base: CSSProperties, state: any) => ({
		...base,
		display: 'flex',
		width: '100%',
		borderRadius: '5px',
		padding: '2px 4px',
		cursor: 'pointer',
		color: 'rgba(27, 27, 27, 0.87)',
		fontSize: '13px',
		fontWeight: '$font-regular',
		background: 'white',
		maxWidth: '230px',
		border: '1px solid rgb(8 161 8 / 40%)',
		':hover': {
			border: '1px solid rgb(8 161 8 / 40%)'
		},
		':focus': {
			color: 'white'
		},
		boxShadow: '0 0 0 0	rgb(8 161 8 / 40%)'
	}),
	container: (base: CSSProperties, state: any) => ({
		...base,
		width: '100%',
		maxWidth: '220px',
		position: 'relative',
		fontSize: '13px',
		background: 'transparent !important',
		color: 'white'
	}),
	placeholder: (base: CSSProperties) => ({
		...base,
		color: 'black !important',
		fontSize: '14px',
		fontWeight: '$font-medium'
	})
};

export {
	FIRST_LEVEL_BREADCRUMBS,
	NUMBER_REGEX,
	PASSWORD_VALIDATOR_REGEX,
	EMAIL_VALIDATOR_REGEX,
	DATE_AND_TIME_REGEX,
	REACT_SELECT_STYLE
	// STATUS_REACT_SELECT_STYLE,
	// DROPDOWN_STYLES
};
