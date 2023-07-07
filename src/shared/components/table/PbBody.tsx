import React, { PropsWithChildren } from 'react';

const PbBody: React.FC<{ 'data-testid'?: string } & PropsWithChildren> = (props) => {
	return <tbody data-testid={`${props['data-testid'] || 'list-rows'}`}>{props.children}</tbody>;
};

export default PbBody;
