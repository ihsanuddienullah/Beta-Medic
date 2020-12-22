import React from 'react';
import { Link } from 'react-router-dom';
import { MDBJumbotron, MDBBtn, MDBCol, MDBCardTitle, MDBIcon } from 'mdbreact';
import { CoronaNews } from '../../components';
import './style.css';

const JumbotronPage = () => {
  return (
    <>
      <MDBJumbotron style={{ padding: 0 }} className="page-home">
        <MDBCol className="text-black text-left py-5 px-4">
          <MDBCol className="py-5">
            <MDBCardTitle className="h1-responsive pt-3 ml-5 font-bold">
              Beta Medic
            </MDBCardTitle>
            <p className="mx-5 mb-5">We Are Here For Your Care</p>
            <Link to="/register">
              <MDBBtn color="primary" className="mb-5 ml-5">
                <MDBIcon icon="user" className="mr-2" />
                Pendaftaran Akun
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBCol>
      </MDBJumbotron>
      <CoronaNews />
    </>
  );
};

export default JumbotronPage;
