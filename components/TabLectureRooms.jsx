import React, { useState } from "react";
import { Table, Button, Divider, Modal, Input, Form, Typography, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { DELETEROOM_REQUEST } from "../reducers/master";

const { Text } = Typography;
const { confirm } = Modal;

const LectureRoomList = ({ buildingList }) => {

    const [visible, setVisible] = useState(false);
    const [roomNo, setRoomNo] = useState("");
    const [roomName, setRoomName] = useState("");
    const [groupNo, setGroupNo] = useState(0);
    const [total, setTotal] = useState(0);


    const dispatch = useDispatch();

    const [id, setId] = useState(0);

    const { totalRoomList, isLoading } = useSelector(state => state.master);
    //const { isLoading } = useSelector(state => state.room);


    const columns = [
        {
            title: '강의실 코드',
            dataIndex: 'roomNo',
            key: 'roomNo',
        },
        {
            title: '강의실명',
            dataIndex: 'roomName',
            key: 'roomName',
        },
        {
            title: '수용인원',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: '수정란',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button type="primary" onClick={showModifyRoomModal}>수정</Button>
                    <Divider type="vertical" />
                    <Button type="danger" onClick={showDeleteRoomModal}
                    >삭제</Button>
                </span>
            )
        },
    ]

    const onRowClick = (record) => {
        setId(record.id);
    }


    let deleteId = 0;

    const showDeleteRoomModal = () => {

        deleteId = 0;
        // setId(buildingList.id)
        buildingList.map((room) => {
            if (room.id === id) {
                deleteId = id;
            }
        });

        confirm({
            title: '해당 강의실 삭제',
            content: '정말로 삭제하시겠습니까?',
            onOk() {
                dispatch({
                    type: DELETEROOM_REQUEST,
                    data: {
                        id: deleteId
                    }
                });
            },
            onCancel() { },
        });
    }



    const showModifyRoomModal = () => {
        setVisible(true);
    }

    const onChangetotal = (value) => {
        setTotal(value);
    }

    const onChangeValue = e => {
        if (e.target.id === "roomNo") {
            setRoomNo(e.target.value);
        } else if (e.target.id === "roomName") {
            setRoomName(e.target.value);
        }
    };

    const handleCancel = () => {
        setVisible(false);
        console.log("취소 버튼");
    };

    const handleSubmit = e => {
        e.preventDefault();
        setVisible(false);

    };



    return (
        <>
            <Table columns={columns} dataSource={buildingList} onRow={onRowClick} />
            <Modal title="강의실 수정" visible={visible} footer={null}>
                <Form onSubmit={handleSubmit}>
                    <Form.Item>
                        <Input
                            id="roomNo"
                            value={roomNo}
                            addonBefore="강의실 코드"
                            style={{ width: "50%" }}
                            onChange={onChangeValue}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            id="roomName"
                            value={roomName}
                            addonBefore="강의실명"
                            style={{ width: "50%" }}
                            onChange={onChangeValue}
                        />
                    </Form.Item>
                    <Form.Item>
                        <div>
                            <Text type="secondary">수용인원 : </Text>
                            <InputNumber
                                id="total"
                                onChange={onChangetotal}
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
                            수정
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

export default LectureRoomList;
