import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupForm from "../containers/SignupForm";

const Signup = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

Signup.getInitialProps = async (context) => {
  console.log("sign" + Object.keys(context));
}

export default Signup;
