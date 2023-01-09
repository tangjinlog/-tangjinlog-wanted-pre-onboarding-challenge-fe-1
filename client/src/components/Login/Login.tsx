import { css } from '@emotion/react';
import { LoginInput } from './LoginInput';
import { LoginFormTitle } from './LoginFormTitle';
import { LoginButton } from './LoginButton';
import { SignUpButton } from './SignUpButton';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formCon = css({
  display: 'flex',
  width: '300px',
  height: '400px',
  borderRadius: '8px',
  backgroundColor: '#fff',
});

const form = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '50px',
});

export const Login = () => {
  const [isUser, setIsUser] = useState<boolean>(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const userLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      const res = await fetch(`http://localhost:8080/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data.token);
      alert(data.message);
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/');
    } catch (e) {
      alert(`err: ${e}`);
    }
  };

  const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      const res = await fetch(`http://localhost:8080/users/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      alert(data.message);
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/');
    } catch (e) {
      alert(`err: ${e}`);
    }
  };

  return (
    <div css={formCon}>
      {isUser ? (
        <form css={form} onSubmit={userLoginHandler}>
          <LoginFormTitle />
          <LoginInput innerRef={emailRef} type="email" placeholder="Email" />
          <LoginInput
            innerRef={passwordRef}
            type="password"
            placeholder="Password"
          />
          <LoginButton />
          <SignUpButton setIsUser={setIsUser} />
        </form>
      ) : (
        <form css={form} onSubmit={signUpHandler}>
          <LoginFormTitle />
          <LoginInput innerRef={emailRef} type="email" placeholder="Email" />
          <LoginInput
            innerRef={passwordRef}
            type="password"
            placeholder="Password"
          />
          <LoginButton value={'회원가입'} />
        </form>
      )}
    </div>
  );
};
