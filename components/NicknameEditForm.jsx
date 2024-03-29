import { useState, useCallback, useEffect } from "react";
import { Modal, Button, Input, Card, Avatar, Form } from "antd";
import {
  NickEditForm,
  LogoutBtn,
  UpdateBtn,
  WithdrawalBtn,
  Status
} from "../components/css/NicknameEditForm";
import { useDispatch, useSelector } from "react-redux";
import { USER_MODIFY_REQUEST, USER_WITHDRAWAL_REQUEST } from "../reducers/user";

const { confirm } = Modal;

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const NicknameEditForm = () => {
  var loading = {
    email: "loading",
    name: "loading",
    phone: "loading",
    statusMsg: "loading",
    studentId: "loading"
  };

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [name, onChangeName] = useInput("");
  const [stId, onChangeStId] = useInput("");
  const [msg, onChangeMsg] = useInput("");
  // const [wdvisible, setWdvisible] = useState(false);
  const [me, setMe] = useState(loading);

  const { isLoading } = useSelector(state => state.user);

  useEffect(() => {
    let myInfo = JSON.parse(localStorage.getItem("myInfo"));
    setMe(myInfo);
  }, []);
  useEffect(() => {
    let myInfo = JSON.parse(localStorage.getItem("myInfo"));
    setMe(myInfo);
  }, [isLoading]);

  const showWithdrawalModal = () => {
    confirm({
      title: "회원 탈퇴",
      content: "정말로 탈퇴하시겠습니까?",
      onOk() {
        dispatch({
          type: USER_WITHDRAWAL_REQUEST
        });
      },
      onCancel() {}
    });
  };

  const showModifyModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    console.log("취소 버튼");
  };

  const logoutRequest = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("myInfo");
    location.href = "/";
  };

  const userInfoModify = () => {
    dispatch({
      type: USER_MODIFY_REQUEST,
      data: {
        name: name,
        stId: stId,
        msg: msg
      }
    });
    onChangeMsg("");
    onChangeName("");
    onChangeStId("");
    setVisible(false);
  };

  return (
    <NickEditForm>
      <div>
        <Card.Meta
          style={{ marginTop: "2px" }}
          avatar={<Avatar>S </Avatar>}
          title={me.name + " (" + me.studentId + ") "}
        />
        <LogoutBtn onClick={logoutRequest}>로그아웃</LogoutBtn>
      </div>
      <div>
        <Status code>{me.statusMsg}</Status>
      </div>
      <UpdateBtn type="primary" onClick={showModifyModal}>
        내 정보 수정
      </UpdateBtn>
      <WithdrawalBtn type="danger" onClick={showWithdrawalModal}>
        회원 탈퇴
      </WithdrawalBtn>
      <Modal title="내 정보 수정" visible={visible} footer={null}>
        <Form>
          <Form.Item>
            <Input
              addonBefore="이메일"
              disabled
              value={me.email}
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="상테메세지"
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
    </NickEditForm>
  );
};

export default NicknameEditForm;
