import React from "react";
import {
  MasternameEditForm,
  LectureRoomApplication,
  BuildingList
} from "../components";

const master = () => {
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
