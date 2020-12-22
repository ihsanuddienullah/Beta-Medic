/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard } from 'mdbreact';

const Solusicovid = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <form>
              <p className="text-lead">
                Anda kemungkinan terkena virus corona!
              </p>
              <br />
              <p>
                Lakukan social distance, gunakan masker, cuci tangan dengan
                teratur, dan lakukan isolasi diri di rumah.
              </p>
              <br />
              <p>
                Jika terjadi perubahan dalam kurun waktu 14 hari, muncul gejala
                demam diatas 38°C, batuk, pilek dan sesak tidak mereda maka
                periksakan diri ke puskesmas atau dokter terdekat.
              </p>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Solusicovid;
