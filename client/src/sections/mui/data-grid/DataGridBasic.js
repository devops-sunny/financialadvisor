import { IconButton } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Iconify from '../../../components/iconify';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 120,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 160,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 160,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,
    editable: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    flex: 1,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: ' ',
    width: 80,
    align: 'right',
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => (
      <IconButton>
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
    ),
  },
];

DataGridBasic.propTypes = {
  data: PropTypes.array,
};

export default function DataGridBasic({ data }) {

  return (
    <DataGrid
      checkboxSelection
      disableSelectionOnClick
      rows={data}
      columns={columns}
      pagination
      components={{
        Toolbar: GridToolbar,
      }}
      slots={{ toolbar: GridToolbar }} 
    />
  );
}
