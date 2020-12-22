import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdbreact';
import axios from 'axios';
// import './style.css';

const CoronaNews = () => {
  const [news, setNews] = useState([]);

  const getNewsData = () => {
    const url = 'https://try-smart-hospital-be.herokuapp.com/news';
    axios.get(url).then((response) => {
      setNews(response.data.news_json.articles);
    });
  };

  useEffect(() => {
    getNewsData();
  });

  return (
    <MDBContainer className="page-corona">
      <h1 style={{ textAlign: 'center' }}>Artikel</h1>
      <MDBRow className="mb-4">
        {news.map((newsData) => {
          return (
            <MDBCol sm="6" className="mb-4" key={newsData.url}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>{newsData.title}</MDBCardTitle>
                  <MDBCardText>{newsData.description}</MDBCardText>
                  <a href={newsData.url}>
                    <MDBBtn color="primary">Baca selengkapnya</MDBBtn>
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
};

export default CoronaNews;
