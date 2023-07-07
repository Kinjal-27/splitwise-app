import React, { useMemo } from 'react';
import DataTable from 'react-data-table-component';
import dummyData from './dummyData';

/**
 * Dashboard - Render statistics
 */
const Datatable: React.FC = () => {
	const columns = useMemo(
		() => [
			{
				cell: () => <button>Action</button>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true
			},
			{
				name: 'Title',
				selector: (row: any) => row.title,
				sortable: true,
				grow: 2
			},
			{
				name: 'Directior',
				selector: (row: any) => row.director,
				sortable: true
			},
			{
				name: 'Runtime (m)',
				selector: (row: any) => row.runtime,
				sortable: true,
				right: true
			}
		],
		[]
	);

	return <DataTable title='Movies' data={dummyData} columns={columns} pagination selectableRows />;
};

export default Datatable;
