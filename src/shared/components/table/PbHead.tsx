import React, { PropsWithChildren } from 'react';

const PbHead: React.FC<{ dataTestId?: string } & PropsWithChildren> = (props) => {
	return <thead data-testid={`${props.dataTestId || 'list-column-header'}`}>{props.children}</thead>;
};

export default PbHead;
