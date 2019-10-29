import { Table } from "antd";
import { ReservationTimeWrapper, Hoursofuse, Availabletime, SelecttimeWrapper, SelecttimeBtn } from '../components/css/ReservationTime';
const { Column } = Table;

const data =[
  {
    "roomId": 1,
    "userId": 1,
    "reson" : "study",
    "phone" : "010",
    "startTime" : "12",
    "endTime" : "15",
    "reservationDate" : 2019-12-11,
    "state":'C',
    "createdDate": "2019-10-05T08:08:49.000+0000", 
    "updatedDate": "2019-10-05T08:08:49.000+0000"
  },
  {
    "roomId": 1,
    "userId": 1,
    "reson" : "study",
    "phone" : "010",
    "startTime" : "16",
    "endTime" : "17",
    "reservationDate" : 2019-12-11,
    "state":'C',
    "createdDate": "2019-10-05T08:08:49.000+0000", 
    "updatedDate": "2019-10-05T08:08:49.000+0000"
  }

] 


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
  
  var justClickedId ="";
  var startId = "";
  var beforeId = "";


  const onClick = (e) => {
    console.log(e.target.id);
    let element = document.getElementById(e.target.id);

    if(startId===""){
      startId = e.target.id;
      element.style.backgroundColor="black";
      beforeId = e.target.id;
      return;
    }
    justClickedId=e.target.id;

    if(startId===justClickedId){
      oninit();
      return;
    }

    if(parseInt(beforeId)-parseInt(justClickedId)===-1||parseInt(beforeId)-parseInt(justClickedId)===0){
      if(element.style.backgroundColor!="black"){
        element.style.backgroundColor="black";
        beforeId = e.target.id;
      }
      else{
        element.style.backgroundColor="white";
        beforeId = String(parseInt(justClickedId)-1);
        console.log(beforeId);
      }
    }
    
    
  };
  const oninit = () => {
    for(let i=8; i<22; i++){
      document.getElementById(i).style.backgroundColor="white";
    }
    justClickedId = "";
    startId = "";
    disable();
  };

  const disable = () => {
    for(let i=0; i< data.length; i++){

      let length = parseInt(data[i].endTime)-parseInt(data[i].startTime)
      for(let j =0; j<length; j++){
        let index = parseInt(data[i].startTime) + j;
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
