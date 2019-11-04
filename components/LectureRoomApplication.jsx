import React, { useEffect } from "react";
import { Table, Divider, Tag, Button } from "antd";
import { useSelector } from "react-redux";

const { Column } = Table;

const data = [
  // {
  //   key: "1",
  //   lecturecode: "M201",
  //   lecturename: "대학원강의실",
  //   capacity: "14"
  // },
  // {
  //   key: "2",
  //   lecturecode: "M202",
  //   lecturename: "대학원강의실",
  //   capacity: "14"
  // },
  // {
  //   key: "3",
  //   lecturecode: "M204",
  //   lecturename: "일반강의실",
  //   capacity: "14"
  // },
  // {
  //   key: "4",
  //   lecturecode: "M301",
  //   lecturename: "일반강의실",
  //   capacity: "120"
  // },
  // {
  //   key: "5",
  //   lecturecode: "M401",
  //   lecturename: "컴퓨터강의실",
  //   capacity: "40"
  // },
  // {
  //   key: "6",
  //   lecturecode: "M402",
  //   lecturename: "일반강의실",
  //   capacity: "50"
  // }
];

const LectureRoomApplication = () => {
  const { reservationsList } = useSelector(state => state.master);
  useEffect(() => {
    console.log(reservationsList);
  }, [reservationsList]);
  console.log(reservationsList);


  return (
    <>
      <Table dataSource={reservationsList} pagination={false}>
        <Column title="roomId" dataIndex="roomId" key="roomId" />
        <Column title="강의실명" dataIndex="roomId" key="roomId" />
        <Column title="수용인원" dataIndex="total" key="total" />
        <Column title="사유" dataIndex="reason" key="reason" />
        <Column title="시작시간" dataIndex="startTime" key="startTime" />
        <Column title="종료시간" dataIndex="endTime" key="endTime" />
        <Column title="날짜" dataIndex="reservationDate" key="reservationDate" />

        <Column
          title="확인란"
          key="action"
          render={() => (
            <span>
              <Button type="primary">수락</Button>
              <Divider type="vertical" />
              <Button>거절</Button>
            </span>
          )}
        />
      </Table>
    </>
  );
};

export default LectureRoomApplication;
