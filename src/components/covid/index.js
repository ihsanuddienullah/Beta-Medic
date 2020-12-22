import React from 'react';
import { MDBDataTableV5, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

export default function Covid() {
  // eslint-disable-next-line no-unused-vars
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Pertanyaan',
        field: 'name',
        width: 100,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Cek',
        field: 'action',
      },
    ],
    rows: [
      {
        name: 'Jawab Pertanyaan',
        action: (
          <Link to="/JawabCovid">
            <MDBBtn color="default" rounded size="sm">
              Button
            </MDBBtn>
          </Link>
        ),
      },
    ],
  });

  return (
    <MDBDataTableV5 hover data={datatable} searchTop searchBottom={false} />
  );
}
