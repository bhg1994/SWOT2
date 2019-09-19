import React from "react";
import { Button, List, Tag, Card } from "antd";
import NicknameEditForm from "../components/NicknameEditForm.jsx";
import Link from "next/link";

const data = [
  {
    title: "신청 날짜 : September 20, 2019",
    lectureroomimage: <img src="static/images/lectureroom2.jpg"></img>,
    reservationdate: "2019년 9월 23일 오후 1시 ~ 오후 4시",
    purposeAndpersonnel:
      "교내 프로젝트 회의 , 201331009 컴퓨터공학과 김성진 외 3명",
    applicatnTel: "010-3574-6706"
  }
];

const studydata = [
  {
    title: "신청 날짜 : September 19, 2019",
    studytitle: "자바스크립트 클로저",
    studydate: "2019년 9월 20일 오후 2시 ~ 오후 6시",
    studypurpose:
      "자바스크립트의 클로저 개념에 대하여 서로 얘기하고 예제 문제를 코딩하여 코드 리뷰",
    studyminimum: "3",
    studymaximum: "6"
  }
];

const Profile = () => {
  return (
    <>
      <div>
        <NicknameEditForm />
        <List
          itemLayout="horizontal"
          style={{ marginBottom: "20px" }}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          size="small"
          header={
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              강의실 예약 현황
            </div>
          }
          loadMore={
            <div style={{ textAlign: "center" }}>
              <Button style={{ width: "50%", marginBottom: "30px" }}>
                강의실 더 보기
              </Button>
            </div>
          }
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item style={{ maraginTop: "20px" }}>
              <Card
                style={{ marginTop: "20px" }}
                title={item.title}
                extra={<a href="/reservation">More</a>}
              >
                <div style={{ marginBottom: "20px", textAlign: "end" }}>
                  <Tag color="geekblue">승인 완료</Tag>
                </div>
                <div style={{ textAlign: "center" }}>
                  {item.lectureroomimage}
                </div>
                <br />
                예약 날짜 : {item.reservationdate}
                <br />
                예약목적 / 인원수 : {item.purposeAndpersonnel}
                <br />
                휴대폰 번호 :{item.applicatnTel}
              </Card>
            </List.Item>
          )}
        />
        <List
          style={{ marginBottom: "20px" }}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          size="small"
          header={
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              스터디 예약 현황
            </div>
          }
          loadMore={
            <div style={{ textAlign: "center" }}>
              <Link href="/studyboard">
                <a>
                  <Button style={{ width: "50%", marginBottom: "30px" }}>
                    스터디 더 보기
                  </Button>
                </a>
              </Link>
            </div>
          }
          bordered
          dataSource={studydata}
          renderItem={item => (
            <List.Item>
              <Card
                style={{ marginTop: "20px" }}
                title={item.title}
                extra={<a href="Notification">More</a>}
              >
                스터디 주제 :{item.studytitle} <br />
                날짜 : {item.studydate}
                <br />
                스터디 목적 : {item.studypurpose} <br />
                최소 인원 수 : {item.studyminimum}명 <br />
                최대 인원 수 : {item.studymaximum}명
              </Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};
export default Profile;
