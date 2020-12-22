/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard } from 'mdbreact';

const SolusicovidSave = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <form>
              <p className="text-lead" style={{ color: 'green' }}>
                Jangan Khawatir, Anda aman dari virus corona!
              </p>
              <br />
              <p>
                Jaga kesehatan selalu. Jangan lupa rajin cuci tangan dengan
                sabun, makan-makanan yang sehat dan teratur, serta menggunakan
                masker bila kamu sedang merasa tidak enak badan.
              </p>
              <br />
              <p>
                Jangan lupa juga untuk jaga jarak aman lebih dari 1 meter. Ayo
                kita cegah penyebaran Covid-19 lebih luas.
              </p>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SolusicovidSave;
