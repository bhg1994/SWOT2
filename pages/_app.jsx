import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/Link";
import { Layout, Menu, Icon, Avatar, Row, Col } from "antd";
const { Header, Sider, Content, Footer } = Layout;
import propTypes, { elementType } from "prop-types";
import "@material-ui/core/styles";
import Slider from "../containers/Slider";

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";
import withRedux from "next-redux-wrapper";

import reducer from "../reducers";
import rootSaga from "../sagas";

const SWOT = ({ Component, store }) => {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
        </Head>
        <Layout>
          <Slider />
          <Layout style={{ marginLeft: "200px" }}>
            <Header style={{ background: "#fff", padding: 0 }}>
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
                margin: "20px 20px 0",
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
      </Provider>
    </>
  );
};

SWOT.propTypes = {
  Component: propTypes.elementType.isRequired,
  store: propTypes.object.isRequired
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(SWOT);
