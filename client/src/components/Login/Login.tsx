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
  const [isError, setIsError] = useState<boolean>(false);
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
      if (res.status === 200) {
        setIsError(false);
        const data = await res.json();
        alert(data.message);
        localStorage.setItem('token', JSON.stringify(data.token));
        navigate('/');
      } else {
        setIsError(true);
      }
    } catch (err) {
      alert(`err: ${err}`);
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
      if (res.status === 200) {
        setIsError(false);
        const data = await res.json();
        alert(data.message);
        localStorage.setItem('token', JSON.stringify(data.token));
        navigate('/');
      }
    } catch (err) {
      setIsError(true);
      alert(`err: ${err}`);
    }
  };

  const ErrorMsg = () => {
    return (
      <p
        css={{
          position: 'absolute',
          bottom: '7rem',
          marginTop: '1rem',
          fontSize: '12px',
          color: 'red',
        }}
      >
        이메일 또는 비밀번호를 확인해주세요
      </p>
    );
  };

  return (
    <div css={formCon}>
      {isUser ? (
        <form css={form} onSubmit={userLoginHandler}>
          <LoginFormTitle title="로그인" />
          <LoginInput innerRef={emailRef} type="email" placeholder="Email" />
          <LoginInput
            innerRef={passwordRef}
            type="password"
            placeholder="Password"
          />
          <LoginButton value="시작하기" />
          <SignUpButton isUser={isUser} setIsUser={setIsUser} value="Sign up" />
          {isError ? <ErrorMsg /> : null}
        </form>
      ) : (
        <form css={form} onSubmit={signUpHandler}>
          <LoginFormTitle title="회원가입" />
          <LoginInput innerRef={emailRef} type="email" placeholder="Email" />
          <LoginInput
            innerRef={passwordRef}
            type="password"
            placeholder="Password"
          />
          <LoginButton value="등록" />
          <SignUpButton isUser={isUser} setIsUser={setIsUser} value="Sign in" />
        </form>
      )}
    </div>
  );
};
