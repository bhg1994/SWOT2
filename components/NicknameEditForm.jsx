import { useState, useCallback, useEffect } from 'react';
import { Button, Input, Card, Avatar, Modal, Form } from "antd";
import {
  NickEditForm,
  LogoutBtn,
  UpdateBtn,
  ChangePWBtn
} from "../components/css/NicknameEditForm";
import { useDispatch, useSelector } from "react-redux";
import { USER_MODIFY_REQUEST } from "../reducers/user";

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};



const NicknameEditForm = () => {
    
    
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [pwvisible, setPwvisible] = useState(false);
  const { isLoading } = useSelector(state => state.user);

  //console.log(isLoading);

  
 
  

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

  const logoutRequest = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("myInfo");
    window.location.href="/";
  };

  const me = JSON.parse(localStorage.getItem("myInfo"));


  const [name, onChangeName] = useInput("");
  const [stId, onChangeStId] = useInput("");
  const [msg, onChangeMsg] = useInput("");

  const userInfoModify = () => {
    dispatch({
      type: USER_MODIFY_REQUEST,
      data: {
        name:name,
        stId:stId,
        msg:msg,
      }
    });
    setVisible(false);
  };
  
  return (
    <NickEditForm>
      <div>
        <Card.Meta
          style={{ marginTop: "2px" }}
          avatar={<Avatar>S </Avatar>}
          title={me.name}
        />
        <LogoutBtn onClick={logoutRequest}>로그아웃</LogoutBtn>
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
              addonBefore="상메"
              onChange={onChangeMsg}
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="학번"
              onChange={onChangeStId}
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="이름"
              onChange={onChangeName}
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              onClick={userInfoModify}
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



export default NicknameEditForm;
