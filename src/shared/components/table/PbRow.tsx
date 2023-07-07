import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	'data-testid'?: string;
}

const PbRow: React.FC<IProps> = (props) => {
	return <tr {...props}>{props.children}</tr>;
};

export default PbRow;
