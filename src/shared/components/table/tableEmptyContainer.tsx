import React from 'react';
import PbRow from './PbRow';
import PbCell from './PbCell';
import EmptyDataContainer from '../emptyDataContainer/emptyDataContainer';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	colSpan: number;
	text?: string;
}

const TableEmptyContainer: React.FC<IProps> = (props) => (
	<PbRow>
		<PbCell colSpan={props.colSpan}>
			<EmptyDataContainer text={props.text} />
		</PbCell>
	</PbRow>
);

export default TableEmptyContainer;
