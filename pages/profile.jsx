import React from "react";
import { Button, List, Tag, Card, Typography, Divider } from "antd";
import NicknameEditForm from "../components/NicknameEditForm.jsx";
import Link from "next/link";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { useSelector } from "react-redux";
import { RESERVATION_STATUS_REQUEST } from '../reducers/lookup';

const { Text } = Typography;

const studydata = [
  {
    title: "신청 날짜 : September 19, 2019",
    studytitle: "자바스크립트 클로저",
    studydate: "2019년 9월 20일 오후 2시 ~ 오후 6시",
    studypurpose:
      "자바스크립트의 클로저 개념에 대하여 서로 얘기하고 예제 문제를 코딩하여 코드 리뷰",
    studymaximum: "6"
  }
];

const Profile = () => {

  const { reservationStatus } = useSelector(state => state.lookup);



  console.log(reservationStatus.length);

  return (
    <>
      <div>
        <NicknameEditForm />
        <List
          itemLayout="horizontal"
          style={{ marginBottom: "40px" }}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          size="small"
          header={
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              강의실 예약 현황
            </div>
          }
          // loadMore={
          //   <div style={{ textAlign: "center" }}>
          //     <Button style={{ width: "50%", marginBottom: "40px" }}>
          //       강의실 더 보기
          //     </Button>
          //   </div>
          // }
          bordered
          dataSource={reservationStatus}
          renderItem={(item, i) => (
            <List.Item style={{ maraginTop: "20px" }}>
              <Card
                style={{ margin: "40px" }}
                title={"예약날짜 : " + item.reservationDate}
                extra={<a href="/reservation">More</a>}
              >
                <div style={{ marginBottom: "20px", textAlign: "end" }}>
                  {item.state === 'T' ?
                    <Tag color="blue">승인 완료</Tag>
                    : <Tag color="red">승인 대기</Tag>}
                  <Divider orientation="left">강의실 이미지</Divider>
                </div>
                <div style={{ textAlign: "center" }}>
                  {item.userId}
                </div>
                <Divider />
                <Text mark>대여 시간 : {item.startTime}~ {item.endTime}</Text>
                <Divider />
                예약목적 / 인원수 : {item.reason} / {item.total}명
                <Divider />
                휴대폰 번호 :{" " + item.phone}
              </Card>
            </List.Item>
          )}
        />
        <List
          style={{ marginBottom: "40px" }}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          size="small"
          header={
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              스터디 예약 현황
            </div>
          }
          bordered
          dataSource={studydata}
          renderItem={item => (
            <List.Item>
              <Card
                style={{ margin: "40px" }}
                title={item.title}
                extra={<a href="Notification">More</a>}
              >
                <Text type="warning">스터디 주제 :{item.studytitle}</Text>
                <Divider />
                <Text mark>날짜 : {item.studydate}</Text>
                <br />
                <br />
                스터디 목적 : {item.studypurpose} <br />
                <Divider />
                최대 인원 수 : {item.studymaximum}명
              </Card>
            </List.Item>
          )}
        />
        <List
          style={{ marginBottom: "40px" }}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          size="small"
          header={
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              스터디 신청 현황
            </div>
          }
          bordered
          dataSource={studydata}
          renderItem={item => (
            <List.Item>
              <Card
                style={{ margin: "40px" }}
                title={item.title}
                extra={<a href="Notification">More</a>}
              >
                <Text type="warning">스터디 주제 :{item.studytitle}</Text>
                <Divider />
                <Text mark>날짜 : {item.studydate}</Text>
                <br />
                <br />
                스터디 목적 : {item.studypurpose} <br />
                <Divider />
                최대 인원 수 : {item.studymaximum}명
              </Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

Profile.getInitialProps = async (context) => {
  console.log(context.isServer);
  // if(!context.isServer){
  //   let token = localStorage.getItem("accessToken");
  //   context.store.dispatch({
  //     type: LOAD_USER_REQUEST,
  //     data: token,
  //   });
  // }
  context.store.dispatch({
    type: RESERVATION_STATUS_REQUEST
  });
};
export default Profile;
