import React, { useState, useEffect } from "react";
import { Table,Button,Modal,Typography } from "antd";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ROOM_SELECT_REQUEST } from "../reducers/room";
import { SwotMap } from "../containers";


const { Text } = Typography;


var lists;
const LectureRoomList = ({handleOk}) => {

  const columns1 = [
    { title: "강의실코드", dataIndex: "roomNo", key: "roomNo" },
    { title: "강의실명", dataIndex: "roomName", key: "groupName" },
    { title: "수용인원", dataIndex: "total", key: "total" },
    {
      title: '이미지',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
          <span>
              <Button type="primary" onClick={showImageModal}>이미지 보기</Button>
          </span>
      )
  },
  ];
  
  const columns2 = [
    {
      title: "강의실코드", dataIndex: "roomNo", key: "roomNo",
      render: text => (
        <Link href="/reservationForm">
          <a>{text}</a>
        </Link>
      )
    },
    { title: "강의실명", dataIndex: "roomName", key: "groupName" },
    { title: "수용인원", dataIndex: "total", key: "total" },
    {
      title: '이미지',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
          <span>
              <Button type="primary" onClick={showImageModal}>이미지 보기</Button>
          </span>
      )
  },
  ];


  const dispatch = useDispatch();

  const { totalRoomList } = useSelector(state => state.master);
  const { buildingNo, isStudyReservation } = useSelector(state => state.room);
  const [buildingList, setBuildingList] = useState([]);
  const [visible,setVisible] = useState(false);
  const [roomurl,setRoomurl] = useState("");
  const [roomname,setRoomname] = useState("");


  useEffect(() => {
    lists = [];
    totalRoomList.map((room) => {
      if (String(room.groupNo) === buildingNo) {
        lists.push(room);
      }
    })
    setBuildingList(lists);
  }, [buildingNo])

  const onRowClick = (record) => {
    return {
      onClick: () => {
        console.log(record.roomNo);
        setRoomname(record.roomName);
        switch(record.roomNo){
          case "1101":{
            setRoomurl("static/images/classrooms/1101.jpg");
            break;
          };
          case "1102":{
            setRoomurl("static/images/classrooms/1102.png");
            break;
          }
          case "1112":{
            setRoomurl("static/images/classrooms/1103.jpg");
            break;
          }
          default:{
            setRoomurl("");
            break;
          }
        }
        dispatch({
          type: ROOM_SELECT_REQUEST,
          data: {
            id : record.id,
            name : record.roomName,
          }
        });
        handleOk();
      }
    };
  };

  const showImageModal =() =>{
    setVisible(true);
    console.log(lists);
  }

  const handleCancel =() =>{
    setVisible(false);
  }

  return (
    <>
      <Table columns={isStudyReservation ? columns2 : columns1} dataSource={buildingList} onRow={onRowClick} />
      <Modal
          title="Imageroom"
          visible={visible}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              닫기
            </Button>,
          ]}
        
        >
        <div style={{textAlign:"center" , display:"flex", flexDirection:"column"}}>
        <img src={roomurl}/>
        <Text strong type="warning" style={{marginTop:"30px",fontSize:"20px"}}>강의실 : {roomname}</Text>
        </div>
          
        </Modal>
    </>
  );
};

export default LectureRoomList;
