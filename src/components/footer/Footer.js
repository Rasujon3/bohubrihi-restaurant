import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>Fatafati Restaurant &#169; Copyright {new Date().getFullYear()} </p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;