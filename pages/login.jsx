import React from "react";

import LoginForm from "../containers/LoginForm";
import Responsive from "../components/common/Responsive";

const login = () => {
  return (
    <>
      <Responsive>
        <LoginForm />
      </Responsive>
    </>
  );
};

export default login;
