import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const WeatherCard = ({ location }) => {
  return (
    <div className="vh-100">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: "150px", borderRadius: "20px" }}
                      src={location.condition.icon}
                      alt="Generic placeholder image"
                      fluid
                    />
                  </div>
                  <div
                    className="flex-grow-1 ms-3"
                    style={{ marginLeft: "15px" }}
                  >
                    <MDBCardTitle>{location.temp_f} F°</MDBCardTitle>
                    <MDBCardText>{location.temp_c} C°</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                      <div>
                        <p className="small text-muted mb-1">Feels Like</p>
                        <p className="mb-0">{location.feelslike_f} F°</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Condition</p>
                        <p className="mb-0">{location.condition.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default WeatherCard;
