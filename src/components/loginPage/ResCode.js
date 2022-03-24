import React from "react";
import "./sendcode.css";
const ResCode = ({ displayNone }) => {
  return (
    <>
      <div
        className="bodyCode"
        style={{ display: displayNone ? "block" : "none" }}
      >
        <div className="containerCode">
          <div className="top-header">
            <div className="time-reset">
              <h1>
                {/* {timeHourVaule > 0 && timeSecound > 0
                  ? "00:00"
                  : `0${timeHourVaule}:${
                      timeVaule.toString().length > 1
                        ? timeVaule
                        : `0${timeVaule}`
                    }`} */}
              </h1>
              <i className="bx bx-revision"></i>
            </div>
            <p>Enter the confirmation code sent to the email</p>
          </div>
          <form>
            <div className="user">
              <input type="number" placeholder="Enter number" />
            </div>
            <div className="btn">
              <button type="submit">Confirmation</button>
            </div>
          </form>
        </div>
        {/* <p className="last">
          паролни унутдим? <a href="#">Паролни кайта тиклаш</a>
        </p> */}
      </div>
    </>
  );
};

export default ResCode;
