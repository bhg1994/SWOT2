import React from "react";
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

const LectureRoomList = () => {
  const { totalRoomList } = useSelector(state => state.master);
  const dispatch = useDispatch();

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
      <Table columns={columns} dataSource={totalRoomList} onRow={onRowClick} />
    </>
  );
};

export default LectureRoomList;
