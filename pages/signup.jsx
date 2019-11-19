import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupForm from "../containers/SignupForm";
import Responsive from "../components/common/Responsive";

const Signup = () => {
  return (
    <>
      <Responsive>
        <SignupForm />
      </Responsive>
    </>
  );
};

Signup.getInitialProps = async context => {
  console.log("sign" + Object.keys(context));
};

export default Signup;
