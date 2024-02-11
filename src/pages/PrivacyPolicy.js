import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <Container className="mt-5">
      <Row style={{ justifyContent: "flex-start" }}>
        <Button
          variant="light"
          className="mt-3"
          style={{ width: "45px" }}
          onClick={() => navigate(-1)}
        >
          <ArrowBack />
        </Button>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Privacy Policy</h2>
          <ListGroup>
            <ListGroup.Item>
              <strong>Information Collection:</strong> SnapFrame collects
              user-provided information during the registration process,
              including but not limited to username, email address, and profile
              picture. We also collect information about uploaded photos and
              user interactions with the platform.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Information Usage:</strong> The information collected is
              used to personalize user experience, improve our services, and
              communicate with users. We may also use aggregated and anonymized
              data for analytical purposes.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Information Sharing:</strong> SnapFrame respects your
              privacy. We do not sell, trade, or otherwise transfer your
              personal information to third parties without your consent.
              However, we may share anonymized data for marketing, advertising,
              or analytical purposes.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Cookies and Privacy:</strong> Snapframe uses cookies and
              similar technologies to enhance user experience, analyze usage
              patterns, and deliver targeted advertisements. Users can control
              cookie preferences through their browser settings.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Security Measures:</strong> We take reasonable measures to
              protect the confidentiality and security of user information.
              However, no method of transmission over the internet or electronic
              storage is 100% secure.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>User Control:</strong> SnapFrame provides users with the
              ability to update, correct, or delete their account information.
              Users can manage their privacy settings to control who can view
              their photos and profile information.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Compliance:</strong> SnapFrame operates in compliance with
              applicable data protection laws and regulations. Users have the
              right to lodge a complaint with the relevant supervisory
              authority.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Contact:</strong> For any questions or concerns regarding
              privacy, please contact us at{" "}
              <a href="mailto:yaduvansi524@gmail.com">yaduvansi524@gmail.com</a>
              .
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
