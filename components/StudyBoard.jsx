import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography, Divider } from "antd";

const { Text } = Typography;

const StudyBoard = () => {
  const [maintitle, setMaintitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [noticeimg, setNoticeimg] = useState("");
  const [container, setContainer] = useState([]);

  // useEffect : 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태
  // useEffect(() => {
  //   setMaintitle("Main--title");
  //   setSubtitle("Sub-title");
  //   setContent(
  //     "Contents Contents Contents Contents Contents Contents Contents Contents Contents"
  //   );
  //   setNoticeimg(<img src="../../../images/groot.jpg"></img>);
  // }, setContainer);

  // const onChangeValue = e => {
  //   e.preventDefault();
  //   setContainer([
  //     {
  //       maintitle,
  //       subtitle,
  //       content,
  //       noticeimg
  //     }
  //   ]);
  //   console.log(container);
  // };

  return (
    <>
      <Card
        style={{ width: "300px" }}
        title="스터디 모집 게시글"
        hoverable
        cover={<img alt="example" src="static/images/lectureroom.jpg" />}
      >
        <Text type="warning">간단한 사이드 프로젝트 해커톤</Text>
        <Divider />
        <Text mark>날짜 : 9월 28일 오전 9시 ~ 오후 9시</Text>
        <br />
        <Text>
          목적 : 주제는 투두 캘린더로 평소에 쉽게 접할 수 있는 투두앱 보다는
          아주 약간 조금더 고도화 될 수 있기 때문에 이 점에 대해서 인지한 후
          스터디 예약 신청 부탁 드리겠습니다.
        </Text>
        <Divider />
        <Text>최대 인원수 : 6명</Text>
      </Card>
      <Card
        title="스터디 모집 게시글"
        hoverable
        style={{ margin: "50px 0 0 0", width: "300px" }}
        cover={<img alt="example" src="static/images/lectureroom2.jpg" />}
      >
        <Text type="warning">자바스크립트 스터디</Text>
        <Divider />
        <Text mark>날짜 : 9월 27일 오후 1시 ~ 오후 5시</Text>
        <br />
        <Text>
          목적 : 자바스크립트를 활용하여 HTTP통신, JSON, 동기/비동기, 내장객체,
          this바인딩, 프로토타입에 관하여 간단하게 개념 정리
        </Text>
        <Divider />
        <Text>최대 인원수 : 4명</Text>
      </Card>
    </>
  );
};

export default StudyBoard;
