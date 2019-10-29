import React, { useState } from "react";
import { Table, Button, Divider, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { DELETEROOM_REQUEST } from "../reducers/room";

const { confirm } = Modal;

const LectureRoomList = ({ buildingList }) => {

    const dispatch = useDispatch();

    const [id, setId] = useState(0);

    const { isLoading } = useSelector(state => state.room);

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
                    <Button type="primary">수정</Button>
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


    return (
        <>
            {/* <Table dataSource={buildingList}>
                <Column title="강의실 코드" dataIndex="roomNo" key="roomNo" />
                <Column title="강의실명" dataIndex="groupName" key="groupName" />
                <Column title="수용인원" dataIndex="total" key="total" />
                <Column
                    title="수정란"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <Button type="primary">수정</Button>
                            <Divider type="vertical" />
                            <Button type="danger" onClick={showDeleteRoomModal}
                            >삭제</Button>
                        </span>
                    )}
                />
            </Table> */}
            <Table columns={columns} dataSource={buildingList} onRow={onRowClick} />
        </>
    );
};

export default LectureRoomList;
