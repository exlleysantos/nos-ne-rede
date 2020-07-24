import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Row, Col, Card, Button, Modal, InputGroup, Form, FormControl } from 'react-bootstrap';

import logo from '../../assets/logo.svg';


export default function Dashboard() {
  const [show, setShow] = useState(false);
  const [contents, setContents] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    api.get('contents').then(response => setContents(response.data))
  });

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
            <Col sm={{span: 10}}>
            <InputGroup>
                <FormControl
                    placeholder="Buscar Postagem"
                />
                
                <InputGroup.Append>
                  <Button></Button>
                </InputGroup.Append>
            </InputGroup>
            </Col>
            <Col sm={{span: 15}}>
              <Button onClick={handleShow}>Criar Postagem</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

    <Container fluid style={{ paddingBottom: '5px' }}>
      <Row className="justify-content-md-center">
      <Col md={2}>
          <Card>
            <Card.Body>
              <ul>
                <li>
                  <a href='#'>Fóruns</a>
                </li>
                <li>
                  <a href='#'>Aulas</a>
                </li>
                <li>
                  <a href='#'>Arquivos</a>
                </li>
                <li>
                  <a href='#'>Atividades</a>
                </li>
              </ul>
              <Card.Title style={{ padding: '10px' }}></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <ul style={{padding:'50px', color: '#000'}}>
                  {contents.map(content => (
                  <li style={{padding: '20px'}} key={content.id} >
                      <strong>{content.title}</strong>
                      <p>{content.description}</p>
                      <p>Marcador: {content.type === "content" ? "Conteúdo" : "Outro"}</p>
                  </li>
                  ))}
                </ul>
              <Card.Title style={{ padding: '20px' }}></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Body>
            <ul>
                <li>
                  <strong><a href='#'>Usuário 1</a></strong>
                  <p>Status: online</p>
                </li>
                <li>
                  <strong><a href='#'>Usuário 2</a></strong>
                  <p>Status: online</p>
                </li>
                <li>
                  <strong><a href='#'>Usuário 3</a></strong>
                  <p>Status: online</p>
                </li>
              </ul>
              <Card.Title style={{ padding: '10px' }}></Card.Title>
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
              <Col sm={{span: 10, offset: 1}} >
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

            <Form.Group as={Row} controlId="formHorizontalFoto">
            <Col sm={{span: 10, offset: 1}}>
                    <h6 style={{ textAlign: 'left', color: '#565656' }}>Escolher Arquivo</h6>
                    <input type="file" style={{ width: '100%', margin: '0px auto 0', background: '#fff', border: '1px solid #ddd' }} />
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

