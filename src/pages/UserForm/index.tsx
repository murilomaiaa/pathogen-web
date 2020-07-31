import React, { useCallback, useState, FormEvent } from 'react';

import { Link } from 'react-router-dom';
import { Container, Form } from './styles';
// import Input from '../../Components/Input';
import Header from '../../Components/Header';

const UserForm: React.FC = () => {
  const [nameField, setNameField] = useState('');

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('data');
  }, []);
  return (
    <>
      <Header />
      <Container className="container">
        <h1>Antes de tudo gostaríamos de fazer algumas perguntas</h1>

        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-sm-6">
              <input
                value={nameField}
                onChange={e => setNameField(e.target.value)}
                name="name"
                className="form-control"
                type="text"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="form-group col-sm-6">
              <select className="form-control" id="isSick">
                <option value="" disabled selected>
                  Você foi diagnosticado com covid?
                </option>
                <option value="true">Sim, fui diagnosticado</option>
                <option value="false">Não, apenas suspeita</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-sm-6">
              <select className="form-control" id="isSick">
                <option disabled selected value="">
                  Informe seu sexo
                </option>
                <option value="M">Homem</option>
                <option value="F">Mulher</option>
                <option value="O">Outros/prefiro não ddizer</option>
              </select>
            </div>
            <div className="form-group col-sm-6">
              <input
                name="age"
                className="form-control"
                type="text"
                placeholder="Digite sua idade"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu email"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                É por meio dele que enviaremos o resultado
              </small>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <Link to="/questions">
                <button type="submit" className="btn btn-primary">
                  Responder formulário
                </button>
              </Link>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default UserForm;
