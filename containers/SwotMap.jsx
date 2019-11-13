import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageMapper from "react-image-mapper";
import { Modal, Typography } from "antd";
import LectureRoomList from "../components/LectureRoomList";
import { useDispatch } from "react-redux";
import { LectureroomWrapper } from "../containers/css/SwotMap";
import { BUILDING_SELECT } from "../reducers/room";

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
      name: "7",
      shape: "poly",
      coords: [25,180,27,270,115,240,115,180,90,150],
    },
    {
      name: "9",
      shape: "poly",
      coords: [95, 145, 140, 190, 205, 170, 160, 130],
    },
    {
      name: "5",
      shape: "poly",
      coords: [210, 220, 190, 300, 200, 330, 310, 280, 240, 210],
    },
    {
      name: "2",
      shape: "poly",
      coords: [187, 135, 187, 180, 265, 155, 260, 130],
    },
    {
      name: "1",
      shape: "poly",
      coords: [215, 175, 215, 205, 230, 220, 290, 200, 290, 167, 275, 155],
    },
    {
      name: "3",
      shape: "poly",
      coords: [277, 133, 277, 150, 317, 195, 328, 195, 328, 158, 290, 130],
    },
    {
      name: "12",
      shape: "poly",
      coords: [215, 70, 215, 110, 245, 130, 274, 120, 274, 90, 240, 65],
    },
    {
      name: "6",
      shape: "poly",
      coords: [278, 75, 278, 120, 315, 145, 330, 145, 330, 110 ],
    }
  ]
};

var buildingNo;

const SWOTMap = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [Lectureroom, setLectureroom] = useState("");

  const [url, setUrl] = useState("static/images/buildings/0.png");

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
    console.log("afsjafshjafshasf")
  };

  const imageClick = (area, event) => {
    setVisible(true);
  };
  const moveOnArea = (area, evt) => {
    switch(area.name){
      case "1":{
        setUrl("static/images/buildings/1.jpg");
        setLectureroom("승연관");
        dispatch({
          type: BUILDING_SELECT,
          data: area.name
        });        
        break;
      }
      case "2":{
        setUrl("static/images/buildings/2.jpg")
        setLectureroom("일만관");
        dispatch({
          type: BUILDING_SELECT,
          data: area.name
        }); 
        break;
      }
      case "3":{
        setUrl("static/images/buildings/3.jpg")
        setLectureroom("월당관");
        dispatch({
          type: BUILDING_SELECT,
          data: area.name
        }); 
        break;
      }
      case "5":{
        setUrl("static/images/buildings/5.jpg")
        setLectureroom("나눔");
        dispatch({
          type: BUILDING_SELECT,
          data: area.name
        }); 
        break;
      }
      case "6":{
        setUrl("static/images/buildings/6.jpg")
        setLectureroom("정보과학관");
        dispatch({
          type: BUILDING_SELECT,
          data: area.name
        }); 
        break;
      }
      case "7":{
        setUrl("static/images/buildings/7.jpg")
        setLectureroom("새천년관");
        dispatch({
          type: BUILDING_SELECT,
          data: area.name
        }); 
        break;
      }
      case "9":{
        setUrl("static/images/buildings/9.jpg")
        setLectureroom("성미가엘성당");
        dispatch({
          type: BUILDING_SELECT,
          data: area.name
        }); 
        break;
      }
      case "12":{
        setUrl("static/images/buildings/12.jpg")
        setLectureroom("미가엘관");
        dispatch({
          type: BUILDING_SELECT,
          data: area.name
        }); 
        break;
      }

    }
	}

  const mapView = (
    <ImageMapper
      src={url}
      width={600}
      height={400}
      imgWidth={500}
      map={lectureRoom}
      onClick={imageClick}
      onMouseEnter={(area, _, evt) => moveOnArea(area, evt)}
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
          <LectureroomWrapper>
            <Text style={{ fontSize: "17px" }} type="secondary">
              {Lectureroom}
            </Text>
          </LectureroomWrapper>
          <LectureRoomList handleOk={handleOk}/>
        </Modal>
      </div>
    </>
  );
};
export default SWOTMap;
