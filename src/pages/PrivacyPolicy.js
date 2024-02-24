import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="mt-3 mb-5 justify-content-between">
        <Button
          variant="light"
          style={{ width: "45px", display: "inline" }}
          onClick={() => navigate(-1)}
        >
          <ArrowBack />
        </Button>

        <img
          style={{ width: "200px" }}
          src="/images/snapframe-logo.svg"
          height="30px"
          alt="logo"
        />
        <div style={{ width: "1px" }}> .</div>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Privacy Policy </h2>
          <ul className="m-4">
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Information Collection:</h4> SnapFrame collects user-provided
              information during the registration process, including but not
              limited to username, email address, and profile picture. We also
              collect information about uploaded photos and user interactions
              with the platform.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Information Usage:</h4> The information collected is used to
              personalize user experience, improve our services, and communicate
              with users. We may also use aggregated and anonymized data for
              analytical purposes.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Information Sharing:</h4> SnapFrame respects your privacy. We
              do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent. However, we may
              share anonymized data for marketing, advertising, or analytical
              purposes.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Cookies and Privacy:</h4> Snapframe uses cookies and similar
              technologies to enhance user experience, analyze usage patterns,
              and deliver targeted advertisements. Users can control cookie
              preferences through their browser settings.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Security Measures:</h4> We take reasonable measures to protect
              the confidentiality and security of user information. However, no
              method of transmission over the internet or electronic storage is
              100% secure.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>User Control:</h4> SnapFrame provides users with the ability
              to update, correct, or delete their account information. Users can
              manage their privacy settings to control who can view their photos
              and profile information.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Compliance:</h4> SnapFrame operates in compliance with
              applicable data protection laws and regulations. Users have the
              right to lodge a complaint with the relevant supervisory
              authority.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Contact:</h4> For any questions or concerns regarding privacy,
              please contact us at{" "}
              <a href="mailto:yaduvansi524@gmail.com">yaduvansi524@gmail.com</a>
              .
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
