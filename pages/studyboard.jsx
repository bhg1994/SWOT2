import React, { useState } from "react";
import {
  Layout,
  Icon,
  Typography,
  Input,
  Divider,
  Button,
  Modal,
  TimePicker,
  DatePicker,
  Form,
  Table,
  InputNumber
} from "antd";
import Link from "next/link";
import {
  LOAD_POST_REQUEST,
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  MODIFY_POST_REQUEST,
} from "../reducers/post";
import { useDispatch, useSelector } from "react-redux";

const { Column } = Table;
const { Text } = Typography;
const { TextArea } = Input;
const { confirm } = Modal;

const studyboard = () => {
  const [visible, setVisible] = useState(false);
  const [studyDate, setStudyDate] = useState("");
  const [studytitle, setStudytitle] = useState("");
  const [studystarttime, setStudystarttime] = useState("");
  const [studyendtime, setStudyendtime] = useState("");
  const [studycontent, setStudycontent] = useState("");
  const [maximum, setMaximum] = useState(3);
  const [id, setId] = useState(0);

  const { posts, isLoading } = useSelector(state => state.post);

  let articlenum = 1;

  console.log(posts);

  const dispatch = useDispatch();

  const handleCancel = () => {
    setVisible(false);
    console.log("취소 버튼");
  };

  const showModal = () => {
    setVisible(true);
  };

  const onOk = value => {
    console.log("onOk: ", value);
  };

  const onStartime = (time, timeString) => {
    console.log(timeString);
    setStudystarttime(timeString);
  };

  const onEndtime = (time, timeString) => {
    console.log(timeString);
    setStudyendtime(timeString);
  };

  const onChangeMaximum = value => {
    setMaximum(value);
  };

  const onChangeValue = e => {
    if (e.target.id === "studytitle") {
      setStudytitle(e.target.value);
    } else if (e.target.id === "studycontent") {
      setStudycontent(e.target.value);
    }
  };

  function onChangeDate(date, dateString) {
    console.log(dateString);
    setStudyDate(dateString);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_POST_REQUEST,
      data: {
        code: "2",
        title: studytitle,
        startTime: studystarttime,
        endTime: studyendtime,
        body: studycontent,
        total: maximum,
        meetingDate: studyDate
      }
    })
    setVisible(false);
  };

  const onRowClicked = (record) => {
    return {
      onMouseEnter: () => {
        setStudytitle(record.title);
        setStudystarttime(record.startTime);
        setStudyendtime(record.endTime);
        setStudycontent(record.body);
        setStudyDate(record.meetingDate);
        setId(record.id)
      }
    }
  }


  let deleteId = 0;

  const showDeleteRoomModal = () => {
    deleteId = 0;
    // setId(buildingList.id)
    posts.map((post) => {
      if (post.id === id) {
        deleteId = id;
      }
    });

    confirm({
      title: '해당 스터디 삭제',
      content: '정말로 삭제하시겠습니까?',
      onOk() {
        dispatch({
          type: DELETE_POST_REQUEST,
          data: {
            id: deleteId
          }
        });
      },
      onCancel() { },
    });
  }

  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ margin: "0 110px 50px 0", textAlign: "center" }}>
          <img src="static/images/studyboard_logo.png" />
        </div>
        <header style={{ display: "flex" }}>
          <div style={{ width: "150px" }}>
            <Icon type="bell" />
            <Text strong> 전체 {posts.length}건 </Text>
            <Text> (1/5)페이지</Text>
          </div>
          <div
            style={{
              width: 1200,
              textAlign: "right"
            }}
          >
            <Button
              type="primary"
              onClick={showModal}
              size="large"
            >
              스터디 추가
          </Button>
          </div>
          <Modal title="스터디 추가" visible={visible} footer={null}>
            <Form onSubmit={handleSubmit}>
              <Form.Item>
                <Text
                  type="danger"
                >
                  대여일자 선택
              </Text>
                <DatePicker style={{ margin: "20px" }} onChange={onChangeDate} />
                <Input
                  id="studytitle"
                  value={studytitle}
                  addonBefore="스터디 주제"
                  style={{ width: "50%" }}
                  onChange={onChangeValue}
                />
              </Form.Item>
              <Form.Item>
                <div>
                  <TimePicker
                    format="HH:mm"
                    id="studystarttime"
                    onOk={onOk}
                    onChange={onStartime}
                  />
                  <TimePicker
                    format="HH:mm"
                    id="studyendtime"
                    style={{ marginLeft: "20px" }}
                    onOk={onOk}
                    onChange={onEndtime}
                  />
                </div>
              </Form.Item>
              <Form.Item>
                <TextArea
                  id="studycontent"
                  value={studycontent}
                  autosize={{ minRows: 3, maxRows: 6 }}
                  rows={4}
                  onChange={onChangeValue}
                  placeholder="스터디에 대한 설명을 자세하게 입력해주세요."
                />
              </Form.Item>
              <Form.Item>
                <div>
                  <Text type="secondary">최대 인원수 : </Text>
                  <InputNumber
                    id="maximum"
                    onChange={onChangeMaximum}
                    min={3}
                    max={30}
                    defaultVAlue={3}
                    style={{ width: "50%" }}
                  />
                </div>
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
        </header>
        <Divider />
        <Table dataSource={posts} onRow={onRowClicked}>
          <Column title="글 번호" dataIndex="number" key="number"
            render={() =>
              <div style={{ marginLeft: "10px" }}>{articlenum++}
              </div>}
          />
          <Column title="스터디 주제" dataIndex="title" key="title" render={text => (
            <Link href="/studyapply">
              <a>{text}</a>
            </Link>)
          } />
          <Column title="스터디 내용" dataIndex="body" key="body" />
          <Column title="시작시간" dataIndex="startTime" key="startTime" />
          <Column title="종료시간" dataIndex="endTime" key="endTime" />
          <Column title="날짜" dataIndex="meetingDate" key="meetingDate" />

          <Column
            title="수정란"
            key="action"
            render={() => (
              <span>
                <Button type="primary">수정</Button>
                <Divider type="vertical" />
                <Button onClick={showDeleteRoomModal}>삭제</Button>
              </span>
            )}
          />
        </Table>
      </Layout>
    </>
  );
};


studyboard.getInitialProps = async (context) => {
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: {
      code: "2"
    }
  });
};

export default studyboard;
