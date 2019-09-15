import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/Link";
import { Layout, Menu, Icon, Avatar, Row, Col } from "antd";
const { Header, Sider, Content, Footer } = Layout;
import Proptypes, { elementType } from "prop-types";
import { createStore, compose, applyMiddleware } from "redux";
import withRedux from "next-redux-wrapper";
import "@material-ui/core/styles";
import reducer from "../reducers";

const SWOT = ({ Component }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
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
              <Link href="/qa">
                <a>
                  <Icon type="check-circle" />
                  <span>Q&A</span>
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              style={{
                fontSize: "20px",
                padding: "0 20px",
                lineHeight: "64px"
              }}
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={toggle}
            />
            <Link href="/">
              <a>
                <img
                  src="static/images/SWOT_logo.png"
                  style={{
                    float: "right",
                    position: "relative",
                    right: "50%",
                    marginTop: "8px"
                  }}
                ></img>
              </a>
            </Link>
            <Link href="/profile">
              <a>
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  style={{
                    float: "right",
                    marginTop: "15px",
                    backgroundColor: "black"
                  }}
                />
              </a>
            </Link>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 1000
            }}
          >
            <Component />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <Row>
              <Col span={12}>
                전화번호 02-2610-4114 <br /> SWOT, 서울특별시 구로구 오류2동
                연동로 320 <br /> Seoul, KR 08359
              </Col>
              <Col span={12}>
                <br />
                저작권 보호 © SWOT Companies Inc. 모든 권리 유보
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

SWOT.Proptypes = {
  Component: elementType
};

// export default withRedux((initialState, options) => {
//   const middlewares = [];
//   const enhancer = compose(
//     applyMiddleware(...middlewares),
//     !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
//       ? window.__REDUX_DEVTOOLS_EXTENSION__()
//       : f => f
//   );
//   const store = createStore(reducer, initialState, enhancer);
//   return store;
// })(SWOT);

export default SWOT;
