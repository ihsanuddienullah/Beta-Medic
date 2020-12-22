import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn } from 'mdbreact';
import axios from 'axios';
import './style.css';
/* eslint-disable */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
const Register = () => {
  const [nama, setNama] = useState('');
  const [tanggal_lahir, setTanggalLahir] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');
  const [password, setPassword] = useState('');
  const _register = () => {
    axios
      .post('https://try-smart-hospital-be.herokuapp.com/register', {
        nama,
        tanggal_lahir,
        email,
        alamat,
        password,
      })
      .then((res) => {
        const link = '/Login';
        window.location.assign(link);
        console.log(res.data);
      });
  };

  return (
    <div className="page-register">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  _register();
                }}
              >
                <p className="h4 text-center mb-4">Register</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value);
                  }}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="defaultFormRegisterPasswordEx"
                  className="form-control"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="grey-text"
                >
                  Tanggal Lahir
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                  value={tanggal_lahir}
                  onChange={(e) => {
                    setTanggalLahir(e.target.value);
                  }}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Alamat
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                  value={alamat}
                  onChange={(e) => {
                    setAlamat(e.target.value);
                  }}
                />
                <div className="text-center mt-4" onClick={_register}>
                  <MDBBtn color="blue" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Register;
