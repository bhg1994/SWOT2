import React, { useState, useEffect, useCallback } from "react";
import {
  Layout,
  Icon,
  Typography,
  Input,
  Divider,
  Button,
  Table,
  Modal,
  Form
} from "antd";
import {
  LOAD_POST_REQUEST,
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  MODIFY_POST_REQUEST
} from "../reducers/post";
import { useDispatch, useSelector } from "react-redux";

const { Text } = Typography;
const { TextArea } = Input;

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const notifycation = () => {
  const [myinfoid, setMyinfoid] = useState(0);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("myInfo"))) {
      const me = JSON.parse(localStorage.getItem("myInfo"));
      setMyinfoid(me.id);
    }
  }, []);

  let articlenum = 1;

  const columns = [
    {
      title: "글번호",
      dataIndex: "number",
      key: "number",
      render: () => <div style={{ marginLeft: "10px" }}>{articlenum++}</div>
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      render: text => <a>{text}</a>
    },

    {
      title: "내용",
      dataIndex: "body",
      key: "body"
    },
    {
      title: "날짜",
      dataIndex: "createdDate",
      key: "createdDate"
    },
    myinfoid === 1
      ? {
          title: "수정란",
          dataIndex: "action",
          key: "action",
          render: () => (
            <span>
              <Button type="primary" onClick={showModifyNotifyModal}>
                수정
              </Button>
              <Divider type="vertical" />
              <Button type="danger" onClick={showDeleteNotifyModal}>
                삭제
              </Button>
            </span>
          )
        }
      : {}
  ];

  const { notifyPosts, isLoading } = useSelector(state => state.post);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [modifyvisible, setModifyvisible] = useState(false);
  const [deletevisible, setDeletevisible] = useState(false);
  const [id, setId] = useState(0);
  const [notificationtitle, setNotificationtitle] = useState("");
  const [notificationcontent, setNotificationcontent] = useState("");
  const [modifytitle, onChangetitle] = useInput("");
  const [modifybody, onChangebody] = useInput("");

  const handleCancel = () => {
    setVisible(false);
    console.log("취소 버튼");
  };

  const deletehandleCancel = () => {
    setDeletevisible(false);
  };

  const modifyhandleCancel = () => {
    setModifyvisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  const onChangeValue = e => {
    if (e.target.id === "notificationtitle") {
      setNotificationtitle(e.target.value);
    } else if (e.target.id === "notificationcontent") {
      setNotificationcontent(e.target.value);
    }
  };

  const handleSubmit = e => {
    // 공지사항 추가 dispatch 작성
    e.preventDefault();
    dispatch({
      type: CREATE_POST_REQUEST,
      data: {
        code: "1",
        title: notificationtitle,
        body: notificationcontent,
        total: "0"
      }
    });
    setNotificationtitle("");
    setNotificationcontent("");
    setVisible(false);
  };

  const onRowClick = record => {
    return {
      onClick: () => {
        console.log("RowClick" + record.id);
        setId(record.id);
      }
    };
  };

  const showModifyNotifyModal = () => {
    setModifyvisible(true);
  };

  const showDeleteNotifyModal = () => {
    setDeletevisible(true);
  };

  const notifyModify = () => {
    dispatch({
      type: MODIFY_POST_REQUEST,
      data: {
        id: id,
        title: modifytitle,
        body: modifybody
      }
    });
    setModifyvisible(false);
  };

  const notifyDelete = () => {
    dispatch({
      type: DELETE_POST_REQUEST,
      data: {
        id: id
      }
    });
    setDeletevisible(false);
  };

  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ marginRight: "110px", textAlign: "center" }}>
          <img src="static/images/notification_logo.png" />
        </div>
        <header style={{ display: "flex", marginTop: "20px" }}>
          <div style={{ width: "150px", marginTop: "6px" }}>
            <Icon type="bell" />
            <Text strong> 전체 {notifyPosts.length}건</Text>
            <Text> (1/5)페이지</Text>
          </div>
          {myinfoid === 1 ? (
            <div
              style={{
                width: 1200,
                textAlign: "right"
              }}
            >
              <Button type="danger" size="large" onClick={showModal}>
                공지사항 추가
              </Button>
            </div>
          ) : (
            ""
          )}
        </header>
        <Divider />
        <Table
          columns={columns}
          dataSource={notifyPosts}
          onRow={onRowClick}
        ></Table>
        <div
          style={{
            display: "flex",
            marginTop: "50px"
          }}
        >
          <div
            style={{
              width: "60%",
              textAlign: "right"
            }}
          ></div>
        </div>
      </Layout>
      <Modal title="공지사항 추가" visible={visible} footer={null}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <Input
              id="notificationtitle"
              value={notificationtitle}
              addonBefore="공지사항 제목"
              style={{ width: "50%" }}
              onChange={onChangeValue}
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              id="notificationcontent"
              value={notificationcontent}
              autosize={{ minRows: 3, maxRows: 6 }}
              rows={4}
              onChange={onChangeValue}
              placeholder="공지사항 내용 입력"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              htmlType="submit"
            >
              추가
            </Button>
            <Button type="danger" onClick={handleCancel}>
              취소
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* 공지사항 수정 버튼 모달 */}
      <Modal title="공지사항 수정" visible={modifyvisible} footer={null}>
        <Form>
          <Form.Item>
            <Input
              addonBefore="글번호"
              disabled
              value={id}
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="제목"
              onChange={onChangetitle}
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="내용"
              onChange={onChangebody}
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              onClick={notifyModify}
            >
              변경
            </Button>
            <Button type="danger" onClick={modifyhandleCancel}>
              취소
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* 공지사항 삭제 버튼 모달 */}

      <Modal title="공지사항 삭제" visible={deletevisible} footer={null}>
        <Form>
          <Form.Item>
            <p style={{ fontSize: "20px" }}>해당 글을 삭제 하시겠습니까?</p>
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              onClick={notifyDelete}
            >
              삭제
            </Button>
            <Button type="danger" onClick={deletehandleCancel}>
              취소
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

notifycation.getInitialProps = async context => {
  console.log("notify");
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: {
      code: "1"
    }
  });
};

export default notifycation;
