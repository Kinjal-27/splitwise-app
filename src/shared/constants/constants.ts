import { CSSProperties } from 'react';

const FIRST_LEVEL_BREADCRUMBS = [{ name: 'home', link: '/' }];

const NUMBER_REGEX = /[0-9]*\.?[0-9]*$/;
const PASSWORD_VALIDATOR_REGEX = /^(?=.{8,})(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+*!=]).*$/;
const EMAIL_VALIDATOR_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const DATE_AND_TIME_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])*$/;

enum HASHTAG {
	'hashtag' = 'Hashtag Name',
	'slug' = 'Slug',
	'is_active' = 'Status',
	'is_sponsored_by' = 'Sponsored by',
	'priority' = 'Priority',
	'meta_title' = 'Meta Title',
	'meta_description' = 'Meta Description'
}

const REACT_SELECT_STYLE = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		fontSize: '13px',
		fontWeight: '$font-regular',
		borderBottom: '1px solid #e7e7e7',
		padding: 5,
		color: 'black',
		backgroundColor: state.isSelected ? '#d5d5d5' : state.isFocused ? '#e7e7e7' : '',
		':active': {
			backgroundColor: '#e7e7e7'
		},
		':hover': {
			backgroundColor: '#e7e7e7'
		},
		':focus': {
			backgroundColor: '#e7e7e7',
			outline: 0
		},
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	}),
	menu: (base: CSSProperties) => ({
		...base,
		zIndex: 3,
		marginTop: 0,
		position: 'absolute',
		top: '49px',
		left: '0px',
		borderRadius: '5px',
		border: 'none',
		boxShadow: 'none',
		backgroundColor: 'black'
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		padding: 0,
		backgroundColor: '#000',
		width: '100%',
		border: '1px solid #e7e7e7',
		borderRadius: '5px',
		maxWidth: '205px',
		maxHeight: '250px',
		boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.25) 0px 2px 10px 0px'
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
	control: () => ({
		display: 'flex',
		width: '100%',
		maxWidth: '195px',
		border: '1px solid #3ea4a6',
		borderRadius: '5px',
		padding: '2px 4px',
		cursor: 'pointer',
		color: '$spanish-gray',
		fontSize: '13px',
		fontWeight: '$font-regular'
	}),
	container: () => ({
		width: '100%',
		maxWidth: '220px',
		position: 'relative',
		fontSize: '13px'
	}),
	placeholder: (base: CSSProperties) => ({
		...base,
		color: 'white',
		fontSize: '14px',
		fontWeight: '$font-medium'
	})
};
const STATUS_REACT_SELECT_STYLE = {
	control: (base: CSSProperties) => ({
		...base,
		maxWidth: '230px',
		border: '1px solid #3ea4a6',
		':hover': {
			border: '1px solid #3ea4a6'
		},
		boxShadow: '0 0 0 0	#3ea4a6'
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		paddingTop: '0px',
		paddingBottom: '0px',
		maxWidth: '230px'
	}),
	menu: (base: CSSProperties) => ({
		...base,
		maxWidth: '230px'
	})
};
export {
	FIRST_LEVEL_BREADCRUMBS,
	NUMBER_REGEX,
	PASSWORD_VALIDATOR_REGEX,
	EMAIL_VALIDATOR_REGEX,
	DATE_AND_TIME_REGEX,
	HASHTAG,
	REACT_SELECT_STYLE,
	STATUS_REACT_SELECT_STYLE
};
