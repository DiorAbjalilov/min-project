import React, { useState } from "react";
import LoginPage from "./LoginPage";
import ResCode from "./ResCode";
const LoginAndRes = () => {
  const [displayNone, setDisplayNone] = useState(false);
  const ClickHandleSubmit = () => {
    setDisplayNone((p) => !p);
  };
  return (
    <>
      <LoginPage
        displayNone={displayNone}
        ClickHandleSubmit={ClickHandleSubmit}
      />
      <ResCode displayNone={displayNone} />
    </>
  );
};

export default LoginAndRes;
