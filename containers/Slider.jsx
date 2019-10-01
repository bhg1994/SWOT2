import Link from "next/Link";
import { Menu, Icon } from "antd";
import { SiderWrapper } from "../containers/css/Slider";

const Slider = () => {
  return (
    <>
      <SiderWrapper>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link href="/">
              <a>
                <Icon type="home" />
                <span>Home</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/signup">
              <a>
                <Icon type="user-add" />
                <span>Register</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/login">
              <a>
                <Icon type="login" />
                <span>Login</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/notification">
              <a>
                <Icon type="notification" />
                <span>Notification</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/profile">
              <a>
                <Icon type="user" />
                <span>MyPage</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link href="/Reservation">
              <a>
                <Icon type="schedule" />
                <span>Reservation</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link href="/studyboard">
              <a>
                <Icon type="read" />
                <span>StudyBoard</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link href="/questionAnswer">
              <a>
                <Icon type="check-circle" />
                <span>Q&A</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link href="/master">
              <a>
                <Icon type="github" />
                <span>Master</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="10">
            <Link href="/reservationForm">
              <a>
                <Icon type="github" />
                <span>reservationForm</span>
              </a>
            </Link>
          </Menu.Item>
        </Menu>
      </SiderWrapper>
    </>
  );
};

export default Slider;
