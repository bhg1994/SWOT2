import { Button, Form, Input, Card, Avatar } from "antd";

const NicknameEditForm = () => {
  return (
    <Form
      style={{
        margin: "20px 0 20px 0",
        border: "1px solid #d9d9d9",
        padding: "20px"
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
        <Input
          addonBefore="닉네임"
          style={{ width: "50%", marginRight: "50px" }}
        />
        <Button style={{ marginTop: "20px" }} type="primary">
          수정
        </Button>
      </div>
    </Form>
  );
};

export default NicknameEditForm;
