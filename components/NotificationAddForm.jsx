import { Modal, Input, Form } from "antd";
import {
  InputNotificationTitle,
  AddBtn,
  CancelBtn
} from "../components/css/NotifiactionAddForm";
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
            <InputNotificationTitle
              id="notificationtitle"
              value={notificationtitle}
              addonBefore="스터디 주제"
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
            <AddBtn type="primary" htmlType="submit">
              추가
            </AddBtn>
            <CancelBtn type="danger" onClick={handleCancel}>
              취소
            </CancelBtn>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NotificationAddForm;
