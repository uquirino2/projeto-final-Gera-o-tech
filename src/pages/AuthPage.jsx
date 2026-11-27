import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import './AuxPages.css';

function AuthPage({ mode = 'login' }) {
  const isRegister = mode === 'register';
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = isRegister
      ? 'Digital Store | Cadastre-se'
      : 'Digital Store | Entrar';
  }, [isRegister]);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <div className="auth-wrapper">
        <div className="container auth-container">
          <div className="auth-card">
            <h1 className="auth-title">
              {isRegister ? 'Crie sua conta' : 'Acesse sua conta'}
            </h1>
            <p className="auth-subtitle">
              {isRegister ? (
                <>
                  Já possui uma conta? <Link to="/login">Entrar aqui</Link>.
                </>
              ) : (
                <>
                  Novo cliente? Então registre-se <Link to="/cadastro">aqui</Link>.
                </>
              )}
            </p>

            <form className="auth-form" onSubmit={handleSubmit}>
              {isRegister && (
                <div className="auth-field">
                  <label htmlFor="auth-name">Nome completo *</label>
                  <input
                    id="auth-name"
                    type="text"
                    placeholder="Insira seu nome"
                    required
                  />
                </div>
              )}

              <div className="auth-field">
                <label htmlFor="auth-email">E-mail *</label>
                <input
                  id="auth-email"
                  type="email"
                  placeholder="Insira seu e-mail"
                  required
                />
              </div>

              <div className="auth-field">
                <label htmlFor="auth-password">Senha *</label>
                <input
                  id="auth-password"
                  type="password"
                  placeholder="Insira sua senha"
                  required
                />
              </div>

              <button type="submit" className="auth-submit">
                {isRegister ? 'Criar Conta' : 'Acessar Conta'}
              </button>

              {submitted && (
                <p className="auth-feedback">
                  {isRegister
                    ? 'Cadastro enviado com sucesso.'
                    : 'Login realizado com sucesso.'}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AuthPage;
