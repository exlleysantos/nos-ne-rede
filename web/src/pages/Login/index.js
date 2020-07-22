import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import logo from '../../assets/logo.svg';

function Login() {
  return (
    <Container fluid style={{ paddingTop: '50px' }}>
      <Row className="justify-content-md-center">
        <Col md={5}>
          <Card>
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title style={{ padding: '20px' }} >
                <img src={logo} alt="Logo"/>
              </Card.Title>
              <Card.Text style={{ padding: '10px' }}>
                <h3>Seja bem-vindo (a)</h3>
                <h5 style={{ color: '#565656' }}>ao #EntreNósNaRede</h5>
              </Card.Text>
              <Form style={{ padding: '10px' }}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Col sm={{span: 8, offset: 2}}>
                    <Form.Control type="email" placeholder="E-mail" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Col sm={{span: 8, offset: 2}}>
                    <Form.Control type="password" placeholder="Senha" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} style={{ padding: '10px' }}>
                  <Col sm={{span: 8, offset: 2}}>
                  <Link to="/dashboard">
                    <Button type="submit" size="md" block>Entrar</Button>
                  </Link>
                  </Col>
                </Form.Group>
              </Form>

              <Card.Text>
                  Não possui uma conta? <a href="/cadastro">Cadastre-se</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
