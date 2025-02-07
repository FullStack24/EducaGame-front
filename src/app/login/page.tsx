'use client';

import Input from '@/globalComponents/input';
import { Container, Form, Buttons } from './page.styles';
import PageTitle from '@/globalComponents/page-title';
import Button from '@/globalComponents/button';
import LogoWithLabel from '@/globalComponents/logo-with-label';
import { useState } from 'react';
import login from '@/services/login';
import register from '@/services/register';
import LabelLink from '@/globalComponents/label-link';
import Select from '@/globalComponents/select';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth';
import getUserInfo from '@/services/get-user-info';

type page = 'login' | 'register';
export default function Login() {
  const [page, setPage] = useState<page>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'admin' | 'aluno' | 'professor'>('aluno');
  const router = useRouter();
  const auth = useAuth();

  async function goToHome() {
    router.push('/');
  }

  async function handleLogin() {
    await login(email, password);
    const user = await getUserInfo();
    auth.saveUserInfo(user);
    goToHome();
  }

  async function handleRegister() {
    await register({ email, name, role, password });
    setPage('login');
  }

  const isLoginPage = page === 'login';
  const isRegisterPage = page === 'register';

  return (
    <Container>
      <LogoWithLabel />
      {isRegisterPage && <PageTitle label="Novo usuário" />}
      <Form>
        {isLoginPage && (
          <>
            <Input
              value={email}
              setValue={setEmail}
              type="text"
              label="Email"
              placeholder="digite seu email"
            />
            <Input
              value={password}
              setValue={setPassword}
              type="password"
              label="Senha"
              placeholder="digite sua senha"
            />
            <Buttons>
              <Button label="Entrar" type="green" onClick={handleLogin} />
            </Buttons>
            <LabelLink
              label="Não possui conta? Cadastre-se aqui."
              onClick={() => setPage('register')}
            />
          </>
        )}
        {isRegisterPage && (
          <>
            <Input
              value={name}
              setValue={setName}
              type="text"
              label="Nome"
              placeholder="digite seu nome"
            />
            <Input
              value={email}
              setValue={setEmail}
              type="text"
              label="Email"
              placeholder="digite seu email"
            />
            <Input
              value={password}
              setValue={setPassword}
              type="password"
              label="Senha"
              placeholder="digite sua senha"
            />
            <Select
              value={role}
              options={[
                { value: 'professor', name: 'Professor' },
                { value: 'aluno', name: 'Aluno' },
              ]}
              onChange={setRole}
            />
            <Buttons>
              <Button label="Cadastrar" type="green" onClick={handleRegister} />
            </Buttons>
            <LabelLink
              label="Já possui conta? Faça login aqui."
              onClick={() => setPage('login')}
            />
          </>
        )}
      </Form>
    </Container>
  );
}
