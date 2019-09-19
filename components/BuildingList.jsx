import React, { useState } from "react";
import {
  Tabs,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Typography,
  Upload,
  Icon,
  message
} from "antd";
import LectureRoomList from "./LectureRoomList";

const { TabPane } = Tabs;
const { Text } = Typography;

const BuildingList = () => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");

  const showModal = () => {
    setVisible(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setVisible(false);
    console.log(image);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      setImage(info.file.name);
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  return (
    <>
      <Modal title="강의실 추가" visible={visible} footer={null}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Input addonBefore="강의실 코드" style={{ width: "50%" }} />
          </Form.Item>
          <Form.Item>
            <Input addonBefore="강의실명" style={{ width: "50%" }} />
          </Form.Item>
          <Form.Item>
            <div>
              <Text type="secondary">최대 인원수 : </Text>
              <InputNumber
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
      <Tabs
        defaultActiveKey="11"
        style={{ marginTop: "70px", textAlign: "center" }}
      >
        <TabPane tab="승연관" key="1"></TabPane>
        <TabPane tab="일만관" key="2"></TabPane>
        <TabPane tab="월당관" key="3"></TabPane>
        <TabPane tab="나눔관" key="5"></TabPane>
        <TabPane tab="이천환관" key="6"></TabPane>
        <TabPane tab="새천년관" key="7"></TabPane>
        <TabPane tab="성미가엘성당" key="9"></TabPane>
        <TabPane tab="미가엘관" key="11">
          <Button
            style={{ marginBottom: "20px", textAlign: "right" }}
            type="primary"
            onClick={showModal}
          >
            강의실 추가
          </Button>
          <LectureRoomList />
        </TabPane>
      </Tabs>
    </>
  );
};
export default BuildingList;
