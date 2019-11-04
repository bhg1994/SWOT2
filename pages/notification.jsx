import React, { useState, useEffect, useCallback } from "react";
import {
  Layout,
  Icon,
  Typography,
  Input,
  Select,
  Divider,
  Button,
  Table,
  Modal,
  Form
} from "antd";
import {
  LOAD_NOTIFYCATIONS_REQUEST, CREATE_NOTIFYCATIONS_REQUEST,
  DELETE_NOTIFYCATIONS_REQUEST,
  MODIFY_NOTIFYCATIONS_REQUEST
} from "../reducers/post";
import { useDispatch, useSelector } from "react-redux";

const { Text } = Typography;
const { confirm } = Modal;
const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;


function handleChange(value) {
  console.log(`selected ${value}`);
}

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

  const columns = [
    {
      title: "글번호",
      dataIndex: "id",
      key: "id"
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
    {
      title: "수정란",
      dataIndex: "action",
      key: 'action',
      render: () =>
        myinfoid === 1 ?
          <span>
            <Button type="primary" onClick={showModifyNotifyModal}>수정</Button>
            <Divider type="vertical" />
            <Button type="danger" onClick={showDeleteNotifyModal}
            >삭제</Button>
          </span>
          : ""
    }
  ];



  const { notifycations } = useSelector(state => state.post);


  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [modifyvisible, setModifyvisible] = useState(false);
  const [id, setId] = useState(0);
  const [notificationtitle, setNotificationtitle] = useState("");
  const [notificationcontent, setNotificationcontent] = useState("");
  const [modifytitle, onChangetitle] = useInput("");
  const [modifybody, onChangebody] = useInput("");

  const handleCancel = () => {
    setModifyvisible(false);
    console.log("취소 버튼");
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
      type: CREATE_NOTIFYCATIONS_REQUEST,
      data: {
        code: "1",
        title: notificationtitle,
        body: notificationcontent
      }
    })
    setNotificationtitle("");
    setNotificationcontent("");
    setVisible(false);
  };

  const onRowClick = (record) => {
    return {
      onClick: () => {
        console.log(record.id);
      }
    }
  }

  let deleteId = 0;

  const showDeleteNotifyModal = () => {

    deleteId = 0;
    // setId(buildingList.id)
    notifycations.map((notify) => {
      if (notify.id === id) {
        deleteId = id;
      }
    });
    confirm({
      title: '해당 공지사항 삭제',
      content: '정말로 삭제하시겠습니까?',
      onOk() {
        dispatch({
          type: DELETE_NOTIFYCATIONS_REQUEST,
          data: {
            id: deleteId
          }
        });
      },
      onCancel() { },
    });
  }

  const showModifyNotifyModal = () => {
    setModifyvisible(true);
  }

  const notifyModify = () => {
    dispatch({
      type: MODIFY_NOTIFYCATIONS_REQUEST,
      data: {

      }
    })
    setModifyvisible(false);
  }

  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ marginRight: "110px", textAlign: "center" }}>
          <img src="static/images/notification_logo.png" />
        </div>
        <header style={{ display: "flex" }}>
          <div style={{ width: "200px" }}>
            <Icon type="bell" />
            <Text strong> 전체 30건</Text>
            <Text>(1/5)페이지</Text>
          </div>

          <div
            style={{
              width: 1200,
              textAlign: "right"
            }}
          >
            <Select
              defaultValue="검색조건"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="name">이름</Option>
              <Option value="lectureroom">강의실</Option>
              <Option value="date">날짜</Option>
            </Select>
            <Search style={{ width: 200, marginLeft: "10px" }} enterButton />
          </div>
        </header>
        <Divider />
        <Table columns={columns} dataSource={notifycations} onRow={onRowClick}></Table>
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
          >
          </div>
          {myinfoid === 1 ?
            <div style={{ width: "40%", textAlign: "right" }}>
              <Button type="danger" size="large" onClick={showModal}>
                공지사항 추가
            </Button>
            </div>
            : ""}
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
        <Form >
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
            <Button type="danger" onClick={handleCancel}>
              취소
                </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

notifycation.getInitialProps = async (context) => {
  console.log("notify");
  context.store.dispatch({
    type: LOAD_NOTIFYCATIONS_REQUEST,
  });
};

export default notifycation;
