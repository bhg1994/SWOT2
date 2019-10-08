import { Table } from "antd";

const { Column } = Table;

const ReservationTime = ({ value }) => {
  const morning = [
    "00-01시",
    "01-02시",
    "02-03시",
    "03-04시",
    "04-05시",
    "05-06시",
    "06-07시",
    "07-08시",
    "08-09시",
    "09-10시",
    "10-11시",
    "11-12시"
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
      11: "예약가능",
    }
  ];
  const AfternoonData = [
    {
      key: "moringData",
      0: "예약불가",
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
      11: "예약가능",
    }
  ];
  return (
    <>
      <Table dataSource={moringData} pagination={false} bordered={true} useFixedHeader={true}>
        {value
          ? morning.map((time, i) => (
              <Column title={time} dataIndex={i} key={i} align="center"/>
            ))
          : ""}
      </Table>
      <Table dataSource={AfternoonData} pagination={false} bordered={true} useFixedHeader={true}>
        {value
          ? afternoon.map((time, i) => (
              <Column title={time} dataIndex={i} key={i} align="center" />
            ))
          : ""}
      </Table>
    </>
  );
};

export default ReservationTime;
