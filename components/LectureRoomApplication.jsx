import React from "react";
import { Table, Divider, Tag, Button } from "antd";

const { Column } = Table;

const data = [
  {
    key: "1",
    lecturecode: "M201",
    lecturename: "대학원강의실",
    capacity: "14"
  },
  {
    key: "2",
    lecturecode: "M202",
    lecturename: "대학원강의실",
    capacity: "14"
  },
  {
    key: "3",
    lecturecode: "M204",
    lecturename: "일반강의실",
    capacity: "14"
  },
  {
    key: "4",
    lecturecode: "M301",
    lecturename: "일반강의실",
    capacity: "120"
  },
  {
    key: "5",
    lecturecode: "M401",
    lecturename: "컴퓨터강의실",
    capacity: "40"
  },
  {
    key: "6",
    lecturecode: "M402",
    lecturename: "일반강의실",
    capacity: "50"
  }
];

const LectureRoomApplication = () => {
  return (
    <>
      <Table dataSource={data} pagination={false}>
        <Column title="강의실 코드" dataIndex="lecturecode" key="lecturecode" />
        <Column title="강의실명" dataIndex="lecturename" key="lecturename" />
        <Column title="수용인원" dataIndex="capacity" key="capacity" />
        <Column
          title="확인란"
          key="action"
          render={() => (
            <span>
              <Button type="primary">수락</Button>
              <Divider type="vertical" />
              <Button>거절</Button>
            </span>
          )}
        />
      </Table>
    </>
  );
};

export default LectureRoomApplication;
