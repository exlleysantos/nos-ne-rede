import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, InputGroup, Form, FormControl } from 'react-bootstrap';

import logo from '../../assets/logo.svg';

function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Container fluid style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <Row className="justify-content-md-center">
        <Col md={8}>
          
          <Row style={{ paddingBottom: '20px' }}>
            <Col style={{ paddingBottom: '20px', textAlign: 'center' }}>
            <img src={logo} alt="Logo"/>
            </Col>
          </Row>
            
          <Row>
            <Col sm={{span: 12}}>
            <InputGroup>
                <FormControl
                    placeholder="Buscar Postagem"
                />
                
                <InputGroup.Append>
                  <Button></Button>
                </InputGroup.Append>
            </InputGroup>
            </Col>
            <Col sm={{span: 3}}>
              <Button onClick={handleShow}>Criar Postagem</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

    <Container fluid style={{ paddingBottom: '5px' }}>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
          <Card.Body >
            <Card.Title style={{ padding: '20px' }} >
              <img src={logo} alt="Logo"/>
            </Card.Title>
          </Card.Body>  
          </Card>
        </Col>
      </Row>
    </Container>

    <Container fluid style={{ paddingBottom: '5px' }}>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
          <Card.Body>
            <Card.Title style={{ padding: '20px' }} >
              <img src={logo} alt="Logo"/>
            </Card.Title>
          </Card.Body>  
          </Card>
        </Col>
      </Row>
    </Container>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Postagem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formHorizontalTipo">
              <Col sm={{span: 10, offset: 1}}>
                <Form.Control as="select">
                  <option>Conteúdo</option>
                  <option>Atividade</option>
                  <option>Arquivo</option>
                  <option>Curso</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalTitulo">
              <Col sm={{span: 10, offset: 1}}>
                <Form.Control type="text" placeholder="Título" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalDescricao">
              <Col sm={{span: 10, offset: 1}}>
                <Form.Control as="textarea" placeholder="Descrição" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={{ padding: '10px' }}>
              <Col sm={{span: 10, offset: 1}}>
                <Button type="submit" size="md" block>Criar</Button>
              </Col>
            </Form.Group>
          </Form>

        </Modal.Body>
      </Modal>
    </>    
  );
}

export default Dashboard;
