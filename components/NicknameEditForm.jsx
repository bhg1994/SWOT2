import { Button, Input, Card, Avatar } from "antd";
import {
  NickEditForm,
  LogoutBtn,
  InputNickname,
  UpdateBtn
} from "../components/css/NicknameEditForm";

const NicknameEditForm = () => {
  return (
    <NickEditForm>
      <div>
        <Card.Meta
          style={{ marginTop: "2px" }}
          avatar={<Avatar>S </Avatar>}
          title="Seong_Jin"
        />
        <LogoutBtn>로그아웃</LogoutBtn>
      </div>
      <InputNickname addonBefore="닉네임" />
      <UpdateBtn type="primary">수정</UpdateBtn>
    </NickEditForm>
  );
};

export default NicknameEditForm;
