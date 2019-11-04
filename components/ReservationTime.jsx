import { Table } from "antd";
import { ReservationTimeWrapper, Hoursofuse, Availabletime, SelecttimeWrapper, SelecttimeBtn } from '../components/css/ReservationTime';
import { useDispatch, useSelector } from "react-redux";
import { START_TIME_SELECT, END_TIME_SELECT } from "../reducers/room";
import { useEffect, useState } from "react";
const { Column } = Table;




var justClickedId ="";


  var startId = "";
  var beforeId = "";


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


  const dispatch = useDispatch();
  const { roomReservations } = useSelector(state => state.room);
  const { date } = useSelector(state => state.room);
  var reservations = [];


  
  
  

  useEffect(() => {
    if(value){
      oninit();
    }
  }, [value])
  useEffect(() => {
    
    roomReservations.forEach(reservation => {
      if(reservation.reservationDate===date){
        reservations.push(reservation);
      }
    });
    console.log(reservations);

    if(value){
      //oninit();
      console.log("after list")
    }
  }, [roomReservations])


  const onClick = (e) => {
    console.log(e.target.id);
    let element = document.getElementById(e.target.id);

    if (startId === "") {
      startId = e.target.id;
      element.style.backgroundColor = "black";
      beforeId = e.target.id;
      dispatch({
        type: START_TIME_SELECT,
        data: startId,
      });
      dispatch({
        type: END_TIME_SELECT,
        data: String(parseInt(startId)+1),
      });
      return;
    }
    justClickedId = e.target.id;

    if (startId === justClickedId) {
      oninit();
      return;
    }

    if (parseInt(beforeId) - parseInt(justClickedId) === -1 || parseInt(beforeId) - parseInt(justClickedId) === 0) {
      if(parseInt(justClickedId) - parseInt(startId) < 5 ){
        if (element.style.backgroundColor != "black") {
          element.style.backgroundColor = "black";
          beforeId = e.target.id;
          dispatch({
            type: END_TIME_SELECT,
            data: String(parseInt(beforeId)+1),
          });
        }
        else {
          element.style.backgroundColor = "white";
          beforeId = String(parseInt(justClickedId) - 1);
          console.log(beforeId);
          dispatch({
            type: END_TIME_SELECT,
            data: String(parseInt(beforeId)+1),
          });
        }
      }
      
    }


  };
  const oninit = () => {
    for (let i = 8; i < 22; i++) {
      document.getElementById(i).style.backgroundColor = "white";
      document.getElementById(i).disabled = false;
    }
    justClickedId = "";
    startId = "";
    dispatch({
      type: START_TIME_SELECT,
      data: "",
    });
    dispatch({
      type: END_TIME_SELECT,
      data: "",
    });
    disable();
  };

  const disable = () => {
    for (let i = 0; i < reservations.length; i++) {

      let length = parseInt(reservations[i].endTime) - parseInt(reservations[i].startTime)
      for (let j = 0; j < length; j++) {
        let index = parseInt(reservations[i].startTime) + j;
        document.getElementById(index).disabled = true;
        console.log(index);
      }

    }

  }
  


  return (
    <>
      {value ?
        <ReservationTimeWrapper>
          <Hoursofuse>이용시간</Hoursofuse>
          <Availabletime>최대 5시간 이용가능</Availabletime>

          <button onClick={oninit}>init</button>
          <SelecttimeWrapper>
            {times.map((time, i) => (i < 8 || i > 21) ? (<SelecttimeBtn type="danger" disabled>{time}</SelecttimeBtn>) : (<SelecttimeBtn type="danger" onClick={onClick}  id={i}>{time}</SelecttimeBtn>))}   
          </SelecttimeWrapper>
        </ReservationTimeWrapper>
        : ""}
    </>
  );
};

export default ReservationTime;
