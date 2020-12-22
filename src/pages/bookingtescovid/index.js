/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { Rsrujukan } from '../../components';
import './style.css';

const BookingTesCovid = () => {
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    setLoginLoading(true);
  }, []);
  return (
    <div className="page-bookingtescovid">
      <h2>
        {isLoginLoading}
        Mencegah Lebih Baik Dari Mengobati
      </h2>
      <Rsrujukan />
    </div>
  );
};

export default BookingTesCovid;
