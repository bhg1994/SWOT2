import { Button, Form, Input, Card, Avatar } from "antd";

const NicknameEditForm = () => {
  return (
    <Form
      style={{
        margin: "40px 0 40px 0",
        border: "1px solid #d9d9d9",
        padding: "30px"
      }}
    >
      <div>
        <div style={{ display: "flex" }}>
          <Card.Meta
            style={{ marginTop: "2px" }}
            avatar={<Avatar>S</Avatar>}
            title="Seong_Jin"
          />
          <Button style={{ marginLeft: "30px" }}>로그아웃</Button>
        </div>
        <Input addonBefore="닉네임" style={{ marginTop: "50px" }} />
        <div style={{ textAlign: "right" }}>
          <Button style={{ marginTop: "20px", width: "100px" }} type="primary">
            수정
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default NicknameEditForm;
