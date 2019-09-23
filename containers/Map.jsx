import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "500px",
  height: "400px"
};

const KaKaoMap = () => {
  return (
    <>
      <div>
        <Map
          google={google}
          zoom={17.9}
          style={mapStyles}
          initialCenter={{ lat: 37.487428, lng: 126.82561 }}
        />
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAmUqfOQh_jAk-qRLptkuFP-exaXlUX4o0"
})(KaKaoMap);
