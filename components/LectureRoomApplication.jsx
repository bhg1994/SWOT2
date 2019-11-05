import React, { useEffect } from "react";
import { Table, Divider, Tag, Button } from "antd";
import { useSelector } from "react-redux";

const { Column } = Table;


const LectureRoomApplication = () => {
  const { reservationsList } = useSelector(state => state.master);
  const { totalRoomList } = useSelector(state => state.master);
  

  const idToName = (id) => {
    console.log("id"+id);

    let name = "";
    totalRoomList.forEach(room => {
      if(room.id===id){
        name = room.roomName;
      }
    });
    return name;
  }

  reservationsList.forEach(reservation => {
    let name = idToName(reservation.roomId);
    reservation.id =name
  });
  

  return (
    <>
      <Table dataSource={reservationsList} pagination={false}>
        <Column title="강의실명" dataIndex="id" key="id" />
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
