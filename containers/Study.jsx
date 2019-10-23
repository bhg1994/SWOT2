import React, { useState, useEffect } from "react";
import Studyinfo from "../components/Studyinfo";
import { Button, Pagination, Card } from "antd";

const Study = () => {
  // const [studyimg, setStudyimg] = useState("");
  // const [lectureroom, setLectureroom] = useState("");
  // const [roominfo, setRoomInfo] = useState("");
  // const [studytitle, setStudytitle] = useState("");
  // const [studydate, setStudyDate] = useState("");
  // const [minimum, setMinimum] = useState("");
  // const [maximum, setMaximum] = useState("");
  // const [time, setTime] = useState("");
  // const [studypurpose, setStudypurpose] = useState("");
  // const [container, setContainer] = useState([]);

  // useEffect(() => {
  //   setStudyimg(<img src="../../../images/lectureroom.jpg"></img>);
  //   setLectureroom("미가엘관 401호");
  //   setRoomInfo("미가엘관 4번 건물 1층");
  //   setStudytitle("Java Programming Study");
  //   setStudyDate("2019년 9월 10일");
  //   setMinimum("3명");
  //   setMaximum("5명");
  //   setTime("오후 1시 ~ 오후 6시 ( 총 5시간 ) ");
  //   setStudypurpose(
  //     "자바 프로그래밍 상속에 관하여 실시간 라이브 코딩 및 서로간 코드 리뷰"
  //   );
  // }, setContainer);

  // const onChangeValue = e => {
  //   e.preventDefault();
  //   setContainer([
  //     {
  //       studyimg,
  //       lectureroom,
  //       roominfo,
  //       studytitle,
  //       studydate,
  //       minimum,
  //       maximum,
  //       time,
  //       studypurpose
  //     }
  //   ]);
  //   console.log(container);
  // };

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Card
          style={{ width: 700 }}
          title="스터디 공지사항"
          extra={<a href="#">Study > </a>}
        >
          <div>
            <Button
              type="primary"
              style={{ marginRight: "50px", width: "100px" }}
            >
              인원 수
            </Button>
            <Button type="danger" style={{ width: "100px" }}>
              날 짜
            </Button>
          </div>
          <div style={{ marginTop: "50px" }}>
            <Studyinfo />
            <Studyinfo />
          </div>
          <Pagination
            defaultCurrent={1}
            total={100}
            style={{ textAlign: "center", marginTop: "20px" }}
          />
        </Card>
      </div>
    </>
  );
};

export default Study;
