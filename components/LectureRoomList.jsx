import React from "react";
import { Table, Divider, Tag } from "antd";
import Link from "next/link";

const columns = [
  { title: "강의실코드", dataIndex: "lecturecode", key: "lecturecode" },
  {
    title: "강의실명",
    dataIndex: "lecturename",
    key: "lecturename",
    render: text => (
      <Link href="/reservationForm">
        <a>{text}</a>
      </Link>
    )
  },
  { title: "수용인원", dataIndex: "capacity", key: "capacity" }
];

const data = [
  {
    key: "1",
    lecturecode: "M201",
    lecturename: "대학원강의실",
    capacity: "14"
  },
  {
    key: "2",
    lecturecode: "M202",
    lecturename: "대학원강의실",
    capacity: "14"
  },
  {
    key: "3",
    lecturecode: "M204",
    lecturename: "일반강의실",
    capacity: "14"
  },
  {
    key: "4",
    lecturecode: "M301",
    lecturename: "일반강의실",
    capacity: "120"
  },
  {
    key: "5",
    lecturecode: "M401",
    lecturename: "컴퓨터강의실",
    capacity: "40"
  },
  {
    key: "6",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  },
  {
    key: "7",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  },
  {
    key: "8",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  },
  {
    key: "9",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  },
  {
    key: "10",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  },
  {
    key: "11",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  },
  {
    key: "12",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  },
  {
    key: "13",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  },
  {
    key: "14",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  }
];

const LectureRoomList = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default LectureRoomList;
