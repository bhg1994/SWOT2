import React from "react";
import { Form, Button, List, Input, Card, Icon, Avatar } from "antd";
import NicknameEditForm from "../components/NicknameEditForm.jsx";

const data = [
  {
    title: "1",
    content: "승연관",
    studypurpose: "JAVA Study"
  },
  {
    title: "2",
    content: "미가엘관",
    studypurpose: "회의"
  },
  {
    title: "3",
    content: "새천년관",
    studypurpose: "동아리"
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
                extra={<a href="Notification">More</a>}
              ></Card>
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
              <Button style={{ width: "50%", marginBottom: "30px" }}>
                스터디 더 보기
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
                extra={<a href="Notification">More</a>}
              >
                {item.content} <br />
                {item.studypurpose}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};
export default Profile;
