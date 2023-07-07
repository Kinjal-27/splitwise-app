import React from 'react';
import './emptyDataContainer.scss';

interface IEmptyDataContainerProps {
	text?: string;
}

const EmptyDataContainer: React.FC<IEmptyDataContainerProps> = (props) => {
	return <div className='empty-data-wrapper'>{props.text || 'noDataFoundText'}</div>;
};

export default EmptyDataContainer;
