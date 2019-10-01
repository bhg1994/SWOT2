// 보류
// const columns = [
//   {
//     title: "시간",
//     width: 50,
//     dataIndex: "clock",
//     key: "clock"
//   },
//   {
//     title: "00",
//     width: 30,
//     dataIndex: "zero",
//     key: "zero"
//   },
//   {
//     title: "01",
//     width: 30,
//     dataIndex: "one",
//     key: "one"
//   },
//   {
//     title: "02",
//     width: 30,
//     dataIndex: "two",
//     key: "two"
//   },
//   {
//     title: "03",
//     width: 30,
//     dataIndex: "three",
//     key: "three"
//   },
//   {
//     title: "04",
//     width: 30,
//     dataIndex: "four",
//     key: "four"
//   },
//   {
//     title: "05",
//     width: 30,
//     dataIndex: "five",
//     key: "five"
//   },
//   {
//     title: "06",
//     width: 30,
//     dataIndex: "six",
//     key: "six"
//   },
//   {
//     title: "07",
//     width: 30,
//     dataIndex: "seven",
//     key: "seven"
//   },
//   {
//     title: "08",
//     width: 30,
//     dataIndex: "eight",
//     key: "eight"
//   },
//   {
//     title: "09",
//     width: 30,
//     dataIndex: "nine",
//     key: "nine"
//   },
//   {
//     title: "10",
//     width: 30,
//     dataIndex: "ten",
//     key: "ten"
//   },
//   {
//     title: "11",
//     width: 30,
//     dataIndex: "eleven",
//     key: "eleven"
//   },
//   {
//     title: "12",
//     width: 30,
//     dataIndex: "twelve",
//     key: "twelve"
//   },
//   {
//     title: "13",
//     width: 30,
//     dataIndex: "thirteen",
//     key: "thirteen"
//   },
//   {
//     title: "14",
//     width: 30,
//     dataIndex: "fourteen",
//     key: "fourteen"
//   },
//   {
//     title: "15",
//     width: 30,
//     dataIndex: "fifteen",
//     key: "fifteen"
//   },
//   {
//     title: "16",
//     width: 30,
//     dataIndex: "sixteen",
//     key: "sixteen"
//   },
//   {
//     title: "17",
//     width: 30,
//     dataIndex: "seventeen",
//     key: "seventeen"
//   },
//   {
//     title: "18",
//     width: 30,
//     dataIndex: "eighteen",
//     key: "eighteen"
//   },
//   {
//     title: "19",
//     width: 30,
//     dataIndex: "nineteen",
//     key: "nineteen"
//   },
//   {
//     title: "20",
//     width: 30,
//     dataIndex: "twenty",
//     key: "twenty"
//   },
//   {
//     title: "21",
//     width: 30,
//     dataIndex: "twenty_one",
//     key: "twenty_one"
//   },
//   {
//     title: "22",
//     width: 30,
//     dataIndex: "twenty_two",
//     key: "twenty_two"
//   },
//   {
//     title: "23",
//     width: 30,
//     dataIndex: "twenty_three",
//     key: "twenty_three"
//   }
// ];

const ReservationTable = () => {
  const columns = [
    "시  간",
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
    "11시",
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
  const columnList = columns.map((column, index) => (
    <div
      key={index}
      style={{
        margin: "0 auto",
        padding: "2px",
        borderRight: "1px solid gray",
        height: "30px"
      }}
    >
      {column}
    </div>
  ));
  return (
    <>
      <div
        style={{
          width: "1400px",
          height: "200px",
          border: "1px solid gray",
          borderWidth: "thin"
        }}
      >
        <div
          style={{
            height: "50px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid gray"
            }}
          >
            {columnList}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationTable;
