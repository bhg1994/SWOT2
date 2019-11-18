import React, { useState, useCallback, useEffect } from "react";
import {
  Tabs,
  Button,
  Modal,
  Form,
  Typography,
  Upload,
  Icon,
  message
} from "antd";
import TabLectureRooms from "./TabLectureRooms";
import {
  InputClassroom,
  InputClassroomCode,
  BuildingNumber,
  InputMaximum,
  AddBtn,
  CancelBtn,
  BuildingTabs,
  BuildingAddBtn,
  FileWrapper
} from "../components/css/BuildingList";
import { useDispatch, useSelector } from "react-redux";
import { CREATEROOM_REQUEST } from "../reducers/master";
const axios = require("axios");

const { TabPane } = Tabs;
const { Text } = Typography;

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const BuildingList = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  const [buildingList, setBuildingList] = useState([]);

  const [roomName, onChangeroomName] = useInput("");
  const [groupNo, setChangegroupNo] = useState("");
  const [roomNo, onChangeroomNo] = useInput("");
  const [total, setChangeTotal] = useState("");

  const [tabkey, setTabkey] = useState("1");

  const { totalRoomList, isLoading } = useSelector(state => state.master);

  let lists = [];

  useEffect(() => {
    lists = [];
    totalRoomList.map(room => {
      if (String(room.groupNo) === tabkey) {
        lists.push(room);
      }
    });
    setBuildingList(lists);
  }, [totalRoomList]);

  const onTabClick = key => {
    lists = [];
    totalRoomList.map(room => {
      if (String(room.groupNo) === key) {
        lists.push(room);
      }
    });
    setBuildingList(lists);
    setTabkey(key);
  };

  const onChangegroupNo = value => {
    setChangegroupNo(value);
  };

  const onChangeTotal = value => {
    setChangeTotal(value);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let gn = parseInt(groupNo);
    dispatch({
      type: CREATEROOM_REQUEST,
      data: {
        roomName: roomName,
        groupNo: gn,
        roomNo: roomNo,
        total: total
      }
    });
    const url = "/imageupload";
    const formData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    formData.append("file", image);
    axios.post(url, formData, config);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onTabPaneClick = () => {
    setTabActive(true);
  };

  const handleFileChange = e => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      <Modal title="강의실 추가" visible={visible} footer={null}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
          <FileWrapper>
          <label for="label_file">업로드</label>
            <input
              id="label_file"
              type="file"
              name="file"
              onChange={handleFileChange}
            />
            </FileWrapper>
            <div>{image.name}</div>
          </Form.Item>
          <Form.Item>
            <Text type="secondary">건물 번호 : </Text>
            <BuildingNumber min={1} max={13} onChange={onChangegroupNo} />
          </Form.Item>
          <Form.Item>
            <InputClassroomCode
              addonBefore="강의실 코드"
              onChange={onChangeroomNo}
            />
          </Form.Item>
          <Form.Item>
            <InputClassroom
              addonBefore="강의실명"
              onChange={onChangeroomName}
            />
          </Form.Item>
          <Form.Item>
            <Text type="secondary">최대 인원수 : </Text>
            <InputMaximum onChange={onChangeTotal} min={3} max={30} />
          </Form.Item>
          <Form.Item>
            <AddBtn htmlType="submit">추가</AddBtn>
            <CancelBtn type="danger" onClick={handleCancel}>
              취소             
            </CancelBtn>
          </Form.Item>
        </Form>
      </Modal>
      <BuildingTabs defaultActiveKey="1" onTabClick={onTabClick}>
        <TabPane tab="승연관" key="1">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가           
          </BuildingAddBtn>
          <TabLectureRooms buildingList={buildingList} />
        </TabPane>

        <TabPane tab="일만관" key="2">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가           
          </BuildingAddBtn>
          <TabLectureRooms buildingList={buildingList} />
        </TabPane>

        <TabPane tab="월당관" key="3">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가           
          </BuildingAddBtn>
          <TabLectureRooms buildingList={buildingList} />
        </TabPane>

        <TabPane tab="나눔관" key="5">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가           
          </BuildingAddBtn>
          <TabLectureRooms buildingList={buildingList} />
        </TabPane>

        <TabPane tab="이천환기념관" key="6">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가           
          </BuildingAddBtn>
          <TabLectureRooms buildingList={buildingList} />
        </TabPane>

        <TabPane tab="새천년관" key="7">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가           
          </BuildingAddBtn>
          <TabLectureRooms buildingList={buildingList} />
        </TabPane>

        <TabPane tab="성미가엘성당" key="9">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가           
          </BuildingAddBtn>
          <TabLectureRooms buildingList={buildingList} />
        </TabPane>

        <TabPane tab="미가엘관" key="12">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가           
          </BuildingAddBtn>
          <TabLectureRooms buildingList={buildingList} />
        </TabPane>
      </BuildingTabs>
    </>
  );
};

export default BuildingList;
