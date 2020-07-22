import React from 'react';
import { Container, Row, Col, Card, Button, Form, FormControl, InputGroup, Alert } from 'react-bootstrap';

import logo from '../../assets/logo.svg';

function Cadastro() {
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
                <h2>Cadastro</h2>
              </Card.Text>
            
              <Form>

                <Card.Text style={{ padding: '10px' }}>
                    <h5 style={{ color: '#565656' }}>Dados pessoais</h5>
                </Card.Text>
              
                <Form.Group as={Row} controlId="formHorizontalNome">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="text" placeholder="Nome Completo" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalCPF">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="text" placeholder="CPF" />
                    <p style={{ marginBottom: '0px', textAlign: 'left', fontSize: '12px', color: '#565656' }}>* Essa informação não é visível para os outros usuários</p>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalNascimento">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="text" placeholder="Data de Nascimento" />
                    <p style={{ marginBottom: '0px', textAlign: 'left', fontSize: '12px', color: '#565656' }}>* Essa informação não é visível para os outros usuários</p>
                  </Col>
                </Form.Group>

                <Card.Text style={{ padding: '10px' }}>
                    <h5 style={{ color: '#565656' }}>Dados profissionais</h5>
                </Card.Text>

                <Form.Group as={Row} controlId="formHorizontalInstituicao">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="text" placeholder="Instituição de Trabalho" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalGrau">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="text" placeholder="Grau de Ensino" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalLattes">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="text" placeholder="Lattes (Opcional)" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalOcid">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="text" placeholder="Ocid (Opcional)" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalInteresses">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control as="textarea" placeholder="Interesses" />
                  </Col>
                </Form.Group>

                <Col sm={{span: 10, offset: 1}}>
                <h6 style={{ textAlign: 'left', color: '#565656' }}>Disciplinas que ministra</h6>
                <InputGroup>
                    <FormControl
                        placeholder="Nome da disciplina"
                    />
                    
                    <InputGroup.Append>
                        <Button>+</Button>
                    </InputGroup.Append>
                </InputGroup>

                <Alert style={{ marginTop: '8px', padding: '2px' }} variant='light'>
                    Você ainda não adicionou uma disciplina
                </Alert>
                </Col>


                <Card.Text style={{ padding: '10px' }}>
                    <h5 style={{ color: '#565656' }}>Dados da conta</h5>
                </Card.Text>
              
                <Form.Group as={Row} controlId="formHorizontalUser">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="text" placeholder="Nome de Usuário" />
                    <p style={{ marginBottom: '0px', textAlign: 'left', fontSize: '12px', color: '#565656' }}>* É através do seu nome de usuário que outros professores poderão te encontrar mais facilmente no portal.</p>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="email" placeholder="E-mail" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Col sm={{span: 10, offset: 1}}>
                    <Form.Control type="password" placeholder="Senha" />
                  </Col>
                </Form.Group>

                <Col sm={{span: 10, offset: 1}}>
                    <h6 style={{ textAlign: 'left', color: '#565656' }}>Foto do Perfil</h6>
                    <p style={{ marginBottom: '0px', textAlign: 'left', fontSize: '12px', color: '#565656' }}>* Escolha sua melhor foto para que os outros usuários vejam.</p>
                    <input type="file" style={{ width: '100%', margin: '0px auto 0', padding: '30px', background: '#fff', border: '1px solid #ddd' }} />
                </Col>

                <Form.Group as={Row} style={{ padding: '10px' }}>
                  <Col sm={{span: 10, offset: 1}}>
                    <Button type="submit" size="md" block>Cadastrar</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cadastro;
