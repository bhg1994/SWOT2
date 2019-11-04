import React, { useState, useEffect } from "react";
import {
  MasternameEditForm,
  LectureRoomApplication,
  BuildingList
} from "../components";
import { ROOMLIST_REQUEST } from "../reducers/room";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_RESERVATIONS_REQUEST } from "../reducers/master";

const master = () => {


  
  // const { reservationsList } = useSelector(state => state.master);
  // useEffect(() => {
  //   console.log("master1" + reservationsList);
  // }, [reservationsList]);
  // console.log("master2" + reservationsList);

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
    type: ROOMLIST_REQUEST
  });
  context.store.dispatch({
    type: LOAD_RESERVATIONS_REQUEST
  });
};

export default master;
