import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import './style.css';

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Beta Medic</h5>
            <p>Solusi Kesehatan Anda!</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Ikuti Kami Di</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Linked In</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>&copy; 2020 Copyright: Beta Medic DTI</MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
