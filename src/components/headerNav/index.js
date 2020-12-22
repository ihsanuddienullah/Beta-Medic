/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { MDBBtn } from 'mdbreact';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';

const Header = () => {
  // const userId = getCookie('userData') ?? JSON.parse(getCookie('userData'));
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const listMenu = [
    'Beranda',
    'Cek Covid',
    'Tanya Dokter',
    'Booking Tes Covid',
    'Rumah Sakit',
    'Login',
  ];
  const link = '/Beranda';

  function handleLogOut() {
    window.location.assign(link);
    removeCookie('token');
    // Cookies.remove('token');
  }
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {isUserAuthenticated() ? (
        // <button type="button" onClick={handleLogOut}>
        //   logout
        // </button>
        <MDBBtn
          type="button"
          color="danger"
          onClick={handleLogOut}
          style={{ float: 'right', marginTop: '12px' }}
        >
          Logout
        </MDBBtn>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Header;
