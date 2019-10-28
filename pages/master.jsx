import React, { useState, useEffect } from "react";
import {
  MasternameEditForm,
  LectureRoomApplication,
  BuildingList
} from "../components";
import { ROOMLIST_REQUEST } from "../reducers/room";
import { useDispatch, useSelector } from "react-redux";

const master = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch({
      type: ROOMLIST_REQUEST,
      data: {
        token: token,
      }
    });
  }, [])

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

export default master;
