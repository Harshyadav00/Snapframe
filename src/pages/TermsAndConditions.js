import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { Container, Row, Col, ul, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router-dom

const TermsAndConditions = () => {
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
        <Col md={12} className="mx-auto">
          <h2 className="text-center mb-4">Terms and Conditions</h2>
          <ul className="m-4">
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>User Agreement:</h4> By using SnapFrame, you agree to comply
              with these Terms and Conditions. If you do not agree, please do
              not use the application.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>User Responsibilities:</h4> Users are responsible for the
              content they post on SnapFrame. Content must be legal,
              non-offensive, and not infringe on intellectual property rights.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Intellectual Property:</h4> Users retain the rights to their
              uploaded content but grant SnapFrame a license to use, display,
              and distribute the content on the platform.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Prohibited Content:</h4> Explicit, violent, or illegal content
              is strictly prohibited on SnapFrame. Users violating this rule may
              have their accounts terminated.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Account Security:</h4> Users are responsible for maintaining
              the confidentiality of their account credentials. SnapFrame is not
              liable for any unauthorized activities conducted using user
              accounts.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Termination of Accounts:</h4> SnapFrame reserves the right to
              terminate accounts for violations of these Terms and Conditions or
              for any reason at our discretion.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Website Changes:</h4> SnapFrame may make changes to the
              platform, features, or terms at any time. Users will be notified
              of significant changes.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Limitation of Liability:</h4> SnapFrame is not liable for any
              damages incurred while using the platform. Users use the platform
              at their own risk.
            </li>
            <li style={{ margin: "1rem 0 1rem 0" }}>
              <h4>Contact:</h4> For any questions or concerns regarding the
              Terms and Conditions, please contact us at{" "}
              <a href="mailto:yaduvansi524@gmail.com">yaduvansi524@gmail.com</a>
              .
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsAndConditions;
