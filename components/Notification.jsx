import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";

const Notification = () => {
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
      <div>
        {/* <Row>
          <Col>
            <Card
              title="공지사항1"
              style={{
                marginTop: "15px",
                width: 400
              }}
              extra={<a href="Notification">More</a>}
              cover={
                <img alt="example" src="../../../images/lectureroom.jpg" />
              }
            >
              <p>notice__subtitle</p>
              <p>notice__content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col>
            <Card
              title="공지사항 2"
              style={{
                marginTop: "15px",
                width: 400
              }}
              extra={<a href="Notification">More</a>}
            >
              <p>notice__subtitle</p>
              <p>notice__content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row> */}
        <Card
          title="스터디 모집 게시글"
          style={{ margin: "50px 0 0 0", width: 300 }}
          hoverable
          cover={<img alt="example" src="static/images/lectureroom.jpg" />}
        >
          <p>notice__subtitle</p>
          <p>notice__content</p>
          <p>Card content</p>
        </Card>
        <Card
          title="스터디 모집 게시글"
          hoverable
          style={{ margin: "100px 0 0 0", width: 300 }}
          cover={<img alt="example" src="static/images/lectureroom2.jpg" />}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </>
  );
};

export default Notification;
