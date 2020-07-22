import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import { login } from "../../services/auth";

class Login extends Component {

  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };
  render () {
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
                  <h3>Seja bem-vind@</h3>
                  <h5 style={{ color: '#565656' }}>ao #EntreNósNaRede</h5>
                </Card.Text>
                <Form  onSubmit={this.handleSignIn} style={{ padding: '10px' }}>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={{span: 8, offset: 2}}>
                      {this.state.error && <p>{this.state.error}</p>} 
                      <Form.Control type="email" placeholder="E-mail" onChange={e => this.setState({ email: e.target.value })} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Col sm={{span: 8, offset: 2}}>
                      <Form.Control type="password" placeholder="Senha" onChange={e => this.setState({ password: e.target.value })} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} style={{ padding: '10px' }}>
                    <Col sm={{span: 8, offset: 2}}>
                    <Button type="submit" size="md" block>Entrar</Button>
                    <Link to="/dashboard"></Link>
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
  }

export default withRouter(Login);
