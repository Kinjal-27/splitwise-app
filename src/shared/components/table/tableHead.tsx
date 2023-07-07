import React, { useState } from 'react';

import { IObj, ITableCell } from 'shared/interface';

import PbHead from './PbHead';
import PbRow from './PbRow';
import AdvancedPbHead from './AdvancedPbHead';

interface ITableHeadProps {
	tableCellList: ITableCell[];
	setOrderColumn?: (order: IObj) => void;
}

const TableHead: React.FC<ITableHeadProps> = ({ tableCellList }) => {
	return (
		<PbHead>
			<PbRow>
				{tableCellList.map(({ title, key, sortable, style }, index) => {
					return (
						<AdvancedPbHead
							key={index}
							order={key}
							style={style}
							column={{ sort: sortable, name: key }}
							className='table-title'
							title={title}
						/>
					);
				})}
			</PbRow>
		</PbHead>
	);
};

export default TableHead;
