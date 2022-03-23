import React, { useState } from "react";
import "./sendcode.css";
const ResCode = () => {
  // const [timeVaule, setTimeValue] = useState(59);
  // const [timeHourVaule, setTimeHourValue] = useState(1);
  // function sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }
  // async function delayedGreeting() {
  //   console.log("Hello");
  //   await sleep(2000);
  //   console.log("World!");
  //   await sleep(2000);
  //   console.log("Goodbye!");
  // }

  // delayedGreeting();
  // const timeSecound = () => {
  //   setTimeout(() => {
  //     if (timeVaule > 0) {
  //       setTimeValue((p) => p - 1);
  //     } else {
  //       setTimeValue(59);
  //       setTimeHourValue(0);
  //     }
  //   }, 1000);
  // };
  // timeSecound();
  // clearTimeout(timeSecound);
  return (
    <>
      <div className="bodyCode">
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
              <i class="bx bx-revision"></i>
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
