import { Button, Input, Card, Avatar } from "antd";
import {
  NickEditForm,
  LogoutBtn,
  InputNickname,
  UpdateBtn
} from "../components/css/NicknameEditForm";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_REQUEST } from "../reducers/user";


const NicknameEditForm = () => {
  const dispatch = useDispatch();
  const {me} = useSelector(state => state.user);

  console.log("nicknamecard "+me);



  const onClicked = () =>{
    dispatch({
      type: LOAD_USER_REQUEST,
    });

  }
  return (
    <NickEditForm>
      <div>
        <Card.Meta
          style={{ marginTop: "2px" }}
          avatar={<Avatar>S </Avatar>}
          title={me.name}
        />
        <LogoutBtn onClick={onClicked}>로그아웃</LogoutBtn>
      </div>
      <InputNickname addonBefore="닉네임" />
      <UpdateBtn type="primary">수정</UpdateBtn>
    </NickEditForm>
  );
};


export default NicknameEditForm;
