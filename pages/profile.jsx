import React from "react";
import { Form, Button, List, Input, Card, Icon } from "antd";
import NicknameEditForm from "../components/NicknameEditForm.jsx";

const Profile = () => {
  return (
    <>
      <div>
        <NicknameEditForm />
        <List
          style={{ marginBottom: "20px" }}
          grid={{ gutter: 4, xs: 2, md: 3 }}
          size="small"
          header={<div>팔로잉 목록</div>}
          loadMore={<Button style={{ width: "100%" }}>더 보기</Button>}
          bordered
          dataSource={["Seong_Jin", "SWOT", "SWOT프로젝트를 위한 연습"]}
          renderItem={item => (
            <List.Item style={{ maraginTop: "20px" }}>
              <Card actions={[<Icon key="stop" type="stop" />]}>
                <Card.Meta description={item} />
              </Card>
            </List.Item>
          )}
        />
        <List
          style={{ marginBottom: "20px" }}
          grid={{ gutter: 4, xs: 2, md: 3 }}
          size="small"
          header={<div>팔로워 목록</div>}
          loadMore={<Button style={{ width: "100%" }}>더 보기</Button>}
          bordered
          dataSource={["Seong_Jin", "SWOT", "SWOT프로젝트를 위한 연습"]}
          renderItem={item => (
            <List.Item style={{ maraginTop: "20px" }}>
              <Card actions={[<Icon key="stop" type="stop" />]}>
                <Card.Meta description={item} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};
export default Profile;
