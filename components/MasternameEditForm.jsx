import { Card, Avatar } from "antd";
import {
  MasterEditForm,
  LogoutBtn
} from "../components/css/MasternameEditForm";


const MasternameEditForm = () => {

  const logoutRequest = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("myInfo");
    location.href = "/";
  };

  return (
    <MasterEditForm>
      <div>
        <Card.Meta
          style={{ marginTop: "2px" }}
          avatar={<Avatar>M</Avatar>}
          title="Master"
        />
        <LogoutBtn onClick={logoutRequest}>로그아웃</LogoutBtn>
      </div>
    </MasterEditForm>
  );
};

export default MasternameEditForm;
