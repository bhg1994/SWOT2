import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageMapper from "react-image-mapper";

const useStyles = makeStyles({
  root: {}
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
      coords: [515, 160, 18],
      preFillColor: "blue",
      fillColor: "purple"
    }
  ]
};

export default function SWOTMap() {
  const classes = useStyles();

  const imageClick = (area, event) => {
    console.log(event);
    console.log(area);
    console.log(area.name);
  };

  const mapView = (
    <ImageMapper
      src="static/images/SWOTMAP.png"
      width={550}
      height={700}
      map={lectureRoom}
      onClick={imageClick}
    />
  );

  return (
    <>
      <div>
        <div>{mapView}</div>
      </div>
    </>
  );
}
