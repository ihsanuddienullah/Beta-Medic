import React from 'react';
import { Riwayattes } from '../../components';
// import { riwayatService } from '../../services';
import './style.css';

const RiwayatBook = () => {
  return (
    <div className="page-history">
      <h2>Riwayat Pemesanan Rapid Test</h2>
      <Riwayattes />
    </div>
  );
};

export default RiwayatBook;
