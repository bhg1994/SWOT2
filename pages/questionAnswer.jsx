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
  LOAD_QUESTION_REQUEST,
  CREATE_QUESTION_REQUEST,
  DELETE_QUESTION_REQUEST,
  MODIFY_QUESTION_REQUEST
} from '../reducers/question';
import { useDispatch, useSelector } from "react-redux";

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const questionAnswer = () => {

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
      render: () => <div>{articlenum++}</div>
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
      title: "등록일",
      dataIndex: "createdDate",
      key: "createdDate"
    },
    {
      title: "수정란",
      dataIndex: "action",
      key: "action",
      render: () =>
        <span>
          <Button type="primary" onClick={showModifyNotifyModal}>수정</Button>
          <Divider type="vertical" />
          <Button type="danger" onClick={showDeleteNotifyModal}
          >삭제</Button>
        </span>
    }
  ];

  const { questions, isLoading } = useSelector(state => state.question);


  const dispatch = useDispatch();

  const [id, setId] = useState(0);
  const [createvisible, setcreateVisible] = useState(false);
  const [questiontitle, setQuestiontitle] = useState("");
  const [questioncontent, setQuestioncontent] = useState("");
  const [modifyvisible, setModifyvisible] = useState(false);
  const [deletevisible, setDeletevisible] = useState(false);
  const [modifytitle, onChangetitle] = useInput("");
  const [modifybody, onChangebody] = useInput("");

  const handleCancel = () => {
    setcreateVisible(false);
    console.log("취소 버튼");
  };


  const deletehandleCancel = () => {
    setDeletevisible(false);
  }

  const modifyhandleCancel = () => {
    setModifyvisible(false);
  }

  const showCreateModal = () => {
    setcreateVisible(true);
  };

  const onChangeValue = e => {
    if (e.target.id === "questiontitle") {
      setQuestiontitle(e.target.value);
    } else if (e.target.id === "questioncontent") {
      setQuestioncontent(e.target.value);
    }
  };

  const onRowClick = (record) => {
    return {
      onClick: () => {
        setId(record.id);
      }
    }
  }

  const showModifyNotifyModal = () => {
    setModifyvisible(true);
  }

  const showDeleteNotifyModal = () => {
    setDeletevisible(true);
  }


  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_QUESTION_REQUEST,
      data: {
        code: "3",
        title: questiontitle,
        body: questioncontent
      }
    })
    setQuestiontitle("");
    setQuestioncontent("");
    setcreateVisible(false);
  };


  const questionDelete = () => {
    dispatch({
      type: DELETE_QUESTION_REQUEST,
      data: {
        id: id
      }
    })
    setDeletevisible(false);
  }

  const questionModify = () => {
    dispatch({
      type: MODIFY_QUESTION_REQUEST,
      data: {
        id: id,
        title: modifytitle,
        body: modifybody
      }
    })
    setModifyvisible(false);
  }

  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ marginRight: "110px", textAlign: "center" }}>
          <img src="static/images/Q&A_logo.png" />
        </div>
        <header style={{ display: "flex" }}>
          <div style={{ width: "150px" }}>
            <Icon type="bell" />
            <Text strong> {questions.length}건</Text>
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
        <Table columns={columns} dataSource={questions} onRow={onRowClick}></Table>
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
          <div style={{ width: "40%", textAlign: "right" }}>
            <Button
              type="primary"
              size="large"
              style={{ marginLeft: "20px" }}
              onClick={showCreateModal}
            >
              글쓰기
            </Button>
          </div>
        </div>
        <Modal title="Q & A" visible={createvisible} footer={null}>
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

      {/* 공지사항 수정 버튼 모달 */}
      <Modal title="Q&A 글 수정" visible={modifyvisible} footer={null}>
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
              onClick={questionModify}
            >
              변경
                </Button>
            <Button type="danger" onClick={modifyhandleCancel}>
              취소
                </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Q&A 삭제 버튼 모달 */}

      <Modal title="Q&A 글 삭제" visible={deletevisible} footer={null}>
        <Form >
          <Form.Item>
            <p style={{ fontSize: "20px" }}>해당 글을 삭제 하시겠습니까?</p>
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              onClick={questionDelete}
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

questionAnswer.getInitialProps = async (context) => {
  context.store.dispatch({
    type: LOAD_QUESTION_REQUEST,
  });
};

export default questionAnswer;
