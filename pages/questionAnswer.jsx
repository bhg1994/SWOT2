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
  Row,
  Col,
  Card,
  Pagination,
  Tag,
  Modal,
  Form
} from "antd";

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
    title: "작성자",
    dataIndex: "name"
  },
  {
    title: "등록일",
    dataIndex: "date"
  },
  {
    title: "조회수",
    dataIndex: "views"
  },
  {
    title: "상태",
    key: "status",
    dataIndex: "status",
    render: status => (
      <span>
        {status.map(status => {
          let color = status === "답변완료" ? "geekblue" : "green";
          if (status === "답변대기") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={status}>
              {status}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "삭제",
    dataIndex: "button",
    render: text => <a>{text}</a>
  }
];

const data = [
  {
    key: "1",
    number: "1",
    title: "SWOT 계정과 비밀번호를 잊어버렸어요. 어떻게 찾나요?",
    name: "김성진",
    date: "2019년 9월 20일",
    views: "20",
    status: ["답변대기"],
    button: "삭제"
  },
  {
    key: "2",
    number: "2",
    title: "강의실 예약을 주 단위로도 예약하여 이용 할 수 있나요?",
    name: "방효근",
    date: "2019년 9월 24일",
    views: "24",
    status: ["답변완료"],
    button: "삭제"
  },
  {
    key: "3",
    number: "3",
    title:
      "2명에서 강의실을 빌리려 하는데 최소 인원 제한이 3명인데 빌릴 수 없는건가요?",
    name: "박혜린",
    date: "2019년 9월 26일",
    views: "14",
    status: ["답변완료"],
    button: "삭제"
  },
  {
    key: "4",
    number: "4",
    title:
      "예약내역을 확인하려고 하는데 제 마이페이지에서 자꾸 오류가 나는데 해결 좀 해주세요",
    name: "서주은",
    date: "2019년 9월 29일",
    views: "29",
    status: ["답변대기"],
    button: "삭제"
  }
];

const questionAnswer = () => {
  const [visible, setVisible] = useState(false);
  const [questiontitle, setQuestiontitle] = useState("");
  const [questioncontent, setQuestioncontent] = useState("");

  const handleCancel = () => {
    setVisible(false);
    console.log("취소 버튼");
  };

  const showModal = () => {
    setVisible(true);
  };

  const onChangeValue = e => {
    if (e.target.id === "questiontitle") {
      setQuestiontitle(e.target.value);
    } else if (e.target.id === "questioncontent") {
      setQuestioncontent(e.target.value);
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
          <img src="static/images/Q&A_logo.png" />
        </div>
        <header style={{ display: "flex" }}>
          <div style={{ width: "150px" }}>
            <Icon type="bell" />
            <Text strong> 전체20건</Text>
            <Text>(1/4)페이지</Text>
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
              //   onChange={handleChange}
            >
              <Option value="name">제목</Option>
              <Option value="lectureroom">작성자</Option>
            </Select>
            <Search style={{ width: 200, marginLeft: "10px" }} enterButton />
          </div>
        </header>
        <Divider />
        <Table columns={columns} dataSource={data} pagination={false}></Table>
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
            <Button
              type="primary"
              size="large"
              style={{ marginLeft: "20px" }}
              onClick={showModal}
            >
              글쓰기
            </Button>
          </div>
        </div>
        <Modal title="Q & A" visible={visible} footer={null}>
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Input
                id="questiontitle"
                value={questiontitle}
                addonBefore="질문 입력"
                style={{ width: "50%" }}
                onChange={onChangeValue}
              />
            </Form.Item>
            <Form.Item>
              <TextArea
                id="questioncontent"
                value={questioncontent}
                autosize={{ minRows: 3, maxRows: 6 }}
                rows={4}
                onChange={onChangeValue}
                placeholder="내용 입력"
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

export default questionAnswer;
