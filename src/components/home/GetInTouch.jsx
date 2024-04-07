import React from "react";

const GetInTouch = ({ heading, message, email ,phone }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center" id="contact">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <br/>Email : <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>
        <br/>
        Phone : +66 930355882
      </p>
    </>
  );
};

export default GetInTouch;
