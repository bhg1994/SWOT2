import React, { useState, useEffect } from "react";
import {
  MasternameEditForm,
  LectureRoomApplication,
  BuildingList
} from "../components";
import { LOAD_ROOMLIST_REQUEST } from "../reducers/master";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_RESERVATIONS_REQUEST } from "../reducers/master";

const master = () => {

  const { isLoggingIn } = useSelector(state => state.user);

  return (
    <>
      <div>
        <MasternameEditForm />
        <LectureRoomApplication />
        <BuildingList />
      </div>
    </>
  );
};

master.getInitialProps = async (context) => {
  context.store.dispatch({
    type: LOAD_ROOMLIST_REQUEST
  });
  context.store.dispatch({
    type: LOAD_RESERVATIONS_REQUEST
  });
};

export default master;
