import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Layout, Avatar } from "antd";
const { Header, Content } = Layout;
import propTypes from "prop-types";
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
      setMe(myInfo);
    }
  }, []);

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
          <Layout>
            <Header style={{ backgroundColor: "#fff" }}>
              <Link href="/">
                <a>
                  <img
                    src="static/images/SWOT_logo.png"
                    style={{
                      float: "right",
                      position: "relative",
                      marginTop: "8px",
                      right: "50%"
                    }}
                  />
                </a>
              </Link>
              {me.name ? (
                <Link href="/profile">
                  <div>
                    <a>
                      <Avatar
                        style={{
                          float: "right",
                          marginTop: "15px",
                          fontSize: "10px",
                          backgroundColor: "black"
                        }}
                      >
                        {me.name}
                      </Avatar>
                    </a>
                  </div>
                </Link>
              ) : (
                <Link href="/login">
                  <a>
                    <Avatar
                      style={{
                        float: "right",
                        marginTop: "15px",
                        fontSize: "10px",
                        backgroundColor: "black"
                      }}
                    >
                      LOGIN
                    </Avatar>
                  </a>
                </Link>
              )}
            </Header>
            <Content
              style={{
                margin: "20px 20px 0",
                padding: 24,
                minHeight: 1000,
                background: "#fff"
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

SWOT.getInitialProps = async context => {
  const { ctx, Component } = context;
  let pageProps = {};
  console.log("home get initial");

  // if (!ctx.store.getState().post.posts) {
  //   console.log("post is empty")
  //   ctx.store.dispatch({
  //     type: LOAD_POST_REQUEST,
  //     data: {
  //       code: "2"
  //     }
  //   });
  // }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return pageProps;
};

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
