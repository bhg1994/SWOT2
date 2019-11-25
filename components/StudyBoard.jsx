import React from "react";
import { Card, Typography, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
const { Text } = Typography;

const StudyBoard = () => {
  const { studyPosts, isLoading } = useSelector(state => state.post);
  console.log(studyPosts);
  return (
    <>
      <Card
        style={{ width: "300px" }}
        title="스터디 모집 게시글"
        hoverable
        cover={<img alt="example" src="static/images/lectureroom.jpg" />}
      >
        <Text type="warning">{studyPosts[0].title}</Text>
        <Divider />
        <Text mark>
          날짜 : {studyPosts[0].meetingDate} {studyPosts[0].startTime}시 ~
          {studyPosts[0].endTime}시
        </Text>
        <br />
        <Text>목적 : {studyPosts[0].body}</Text>
        <Divider />
        <Text>최대 인원수 : {studyPosts[0].total}명</Text>
      </Card>
      <Card
        title="스터디 모집 게시글"
        hoverable
        style={{ margin: "50px 0 0 0", width: "300px" }}
        cover={<img alt="example" src="static/images/lectureroom2.jpg" />}
      >
        <Text type="warning">{studyPosts[1].title}</Text>
        <Divider />
        <Text mark>
          날짜 : {studyPosts[1].meetingDate} {studyPosts[1].startTime}시 ~
          {studyPosts[1].endTime}시
        </Text>
        <br />
        <Text>목적 : {studyPosts[1].body}</Text>
        <Divider />
        <Text>최대 인원수 : {studyPosts[1].total}명</Text>
      </Card>
    </>
  );
};

export default StudyBoard;
