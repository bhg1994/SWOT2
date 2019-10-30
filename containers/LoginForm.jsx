import React, { useCallback, useState, useEffect } from "react";
import { Modal, Button, Input, Form } from "antd";
import Link from "next/Link";

import { SectionWrapper, LoginWrap, Logintext, LoginContainer, Email, Label, Password, RegisterWrapper, RegisterContainer, TextRegister, Article, InputAddress, InputPassword, LoginButton, RegisterButton, ChangePwButton } from './css/LoginForm';

import { LOG_IN_REQUEST, USERPW_MODIFY_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";


export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const LoginForm = () => {

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [myemail, onChangeMyEmail] = useInput("");
  const [modifyPw, onChangeModifyPw] = useInput("");
  const [pwvisible, setPwvisible] = useState(false);

  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const showChangePWModal = () => {
    setPwvisible(true);
  };

  const handlePWCancel = () => {
    setPwvisible(false);
  }

  const onClickedLogin = () => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        id,
        password
      }
    });
  };

  const userPwModify = () => {
    dispatch({
      type: USERPW_MODIFY_REQUEST,
      data: {
        email: myemail,
        modifyPw: modifyPw
      }
    });
    setPwvisible(false);
  }

  const loginBoxes = (
    <SectionWrapper>
      <LoginWrap>
        <LoginContainer>
          <Logintext>LOGIN</Logintext>
          <Email>
            <Label>EMAIL ADDRESS</Label>
            <InputAddress
              name="login_email"
              type="text"
              placeholder="YOUR EMAIL ADDRESS"
              onChange={onChangeId}
            />
          </Email>
          <Password>
            <Label>PASSWORD</Label>
            <InputPassword
              name="login_password"
              type="password"
              placeholder="ENTER VALID PASSWORD"
              onChange={onChangePassword}
            />
          </Password>
          <LoginButton onClick={onClickedLogin}>
            Login
          </LoginButton>
          <ChangePwButton onClick={showChangePWModal}>Change Password</ChangePwButton>
        </LoginContainer>
      </LoginWrap>
      <RegisterWrapper>
        <RegisterContainer>
          <TextRegister>NOT A MEMBER?</TextRegister>
          <Article>
            If you are using SWOT as a member, you can experience a wider
            variety of services.
            <br /> <br />
            Classroom reservation system, study collection board, and various
            services are available.
            </Article>
          <Link href="/signup">
            <a>
              <RegisterButton htmlType="submit">
                REGISTER NOW
              </RegisterButton>
            </a>
          </Link>
        </RegisterContainer>
      </RegisterWrapper>
    </SectionWrapper >
  );

  return <>
    {loginBoxes}
    {/* 비밀번호 변경 */}
    <Modal title="비밀번호 변경" visible={pwvisible} footer={null}>
      <Form >
        <Form.Item>
          <Input
            addonBefore="이메일"
            onChange={onChangeMyEmail}
            style={{ width: "50%" }}
          />
        </Form.Item>
        <Form.Item>
          <Input
            addonBefore="변경 비밀번호"
            type="password"
            onChange={onChangeModifyPw}
            style={{ width: "50%" }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            style={{ marginRight: "20px" }}
            onClick={userPwModify}
          >
            변경
                </Button>
          <Button type="danger" onClick={handlePWCancel}>
            취소
                </Button>
        </Form.Item>
      </Form>
    </Modal>
  </>;
};

export default LoginForm;
