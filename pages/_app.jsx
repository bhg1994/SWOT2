import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Layout, Menu, Icon, Avatar, Row, Col } from "antd";
const { Header, Sider, Content, Footer } = Layout;
import propTypes, { elementType } from "prop-types";
import "@material-ui/core/styles";
import Slider from "../containers/Slider";
import MainFooter from "../components/MainFooter";

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";

import reducer from "../reducers";
import rootSaga from "../sagas";

import { LOAD_POST_REQUEST } from "../reducers/post";

const SWOT = ({ Component, store, pageProps }) => {

  const [me, setMe] = useState([]);


  useEffect(() => {
    if (JSON.parse(localStorage.getItem("myInfo"))) {
      let myInfo = JSON.parse(localStorage.getItem("myInfo"));
      setMe(myInfo)
    }
  }, [])
  

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
              {me.name ?
                <Link href="/profile">
                  <a>
                    <Avatar
                      style={{
                        float: "right",
                        marginTop: "15px",
                        fontSize: "10px",
                        backgroundColor: "black"
                      }}>{me.name}</Avatar>
                  </a>
                </Link>
                :
                <Link href="/login">
                  <a>
                    <Avatar
                      style={{
                        float: "right",
                        marginTop: "15px",
                        fontSize: "10px",
                        backgroundColor: "black"
                      }}>LOGIN</Avatar>
                  </a>
                </Link>}
            </Header>
            <Content
              style={{
                margin: "20px 20px 0",
                padding: 24,
                background: "#fff",
                minHeight: 1000
              }}
            >
              <Component {...pageProps} />
            </Content>
            <MainFooter />
          </Layout>
        </Layout>
      </Provider>
    </>
  );
};

SWOT.propTypes = {
  Component: propTypes.elementType.isRequired,
  store: propTypes.object.isRequired,
  pageProps: propTypes.object.isRequired
};

SWOT.getInitialProps = async (context) => {

  const { ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  if (ctx.store.getState().post.posts === []) {
    ctx.store.dispatch({
      type: LOAD_POST_REQUEST,

    });
  }
  return pageProps;
}

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(SWOT));
