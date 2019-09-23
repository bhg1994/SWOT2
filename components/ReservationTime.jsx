import { Table } from "antd";

const { Column } = Table;

const ReservationTime = ({ value }) => {
  const morning = [
    "00시",
    "01시",
    "02시",
    "03시",
    "04시",
    "05시",
    "06시",
    "07시",
    "08시",
    "09시",
    "10시",
    "11시"
  ];
  const afternoon = [
    "12시",
    "13시",
    "14시",
    "15시",
    "16시",
    "17시",
    "18시",
    "19시",
    "20시",
    "21시",
    "22시",
    "23시"
  ];

  const moringData = [
    {
      key: "moringData",
      0: "예약불가",
      1: "예약불가",
      2: "예약불가",
      3: "예약불가",
      4: "예약불가",
      5: "예약불가",
      6: "예약불가",
      7: "예약불가",
      8: "예약불가",
      9: "예약가능",
      10: "예약가능",
      11: "예약 중"
    }
  ];
  const AfternoonData = [
    {
      key: "moringData",
      0: "예약 중",
      1: "예약 중",
      2: "예약가능",
      3: "예약가능",
      4: "예약가능",
      5: "예약 중",
      6: "예약 중",
      7: "예약 중",
      8: "예약 중",
      9: "예약가능",
      10: "예약불가",
      11: "예약불가"
    }
  ];
  return (
    <>
      <Table dataSource={moringData} pagination={false}>
        {value
          ? morning.map((time, i) => (
              <Column title={time} dataIndex={i} key={i} />
            ))
          : ""}
      </Table>
      <Table dataSource={AfternoonData} pagination={false}>
        {value
          ? afternoon.map((time, i) => (
              <Column title={time} dataIndex={i} key={i} />
            ))
          : ""}
      </Table>
    </>
  );
};

export default ReservationTime;
