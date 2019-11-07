import React, { useEffect, useState } from "react";
import { Table, Divider, Modal, Button, Typography, Icon } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RESERVATION_SUBMIT_REQUEST, RESERVATION_DECLINE_REQUEST } from "../reducers/master";
import TextArea from "antd/lib/input/TextArea";

const { Column } = Table;
const { Title } = Typography;

var accepted = [];
var ready = [];
var denied = [];
var token;
var id;

const LectureRoomApplication = () => {
  const [visible, setVisible] = useState(false);
  const [reason, setReason] = useState("");


  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    dispatch({
      type: RESERVATION_DECLINE_REQUEST,
      data: {
        token: token,
        id: id,
        reason: reason,
      },
    });
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  const dispatch = useDispatch();

  const { reservationsList } = useSelector(state => state.master);
  const { totalRoomList } = useSelector(state => state.master);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      token = localStorage.getItem("accessToken");
    }
    parsing();
  }, []);


  const idToName = (id) => {

    let name = "";
    totalRoomList.forEach(room => {
      if (room.id === id) {
        name = room.roomName;
      }
    });
    return name;
  }

  const parsing = () => {
    accepted = [];
    ready = [];
    denied = [];
    reservationsList.forEach(reservation => {
      let name = idToName(reservation.roomId);
      reservation.createdDate = name
      switch (reservation.state) {
        case "C":
          ready.push(reservation);
          break;
        case "T":
          accepted.push(reservation);
          break;
        case "D":
          denied.push(reservation);
          break;
        default:
          break;
      }
    });
  }



  const onRowClicked = (record) => {
    return {
      onMouseEnter: () => {
        id = record.id;
      }
    }
  }
  const onSubmit = (e) => {
    dispatch({
      type: RESERVATION_SUBMIT_REQUEST,
      data: {
        token: token,
        id: id,
      },
    });
  }
  const onDecline = (e) => {
    dispatch({
      type: RESERVATION_DECLINE_REQUEST,
      data: {
        token: token,
        id: id,
        reason: reason,
      },
    });
  }
  const onChangeValue = e => {
    setReason(e.target.value);
  };

  parsing();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Icon type="sync" style={{ fontSize: "20px", margin: "5px 10px 0 0 " }} spin /><Title level={3}>신청 대기</Title>
      </div>
      <Table dataSource={ready} pagination={true} onRow={onRowClicked}>
        <Column title="강의실명" dataIndex="createdDate" key="createdDate" />
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
              <Button type="primary" onClick={onSubmit}>수락</Button>
              <Divider type="vertical" />
              <Button onClick={showModal}>거절</Button>
            </span>
          )}
        />
      </Table>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Icon type="check-circle" style={{ fontSize: "20px", margin: "5px 10px 0 0 " }} /><Title level={3}>신청 완료</Title>
      </div>
      <Table dataSource={accepted} pagination={true} onRow={onRowClicked}>
        <Column title="강의실명" dataIndex="createdDate" key="createdDate" />
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
              <Divider type="vertical" />
              <Button onClick={showModal}>거절</Button>
            </span>
          )}
        />
      </Table>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Icon type="close" style={{ fontSize: "20px", margin: "5px 10px 0 0 " }} /><Title level={3}>신청 거절</Title>
      </div>
      <Table dataSource={denied} pagination={true} onRow={onRowClicked}>
        <Column title="강의실명" dataIndex="createdDate" key="createdDate" />
        <Column title="수용인원" dataIndex="total" key="total" />
        <Column title="사유" dataIndex="reason" key="reason" />
        <Column title="거절 사유" dataIndex="failReason" key="failReason" />
        <Column title="시작시간" dataIndex="startTime" key="startTime" />
        <Column title="종료시간" dataIndex="endTime" key="endTime" />
        <Column title="날짜" dataIndex="reservationDate" key="reservationDate" />

        <Column
          title="확인란"
          key="action"
          render={() => (
            <span>
              <Button type="primary" onClick={onSubmit}>수락</Button>
              <Divider type="vertical" />
            </span>
          )}
        />
      </Table>
      <Modal
        title="거절 사유"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TextArea
          id="reason"
          value={reason}
          autosize={{ minRows: 3, maxRows: 6 }}
          rows={4}
          onChange={onChangeValue}
          placeholder="내용 입력"></TextArea>
      </Modal>
    </>
  );
};

export default LectureRoomApplication;
