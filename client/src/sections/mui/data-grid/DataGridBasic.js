import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

DataGridBasic.propTypes = {
  data: PropTypes.array,
  columns:PropTypes.array,
};

export default function DataGridBasic({ data , columns }) {
  return (
    <DataGrid
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
