import React, { useState } from "react";

import {
  Layout,
  Icon,
  Typography,
  Input,
  Select,
  Divider,
  Button,
  Row,
  Col,
  Card,
  Modal,
  Pagination,
  TimePicker,
  Form,
  InputNumber
} from "antd";

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;

const studyboard = () => {
  const [visible, setVisible] = useState(false);
  const [studytitle, setStudytitle] = useState("");
  const [studystarttime, setStudystarttime] = useState("");
  const [studyendtime, setStudyendtime] = useState("");
  const [studycontent, setStudycontent] = useState("");
  const [maximum, setMaximum] = useState("");

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

  const handleSubmit = e => {
    e.preventDefault();
    setVisible(false);
    console.log(studytitle);
    console.log(studycontent);
    console.log(maximum);
    console.log(studystarttime);
    console.log(studyendtime);
  };

  const onLecturemore = e => {
    setVisible(true);
  };

  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ margin: "0 110px 50px 0", textAlign: "center" }}>
          <img src="static/images/studyboard_logo.png" />
        </div>
        <header style={{ display: "flex" }}>
          <div style={{ width: "150px" }}>
            <Icon type="bell" />
            <Text strong> 전체 25건 </Text>
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
                    format="h:mm:ss A"
                    id="studystarttime"
                    onOk={onOk}
                    onChange={onStartime}
                  />
                  <TimePicker
                    format="h:mm:ss A"
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
        <div style={{ marginLeft: "130px", padding: "30px" }}>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="작성일 : September 19, 2019"
                hoverable
                onClick={onLecturemore}
              >
                <Text type="warning">스터디 주제 : {studytitle}</Text>
                <Divider />
                날짜 :
                <Text type="danger">
                  {studystarttime} - {studyendtime}
                </Text>
                <br />
                <br />
                목적 : {studycontent}
                <br />
                <br />
                최대 인원 수 : {maximum}명
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="September 18, 2019"
                hoverable
              >
                Empty
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="September 18, 2019"
                hoverable
              >
                Empty
              </Card>
            </Col>
          </Row>
        </div>
        <Divider />
        <div
          style={{
            marginLeft: "130px",
            padding: "30px"
          }}
        >
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="October 23,2019"
                hoverable
              >
                Empty
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="October 24, 2019"
                hoverable
              >
                Empty
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="October 25, 2019"
                hoverable
              >
                Empty
              </Card>
            </Col>
          </Row>
        </div>
        <Pagination
          style={{ textAlign: "center" }}
          defaultCurrent={6}
          total={50}
        />
      </Layout>
    </>
  );
};
export default studyboard;
