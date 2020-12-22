/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';

export default function Riwayattes() {
  // eslint-disable-next-line no-unused-vars
  const [riwayat, setRiwayat] = useState([]);
  const getRiwayat = () => {
    const url = 'https://try-smart-hospital-be.herokuapp.com/rapidtest';
    axios.get(url).then((response) => {
      setRiwayat(response.data);
    });
  };

  useEffect(() => {
    getRiwayat();
  });

  const riwayatReal = [];
  riwayat.forEach((history) => {
    return riwayatReal.push({
      bookingDate: history.bookingDate,
      // eslint-disable-next-line no-underscore-dangle
      _id: history._id,
      name: history.name,
      nik: history.nik,
      email: history.email,
    });
  });
  // eslint-disable-next-line no-unused-vars
  const data = {
    columns: [
      {
        label: 'Tanggal',
        field: 'bookingDate',
        width: 50,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'bookingDate',
        },
      },
      {
        label: 'Nama',
        field: 'name',
        width: 100,
      },
      {
        label: 'NIK',
        field: 'nik',
        width: 50,
      },
      {
        label: 'Email',
        field: 'email',
        width: 100,
      },
    ],
    rows: riwayatReal,
  };
  return <MDBDataTableV5 hover data={data} searchTop searchBottom={false} />;
}
