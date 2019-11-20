import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Typography } from "antd";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ROOM_SELECT_REQUEST } from "../reducers/room";

const { Text } = Typography;

let lists;

const LectureRoomList = ({ handleOk, Lectureroom }) => {
  console.log(Lectureroom);
  const columns1 = [
    { title: "강의실코드", dataIndex: "roomNo", key: "roomNo" },
    { title: "강의실명", dataIndex: "roomName", key: "groupName" },
    { title: "수용인원", dataIndex: "total", key: "total" },
    {
      title: "강의실 내부 보기",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={showImageModal}>
            이미지 보기
          </Button>
        </span>
      )
    }
  ];

  const columns2 = [
    {
      title: "강의실코드",
      dataIndex: "roomNo",
      key: "roomNo",
      render: text => (
        <Link href="/reservationForm">
          <a>{text}</a>
        </Link>
      )
    },
    { title: "강의실명", dataIndex: "roomName", key: "groupName" },
    { title: "수용인원", dataIndex: "total", key: "total" },
    {
      title: "강의실 내부 보기",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={showImageModal}>
            이미지 보기
          </Button>
        </span>
      )
    }
  ];

  const dispatch = useDispatch();

  const { totalRoomList } = useSelector(state => state.master);
  const { buildingNo, isStudyReservation } = useSelector(state => state.room);
  const [buildingList, setBuildingList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [roomurl, setRoomurl] = useState("static/images/classrooms/1101.jpg");
  const [roomname, setRoomname] = useState("");
  const [roomtotal, setRoomTotal] = useState(0);

  useEffect(() => {
    lists = [];
    totalRoomList.map(room => {
      if (String(room.groupNo) === buildingNo) {
        lists.push(room);
      }
    });
    setBuildingList(lists);
  }, [buildingNo]);

  const onRowClick = record => {
    return {
      onClick: () => {
        console.log(record);
        setRoomname(record.roomName);
        let url = "static/images/classrooms/" + record.roomNo + ".jpg";
        setRoomurl(url);
        setRoomTotal(record.total);

        dispatch({
          type: ROOM_SELECT_REQUEST,
          data: {
            id: record.id,
            name: record.roomName,
            code: record.roomNo
          }
        });
        handleOk();
      }
    };
  };

  const showImageModal = () => {
    setVisible(true);
    console.log(lists);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Table
        columns={isStudyReservation ? columns1 : columns2}
        dataSource={buildingList}
        onRow={onRowClick}
      />
      <Modal
        title={Lectureroom}
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            닫기
          </Button>
        ]}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <img src={roomurl} />
          <Text
            strong
            type="warning"
            style={{ marginTop: "30px", fontSize: "20px" }}
          >
            강의실 : {roomname}
          </Text>
          <Text
            strong
            type="secondary"
            style={{ marginTop: "15px", fontSize: "20px" }}
          >
            최대 수용 인원수 : {roomtotal}
          </Text>
        </div>
      </Modal>
    </>
  );
};

export default LectureRoomList;
