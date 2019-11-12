import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ROOM_SELECT_REQUEST } from "../reducers/room";

const columns = [
  {
    title: "강의실코드", dataIndex: "roomNo", key: "roomNo",
    render: text => (
      <Link href="/reservationForm">
        <a>{text}</a>
      </Link>
    )
  },
  { title: "강의실명", dataIndex: "roomName", key: "groupName" },
  { title: "수용인원", dataIndex: "total", key: "total" }
];
var lists;
const LectureRoomList = () => {
  const { totalRoomList } = useSelector(state => state.master);
  const { buildingNo } = useSelector(state => state.room);
  const [buildingList, setBuildingList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    lists = [];
    totalRoomList.map((room) => {
      if (String(room.groupNo) === buildingNo) {
        lists.push(room);
      }
    })
    setBuildingList(lists);
  }, [ buildingNo])

  const onRowClick = (record) => {
    return {
      onClick: () => {
        console.log(record.roomNo);
        dispatch({
          type: ROOM_SELECT_REQUEST,
          data: record.id,
        });
      }
    };
  };
  return (
    <>
      <Table columns={columns} dataSource={buildingList} onRow={onRowClick} />
    </>
  );
};

export default LectureRoomList;
