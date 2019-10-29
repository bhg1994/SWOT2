import { Table } from "antd";
import { ReservationTimeWrapper, Hoursofuse, Availabletime, SelecttimeWrapper, SelecttimeBtn } from '../components/css/ReservationTime';
const { Column } = Table;

const ReservationTime = ({ value }) => {
  const times = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];



  const onClickBtn = (e) => {
    let element = document.getElementById(e.target.id);
    console.log(element);
    let prevelement = document.getElementById(e.target.id - 1);

    prevelement.style.backgroundColor = "black";

    // console.log(element);
  }

  return (
    <>
      {value ?
        <ReservationTimeWrapper>
          <Hoursofuse>이용시간</Hoursofuse>
          <Availabletime>최대 5시간 이용가능</Availabletime>
          <SelecttimeWrapper >
            {times.map((time, i) => (i < 8 || i > 21) ? (<SelecttimeBtn type="danger" disabled>{time}</SelecttimeBtn>) : (<SelecttimeBtn id={i} type="danger" onClick={onClickBtn}>{time}</SelecttimeBtn>))}
          </SelecttimeWrapper>
        </ReservationTimeWrapper>
        : ""}
    </>
  );
};

export default ReservationTime;
