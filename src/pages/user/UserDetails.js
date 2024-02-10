import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { Button, Col, Container, Row } from "react-bootstrap";
import MediaContent from "../../components/MediaContent";

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
        <div>
          <Container>
            <Row>
              <Col xs={3}>
                <img
                  src={
                    userDetails.avatar
                      ? userDetails.avatar
                      : "https://instagramclone210739-dev.s3.ap-south-1.amazonaws.com/default-user-image.jpg"
                  }
                  style={{
                    width: "20vw",
                    height: "20vw",
                    margin: "30px",
                    textAlign: "center",
                  }}
                />
              </Col>
              <Col xs={9}>
                <div style={{ margin: "40px" }}>
                  <div>
                    <div
                      style={{
                        fontWeight: "400",
                        fontSize: "2vh",
                      }}
                    >
                      {userDetails.userName}
                    </div>
                    {userDetails.userId === user.userId && (
                      <Button variant="light" className="d-inline" size="sm">
                        Edit Profie
                      </Button>
                    )}
                    <div></div>
                  </div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "2vh",
                      margin: "10px 0px 10px 0px",
                    }}
                  >
                    {userDetails.fullName}
                  </div>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "1.7vh",
                      margin: "10px 0px 10px 0px",
                    }}
                  >
                    {userDetails.bio}
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <h1>Posts</h1>
              {postList?.map((item) => (
                <Col
                  md={4}
                  sm={2}
                  className="border d-flex justify-content-center align-items-center"
                >
                  <MediaContent
                    src={item?.imageUrl}
                    type={item?.imageUrl
                      .split(/[#?]/)[0]
                      .split(".")
                      .pop()
                      .trim()}
                    height="200px"
                    width="200px"
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
