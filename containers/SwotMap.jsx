import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageMapper from "react-image-mapper";
// import LectureRoomModal from "../components/LectureRoomModal";
import Link from "next/link";

const useStyles = makeStyles({
  root: {},
  ["@media (max-width:1520px)"]: {
    map: {
      display: "none"
    }
  }
});

const lectureRoom = {
  name: "Swot-map",
  areas: [
    {
      name: "1",
      shape: "circle",
      coords: [445, 285, 18],
      preFillColor: "red",
      fillColor: "blue"
    },
    {
      name: "2",
      shape: "circle",
      coords: [400, 220, 18],
      preFillColor: "orange",
      fillColor: "blue"
    },
    {
      name: "3",
      shape: "circle",
      coords: [520, 245, 18],
      preFillColor: "yellow",
      fillColor: "blue"
    },
    {
      name: "5",
      shape: "circle",
      coords: [420, 495, 18],
      preFillColor: "green",
      fillColor: "blue"
    },
    {
      name: "6",
      shape: "circle",
      coords: [440, 130, 18],
      preFillColor: "blue",
      fillColor: "purple"
    }
  ]
};

const SWOTMap = () => {
  const classes = useStyles();

  const imageClick = (area, event) => {
    console.log(event);
    console.log(area);
    console.log(area.name);
  };

  const mapView = (
    <ImageMapper
      src="static/images/SWOTMAP.png"
      width={600}
      height={400}
      imgWidth={500}
      map={lectureRoom}
      onClick={imageClick}
    />
  );

  return (
    <>
      <div>
        {/* {modalstatus === true ? <LectureRoomModal /> : ""} */}
        {mapView}
      </div>
    </>
  );
};

export default SWOTMap;
