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
  { title: "수용인원", dataIndex: "capacity", key: "capacity" },
  {
    title: "예약 상태",
    dataIndex: "status",
    key: "status",
    render: status => (
      <span>
        {status.map(status => {
          let color = status === "예약 가능" ? "geekblue" : "green";
          if (status === "예약 불가") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={status}>
              {status}
            </Tag>
          );
        })}
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    lecturecode: "M201",
    lecturename: "대학원강의실",
    capacity: "14",
    status: ["예약 가능"]
  },
  {
    key: "2",
    lecturecode: "M202",
    lecturename: "대학원강의실",
    capacity: "14",
    status: ["예약 가능"]
  },
  {
    key: "3",
    lecturecode: "M204",
    lecturename: "일반강의실",
    capacity: "14",
    status: ["예약 불가"]
  },
  {
    key: "4",
    lecturecode: "M301",
    lecturename: "일반강의실",
    capacity: "120",
    status: ["예약 가능"]
  },
  {
    key: "5",
    lecturecode: "M401",
    lecturename: "컴퓨터강의실",
    capacity: "40",
    status: ["예약 불가"]
  },
  {
    key: "6",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50",
    status: ["예약 가능"]
  }
];

const LectureRoomApplication = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default LectureRoomApplication;
