import { useState } from 'react';
import { Button, Input, Card, Avatar, Modal, Form } from "antd";
import {
  NickEditForm,
  LogoutBtn,
  UpdateBtn,
  ChangePWBtn
} from "../components/css/NicknameEditForm";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_REQUEST } from "../reducers/user";



const NicknameEditForm = () => {
    
    
  const dispatch = useDispatch();
  const {me} = useSelector(state => state.user);
  const [visible, setVisible] = useState(false);
  const [pwvisible, setPwvisible] = useState(false);
  

  const showModal = () => {
    setVisible(true);
  };
  const showChangePWModal = () => {
    setPwvisible(true);
  };
  const handlePWCancel = () => {
    setPwvisible(false);
  }
  const handleCancel = () => {
    setVisible(false);
    console.log("취소 버튼");
  };

  const onClicked = () => {
    dispatch({
      type:LOAD_USER_REQUEST,
    });
  };
  
  return (
    <NickEditForm>
      <div>
        <Card.Meta
          style={{ marginTop: "2px" }}
          avatar={<Avatar>S </Avatar>}
          title={"asd"}
        />
        <LogoutBtn onClick={onClicked}>로그아웃</LogoutBtn>
      </div>
      <UpdateBtn type="primary" onClick={showModal}>내 정보 수정</UpdateBtn>
      <ChangePWBtn type="danger" onClick={showChangePWModal}>비밀번호 변경</ChangePWBtn>
      <Modal title="내 정보 수정" visible={visible} footer={null}>
        <Form >
          <Form.Item>
            <Input
              addonBefore="이메일"
              disabled
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="학번"
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="전화번호"
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="닉네임"
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              htmlType="submit"
            >
              변경
                </Button>
            <Button type="danger" onClick={handleCancel}>
              취소
                </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* 비밀번호 변경 */}
      <Modal title="비밀번호 변경" visible={pwvisible} footer={null}>
        <Form >
          <Form.Item>
            <Input
              addonBefore="현재 비밀번호"
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="현재 비밀번호"
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              htmlType="submit"
            >
              변경
                </Button>
            <Button type="danger" onClick={handlePWCancel}>
              취소
                </Button>
          </Form.Item>
        </Form>
      </Modal>
    </NickEditForm>
  );
};

NicknameEditForm.getInitialProps = async (context) => {
  console.log("asd" + context);
  // let token = localStorage.getItem("accessToken");
  // context.store.dispatch({
  //   type: LOAD_USER_REQUEST,
  //   data: token,
  // });
};

export default NicknameEditForm;
