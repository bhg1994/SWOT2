import { Modal, Button, Input, Form } from "antd";

const NotificationAddForm = () => {
  const [visible, setVisible] = useState(false);
  const [notificationtitle, setNotificationtitle] = useState("");
  const [notificationcontent, setNotificationcontent] = useState("");

  const { TextArea } = Input;

  return (
    <>
      <Modal title="공지사항 추가" visible={visible} footer={null}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <Input
              id="notificationtitle"
              value={notificationtitle}
              addonBefore="스터디 주제"
              style={{ width: "50%" }}
              onChange={onChangeValue}
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              id="notificationcontent"
              value={notificationcontent}
              autosize={{ minRows: 3, maxRows: 6 }}
              rows={4}
              onChange={onChangeValue}
              placeholder="공지사항 입력"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              htmlType="submit"
            >
              추가
            </Button>
            <Button type="danger" onClick={handleCancel}>
              취소
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NotificationAddForm;
