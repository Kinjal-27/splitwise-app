import React from 'react';
import PbCell from './PbCell';
import { IObj } from 'shared/interface';

interface IColumn {
	sort?: boolean;
	name: string | undefined;
}

interface IProps
	extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {
	column: IColumn;
	orderBy?: string | null;
	order?: string | null;
	style: IObj;
	title?: string;
	onSort?: (column: string) => void;
}

class AdvancedPbHead extends React.Component<IProps> {
	render() {
		return (
			<PbCell
				style={this.props.style}
				className={[this.props.className, this.getCellClasses(this.props.column)].join(' ')}
				header={true}
			>
				<div className='flex-space--between'>{this.props.title}</div>
			</PbCell>
		);
	}

	onClickCell = (column: IColumn) => {
		if (!column.sort) {
			return;
		}
		column.name && this.props.onSort && this.props.onSort(column.name);
	};

	getCellClasses = (column: IColumn): string => {
		if (!column.sort) {
			return '';
		}
		if (column.sort && this.props.orderBy === column.name) {
			return this.props.order === 'asc' ? 'sorting_asc' : 'sorting_desc';
		} else {
			return 'sorting';
		}
	};
}

export default AdvancedPbHead;
