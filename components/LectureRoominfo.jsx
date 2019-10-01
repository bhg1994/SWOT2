import { Table, Tag } from "antd";
import { LectureRoominfoCard } from "../components/css/LectureRoominfo";

const columns = [
  {
    title: "강의실 이미지",
    dataIndex: "lectureroomimage",
    key: "name"
  },
  {
    title: "강의실",
    dataIndex: "lectureName",
    key: "lectureName",
    render: text => <a>{text}</a>
  },
  {
    title: "최소 인원수",
    dataIndex: "minimum",
    key: "minimum"
  },
  {
    title: "최대 인원수",
    dataIndex: "maximum",
    key: "maximum"
  },
  {
    title: "예약 상태",
    dataIndex: "status",
    key: "status",
    render: status => (
      <span>
        {status.map(status => {
          let color = status === "예약 가능" ? "geekblue" : "green";
          if (status === "예약 중") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={status}>
              {status}
            </Tag>
          );
        })}
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    lectureroomimage: "김성진",
    lectureName: "M401호",
    minimum: "3명",
    maximum: "6명",
    status: ["예약 중"]
  },
  {
    key: "2",
    lectureroomimage: "방효근",
    lectureName: "M404호",
    minimum: "5명",
    maximum: "10명",
    status: ["예약 가능"]
  },
  {
    key: "3",
    lectureroomimage: "박혜린",
    lectureName: "M201호",
    minimum: "3명",
    maximum: "9명",
    status: ["예약 중"]
  },
  {
    key: "4",
    lectureroomimage: "서주은",
    lectureName: "M304호",
    minimum: "10명",
    maximum: "20명",
    status: ["예약 가능"]
  }
];

const LectureRoominfo = () => {
  return (
    <>
      <LectureRoominfoCard title="미가엘관" hoverable>
        <Table columns={columns} dataSource={data} pagination={false} />
      </LectureRoominfoCard>
    </>
  );
};

export default LectureRoominfo;
