import React, { useState } from "react";
import {
  Layout,
  Icon,
  Typography,
  Input,
  Select,
  Divider,
  Button,
  Table,
  Pagination,
  Modal,
  Form
} from "antd";
import { LOAD_NOTIFYCATIONS_REQUEST } from "../reducers/post";
import {useSelector} from "react-redux";

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;

const columns = [
  {
    title: "글번호",
    dataIndex: "number"
  },
  {
    title: "제목",
    dataIndex: "title",
    render: text => <a>{text}</a>
  },

  {
    title: "이름",
    dataIndex: "name"
  },
  {
    title: "조회수",
    dataIndex: "views"
  },
  {
    title: "날짜",
    dataIndex: "date"
  },
  {
    title: "삭제",
    dataIndex: "button",
    render: text => <a>{text}</a>
  }
];



function handleChange(value) {
  console.log(`selected ${value}`);
}

const notifycation = () => {

  const {notifycations} = useSelector(state => state.post);
  console.log(notifycations);


  const [visible, setVisible] = useState(false);
  const [notificationtitle, setNotificationtitle] = useState("");
  const [notificationcontent, setNotificationcontent] = useState("");

  const handleCancel = () => {
    setVisible(false);
    console.log("취소 버튼");
  };

  const showModal = () => {
    setVisible(true);
  };

  const onChangeValue = e => {
    if (e.target.id === "notificationtitle") {
      setStudytitle(e.target.value);
    } else if (e.target.id === "notificationcontent") {
      setStudycontent(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setVisible(false);
  };

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
        <Table columns={columns} dataSource={notifycations} pagination={false}></Table>
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
            <Pagination defaultCurrent={6} total={50} />
          </div>
          <div style={{ width: "40%", textAlign: "right" }}>
            <Button type="danger" size="large" onClick={showModal}>
              공지사항 추가
            </Button>
          </div>
        </div>
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
      </Layout>
    </>
  );
};

notifycation.getInitialProps = async (context) => {
context.store.dispatch({
  type: LOAD_NOTIFYCATIONS_REQUEST,
});
};

export default notifycation;
