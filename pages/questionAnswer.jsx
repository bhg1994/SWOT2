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
import Link from "next/link";
import {
  LOAD_POST_REQUEST,
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  MODIFY_POST_REQUEST
} from "../reducers/post";

import { QUESTION_SELECT_REQUEST } from "../reducers/question";
import { useDispatch, useSelector } from "react-redux";

const { Column } = Table;
const { Text } = Typography;
const { TextArea } = Input;

const questionAnswer = () => {
  const [myinfoid, setMyinfoid] = useState(0);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("myInfo"))) {
      const me = JSON.parse(localStorage.getItem("myInfo"));
      setMyinfoid(me.id);
    }
  }, []);

  let articlenum = 1;

  const { qnaPosts, isLoading } = useSelector(state => state.post);

  console.log(qnaPosts);

  const dispatch = useDispatch();

  const [id, setId] = useState(0);
  const [createvisible, setcreateVisible] = useState(false);
  const [questiontitle, setQuestiontitle] = useState("");
  const [questioncontent, setQuestioncontent] = useState("");
  const [modifyvisible, setModifyvisible] = useState(false);
  const [deletevisible, setDeletevisible] = useState(false);

  const handleCancel = () => {
    setQuestiontitle("");
    setQuestioncontent("");
    setcreateVisible(false);
    console.log("취소 버튼");
  };

  const deletehandleCancel = () => {
    setDeletevisible(false);
  };

  const modifyhandleCancel = () => {
    setQuestiontitle("");
    setQuestioncontent("");
    setModifyvisible(false);
  };

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

  const onRowClick = record => {
    return {
      onClick: () => {
        setId(record.id);
        dispatch({
          type: QUESTION_SELECT_REQUEST,
          data: record
        });
      }
    };
  };

  const showModifyNotifyModal = () => {
    setModifyvisible(true);
  };

  const showDeleteNotifyModal = () => {
    setDeletevisible(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_POST_REQUEST,
      data: {
        code: "3",
        title: questiontitle,
        body: questioncontent,
        total: "0"
      }
    });
    setQuestiontitle("");
    setQuestioncontent("");
    setcreateVisible(false);
  };

  const questionDelete = () => {
    dispatch({
      type: DELETE_POST_REQUEST,
      data: {
        id: id
      }
    });
    setDeletevisible(false);
  };

  const questionModify = () => {
    dispatch({
      type: MODIFY_POST_REQUEST,
      data: {
        id: id,
        title: questiontitle,
        body: questioncontent
      }
    });
    setQuestiontitle("");
    setQuestioncontent("");
    setModifyvisible(false);
  };

  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ marginBottom: "50px", textAlign: "center" }}>
          <img src="static/images/Q&A_logo.png" />
        </div>
        <header style={{ display: "flex", marginTop: "20px" }}>
          <div style={{ width: "150px", marginTop: "6px" }}>
            <Icon type="bell" />
            <Text strong> 전체 {qnaPosts.length} 건</Text>
            <Text> (1/5)페이지</Text>
          </div>

          <div
            style={{
              width: 1200,
              textAlign: "right"
            }}
          >
            <Button type="primary" size="large" onClick={showCreateModal}>
              글쓰기
            </Button>
          </div>
        </header>
        <Divider />
        <Table dataSource={qnaPosts} onRow={onRowClick}>
          <Column
            title="글번호"
            dataIndex="number"
            key="number"
            render={() => (
              <div style={{ marginLeft: "10px" }}>{articlenum++}</div>
            )}
          />
          <Column
            title="제목"
            dataIndex="title"
            key="title"
            render={text => (
              <Link href="/Comments">
                <a>{text}</a>
              </Link>
            )}
          />
          <Column title="내용" dataIndex="body" key="body" />
          <Column title="등록일" dataIndex="createdDate" key="createdDate" />
          <Column
            title="수정란"
            key="action"
            render={post => (
              <span>
                {myinfoid === post.userId || myinfoid === 1 ? (
                  <div>
                    <Button type="primary" onClick={showModifyNotifyModal}>
                      수정
                    </Button>
                    <Divider type="vertical" />
                    <Button type="danger" onClick={showDeleteNotifyModal}>
                      삭제
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </span>
            )}
          />
        </Table>
      </Layout>
      {/* Q&A 생성 버튼 모달 */}
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

      {/* Q&A 수정 버튼 모달 */}
      <Modal title="Q&A 글 수정" visible={modifyvisible} footer={null}>
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
              id="questiontitle"
              value={questiontitle}
              addonBefore="제목"
              onChange={onChangeValue}
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              id="questioncontent"
              value={questioncontent}
              addonBefore="내용"
              onChange={onChangeValue}
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
        <Form>
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

questionAnswer.getInitialProps = async context => {
  console.log("qna getinit");
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: {
      code: "3"
    }
  });
};

export default questionAnswer;
