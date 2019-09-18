import { Result, Button } from 'antd';

const SuccessResult = () => {
    <Result
    status="success"
    title="예약 신청이 완료 되었습니다."
    subTitle="예약 현황은 마이페이지에서 확인할 수 있으며 3일 내에 처리가 완료될 예정입니다."
    extra={[
      <Button type="primary" key="OK">
        OK
      </Button>
    ]}
  />
}
 
export default SuccessResult;