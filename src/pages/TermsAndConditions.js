import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router-dom

const TermsAndConditions = () => {
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
        <Col md={12} className="mx-auto">
          <h2 className="text-center mb-4">Terms and Conditions</h2>
          <ListGroup>
            <ListGroup.Item>
              <strong>User Agreement:</strong> By using SnapFrame, you agree to
              comply with these Terms and Conditions. If you do not agree,
              please do not use the application.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>User Responsibilities:</strong> Users are responsible for
              the content they post on SnapFrame. Content must be legal,
              non-offensive, and not infringe on intellectual property rights.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Intellectual Property:</strong> Users retain the rights to
              their uploaded content but grant SnapFrame a license to use,
              display, and distribute the content on the platform.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Prohibited Content:</strong> Explicit, violent, or illegal
              content is strictly prohibited on SnapFrame. Users violating this
              rule may have their accounts terminated.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Account Security:</strong> Users are responsible for
              maintaining the confidentiality of their account credentials.
              SnapFrame is not liable for any unauthorized activities conducted
              using user accounts.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Termination of Accounts:</strong> SnapFrame reserves the
              right to terminate accounts for violations of these Terms and
              Conditions or for any reason at our discretion.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Website Changes:</strong> SnapFrame may make changes to
              the platform, features, or terms at any time. Users will be
              notified of significant changes.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Limitation of Liability:</strong> SnapFrame is not liable
              for any damages incurred while using the platform. Users use the
              platform at their own risk.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Governing Law:</strong> These Terms and Conditions are
              governed by and construed in accordance with the laws of [your
              jurisdiction].
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Contact:</strong> For any questions or concerns regarding
              the Terms and Conditions, please contact us at{" "}
              <a href="mailto:yaduvansi524@gmail.com">yaduvansi524@gmail.com</a>
              .
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsAndConditions;
