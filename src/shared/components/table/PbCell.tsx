import React from 'react';
import Option from 'shared/components/form/option';

interface IProps
	extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>,
		React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> {
	header?: boolean;
	onClick?: React.MouseEventHandler<any>;
	input?: boolean;
	dropDownOptions?: {
		name: string;
		value: string;
	}[];
	type?: string;
	inputValue?: string;
	placeholder?: string;
	inputLabel?: string;
	errorMessage?: string;
	disabled?: boolean;
	onInputChange?: (text: string) => void;
	onKeyDownInput?: (keyCode: number) => void;
	onCellClick?: () => void;
}

const PbCell: React.FC<IProps> = (props) => {
	const {
		header,
		colSpan,
		rowSpan,
		className,
		style,
		children,
		input,
		inputLabel,
		dropDownOptions,
		placeholder,
		inputValue,
		disabled,
		errorMessage,
		onInputChange,
		onClick,
		onCellClick
	} = props;

	let html: JSX.Element;
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		onInputChange && onInputChange(e.target.value);
	};
	const onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>) => {
		props.onKeyDownInput && props.onKeyDownInput(e.keyCode);
	};
	if (header) {
		html = (
			<th
				className={`ignore-text-capitalize cursor-pointer ${className || ''}`}
				onClick={onClick}
				colSpan={colSpan}
				rowSpan={rowSpan}
				style={style}
			>
				{children}
			</th>
		);
	} else if (input) {
		html = (
			<td className={className} rowSpan={rowSpan} colSpan={colSpan} style={style}>
				{inputLabel ? <label className='mb--3'>{inputLabel}</label> : ''}
				{dropDownOptions ? (
					<select
						placeholder={placeholder || ''}
						className='form-control'
						value={inputValue}
						onChange={onChangeInput}
						disabled={disabled}
					>
						{dropDownOptions.map((option) => (
							<Option key={option.name} {...option} />
						))}
					</select>
				) : (
					<input
						type={(props || {}).type || 'text'}
						value={inputValue || ''}
						onChange={onChangeInput}
						onKeyDown={onKeyDownInput}
						className='form-control'
						placeholder={placeholder || ''}
					/>
				)}
				{errorMessage && <span className='text-red'>{errorMessage}</span>}
			</td>
		);
	} else {
		html = (
			<td
				className={[className, 'cell'].join(' ')}
				colSpan={colSpan}
				rowSpan={rowSpan}
				style={style}
				onClick={onCellClick}
			>
				{children}
			</td>
		);
	}

	return html;
};
export default PbCell;
