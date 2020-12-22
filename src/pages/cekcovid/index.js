import React, { useEffect, useState } from 'react';
import { FormCovid } from '../../components';
import './style.css';

const CekCovid = () => {
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    setLoginLoading(true);
  }, []);
  return (
    <div className="pages-cekcovid">
      <h1>
        {isLoginLoading}
        Skrinning Mandiri Covid-19
      </h1>
      <FormCovid />
    </div>
  );
};

export default CekCovid;
