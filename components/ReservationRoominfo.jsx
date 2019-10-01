import { Table, Divider, Tag, Card } from "antd";
import { RoominfoWrapper } from "../components/css/ReservationRoominfo";

const columns = [
  {
    title: "예약자",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "강의실",
    dataIndex: "lectureName",
    key: "lectureName",
    render: text => <a>{text}</a>
  },
  {
    title: "위치",
    dataIndex: "location",
    key: "location"
  },
  {
    title: "예약 목적",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "동아리 활동") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "예약 날짜",
    key: "date",
    render: (text, record) => (
      <span>
        <a>{record.date}</a>
        {/* <Divider type="vertical" /> */}
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "김성진",
    lectureName: "승연관",
    location: "1502호",
    date: "9월 20일",
    tags: ["자바스크립트 스터디"]
  },
  {
    key: "2",
    name: "방효근",
    lectureName: "미가엘관",
    location: "M401",
    date: "9월 27일",
    tags: ["동아리 활동"]
  },
  {
    key: "3",
    name: "박혜린",
    lectureName: "정보과학관",
    location: "4201호",
    date: "9월 25일",
    tags: ["회의"]
  },
  {
    key: "4",
    name: "서주은",
    lectureName: "새천년관",
    location: "7302호",
    date: "10월 11일",
    tags: ["조모임 활동"]
  }
];

const ReservationRoominfo = () => {
  return (
    <>
      <RoominfoWrapper
        title="강의실 예약현황"
        hoverable
        extra={<a href="reservation">More</a>}
      >
        <Table columns={columns} dataSource={data} pagination={false} />
      </RoominfoWrapper>
    </>
  );
};

export default ReservationRoominfo;
