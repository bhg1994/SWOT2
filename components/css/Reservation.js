import styled, { keyframes } from 'styled-components';




export const GuideFade = keyframes`
   0% {
    opacity: .9;
  }
  50% {
    opacity: .2;
  }

  100%{
      opacity: .7;
  }
`;

export const ReservationWrapper = styled.div`
    text-align:center;
`

export const ReservationGuide = styled.div`
  margin-top: 20px;
  font-size: 30px;
  animation: ${GuideFade} 2s linear infinite;
`;

export const MapWrapper = styled.div`
    margin-right:10px;
    border-radius:4px;
    margin:auto;
    width:600px;
    height:400px;
    box-shadow: 5px 5px 5px 5px gray;
`