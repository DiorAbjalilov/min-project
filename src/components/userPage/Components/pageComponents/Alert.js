import React from "react";

const Alert = () => {
  return (
    <>
      <div
        className="alert alert-success d-flex align-items-center"
        role="alert"
      >
        <span
          className="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Success:"
        >
          <i className="bx bx-check-double"></i>
        </span>
        <div>The data was sent successfully</div>
      </div>
    </>
  );
};

export default Alert;
