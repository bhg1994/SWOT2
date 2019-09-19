import { Button, Form, Input, Card, Avatar } from "antd";

const MasternameEditForm = () => {
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
            avatar={<Avatar>M</Avatar>}
            title="Master"
          />
          <Button style={{ marginLeft: "30px" }}>로그아웃</Button>
        </div>
      </div>
    </Form>
  );
};

export default MasternameEditForm;
