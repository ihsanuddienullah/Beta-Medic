import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard } from 'mdbreact';
import { Link } from 'react-router-dom';
import './style.css';

const FormsPage = () => {
  const [yes, setYes] = useState(0);
  const [answerR, setAnswerR] = useState(0);

  const answerYes = () => {
    setYes(yes + 1);
    setAnswerR(answerR + 1);
  };

  const answerNo = () => {
    setAnswerR(answerR + 1);
  };

  let cekanswer = true;
  let linkTo = '/Cek Covid';
  if (answerR >= 6) {
    cekanswer = false;
    if (yes < 3) {
      linkTo = '/SkrinningSolutionSave';
    } else {
      linkTo = '/SkrinningSolution';
    }
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <form className="was-validated" noValidate>
              <label htmlFor="pertanyaan1">
                Pernah kontak dengan pasien positif Covid-19 atau pernah
                berkunjung kenegara/daerah endemis Covid-19 dalam 14 hari
                terakhir ?
              </label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation2"
                  name="radio-stacked"
                  required
                  onChange={answerYes}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation2"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation3"
                  name="radio-stacked"
                  required
                  onChange={answerNo}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation3"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan2">Apakah anda flu ?</label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation4"
                  name="radio-stacked2"
                  required
                  onChange={answerYes}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation4"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation5"
                  name="radio-stacked2"
                  required
                  onChange={answerNo}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation5"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan3">Apakah anda batuk kering ?</label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation6"
                  name="radio-stacked3"
                  required
                  onChange={answerYes}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation6"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation7"
                  name="radio-stacked3"
                  required
                  onChange={answerNo}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation7"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan4">
                Apakah anda demam lebih dari 38°C ?
              </label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation8"
                  name="radio-stacked4"
                  required
                  onChange={answerYes}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation8"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation9"
                  name="radio-stacked4"
                  required
                  onChange={answerNo}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation9"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan5">Apakah anda sesak nafas ?</label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation10"
                  name="radio-stacked5"
                  required
                  onChange={answerYes}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation10"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation11"
                  name="radio-stacked5"
                  required
                  onChange={answerNo}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation11"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan6">
                Apakah anda mengalami sakit tenggorokan ?
              </label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation12"
                  name="radio-stacked6"
                  required
                  onChange={answerYes}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation12"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation13"
                  name="radio-stacked6"
                  required
                  onChange={answerNo}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation13"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <p style={{ color: 'red' }}>Semua pertanyaan wajib diisi!</p>
              <div className="text-left mt-4">
                <Link to={linkTo}>
                  <MDBBtn color="primary" type="submit" disabled={cekanswer}>
                    submit
                  </MDBBtn>
                </Link>
              </div>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormsPage;
