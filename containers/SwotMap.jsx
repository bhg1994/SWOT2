import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageMapper from "react-image-mapper";
import { Modal, Typography } from "antd";
import LectureRoomList from "../components/LectureRoomList";

const { Text } = Typography;

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
      coords: [310, 110, 15],
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
  const [visible, setVisible] = useState(false);
  const [Lectureroom, setLectureroom] = useState("미가엘관");

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const imageClick = (area, event) => {
    console.log(event);
    console.log(area);
    console.log(area.name);
    setVisible(true);
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
        {mapView}
        <Modal
          title="강의실 정보"
          // centered
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ marginBottom: "30px", textAlign: "center" }}>
            <Text style={{ fontSize: "17px" }} type="secondary">
              {Lectureroom}
            </Text>
          </div>
          <LectureRoomList />
        </Modal>
      </div>
    </>
  );
};
export default SWOTMap;
