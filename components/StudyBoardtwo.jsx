import React from "react";
import { Card, Typography, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { STUDY_SELECT_REQUEST } from "../reducers/post";
const { Text } = Typography;
import Link from "next/link";

const StudyBoardtwo = () => {
  const { studyPosts, isLoading } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const onClickstudyPost2 = () => {
    dispatch({
      type: STUDY_SELECT_REQUEST,
      data: studyPosts[2]
    });
  };

  const onClickstudyPost3 = () => {
    dispatch({
      type: STUDY_SELECT_REQUEST,
      data: studyPosts[3]
    });
  };

  return (
    <>
      {studyPosts[2] ? (
        <Link href="/studyapply">
          <div onClick={onClickstudyPost2}>
            <Card
              style={{ width: "300px" }}
              title="스터디 모집 게시글"
              hoverable
              cover={<img alt="example" src="static/images/lectureroom3.jpg" />}
            >
              <Text type="warning">{studyPosts[2].title}</Text>
              <Divider />
              <Text mark>
                날짜 : {studyPosts[2].meetingDate} {studyPosts[2].startTime}시 ~
                {studyPosts[2].endTime}시
              </Text>
              <br />
              <Text>목적 : {studyPosts[2].body}</Text>
              <Divider />
              <Text>최대 인원수 : {studyPosts[2].total}명</Text>
            </Card>
          </div>
        </Link>
      ) : (
        <Card
          title="스터디 모집 게시글"
          hoverable
          style={{ margin: "50px 0 0 0", width: "300px" }}
        >
          <Text>스터디 준비 중 입니다..</Text>
        </Card>
      )}
      {studyPosts[3] ? (
        <Link href="/studyapply">
          <div onClick={onClickstudyPost3}>
            <Card
              title="스터디 모집 게시글"
              hoverable
              style={{ margin: "50px 0 0 0", width: "300px" }}
              cover={<img alt="example" src="static/images/lectureroom4.jpg" />}
            >
              <Text type="warning">{studyPosts[3].title}</Text>
              <Divider />
              <Text mark>
                날짜 : {studyPosts[3].meetingDate} {studyPosts[3].startTime}시 ~
                {studyPosts[3].endTime}시
              </Text>
              <br />
              <Text>목적 : {studyPosts[3].body}</Text>
              <Divider />
              <Text>최대 인원수 : {studyPosts[3].total}명</Text>
            </Card>
          </div>
        </Link>
      ) : (
        <Card
          title="스터디 모집 게시글"
          hoverable
          style={{ margin: "50px 0 0 0", width: "300px" }}
        >
          <Text>스터디 준비 중 입니다..</Text>
        </Card>
      )}
    </>
  );
};

export default StudyBoardtwo;
