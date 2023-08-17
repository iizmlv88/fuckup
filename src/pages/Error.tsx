import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Error.css';

function Error() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="error">404</div>
      <br />
      <br />
      <span className="info">Шось пішло не так</span>
      <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" className="static" />
      <Button variant="contained" onClick={handleLoginClick}>
        Повернутись
      </Button>
    </>
  );
}

export default Error;
