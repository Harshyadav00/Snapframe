import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { Button, Col, Container, Row } from "react-bootstrap";
import MediaContent from "../../components/MediaContent";
import { Settings } from "@mui/icons-material";

const UserDetails = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState(null);
  const [postList, setPostList] = useState(null);

  useEffect(() => {
    getUserData(id);
  }, []);

  const getUserData = async (userId) => {
    try {
      // setLoading(true);

      const response = await fetch(
        `http://localhost:8077/getUserDetailsByUserId?userId=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          const data = res;
          console.log(data);
          setUserDetails(data.userModel);
          setPostList(data.postsList);
        });

      // setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      // setLoading(false);
    }
  };

  return (
    <div>
      {userDetails ? (
        <div className="m-4 " style={{ paddingLeft: "4rem" }}>
          <Container>
            <Row className="m-3">
              <div className="d-flex align-items-center  col-sm-4 col-md-3">
                <img
                  src={
                    userDetails.avatar
                      ? userDetails.avatar
                      : // : "https://instagramclone210739-dev.s3.ap-south-1.amazonaws.com/default-user-image.jpg"
                        "/images/image-6.jpg"
                  }
                  style={{
                    width: "10rem",
                    height: "10rem",
                    textAlign: "center",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="col-sm-8 col-md-9">
                <div style={{ margin: "10px" }}>
                  <div>
                    <div
                      style={{
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      {userDetails.userName}
                    </div>
                    {userDetails.userId === user.userId && (
                      <Button variant="light" className="d-inline" size="sm">
                        <Settings /> Edit Profie
                      </Button>
                    )}
                    <div></div>
                  </div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      margin: "10px 0px 10px 0px",
                    }}
                  >
                    {userDetails.fullName}
                  </div>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      margin: "10px 0px 10px 0px",
                    }}
                  >
                    {userDetails.bio} bio
                  </div>
                </div>
              </div>
            </Row>
            <Row className="justify-content-start">
              <h1 className="mb-3">Posts</h1>
              {postList?.map((item) => (
                <Col className="d-flex justify-content-center align-items-center col-sm-6 col-md-4 ">
                  <MediaContent
                    src={item?.imageUrl}
                    type={item?.imageUrl
                      .split(/[#?]/)[0]
                      .split(".")
                      .pop()
                      .trim()}
                    height="15rem"
                    width="15rem"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserDetails;
