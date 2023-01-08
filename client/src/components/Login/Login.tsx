import { css } from '@emotion/react';
import { LoginInput } from './LoginInput';
import { LoginFormTitle } from './LoginFormTitle';
import { LoginButton } from './LoginButton';
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
  return (
    <div css={formCon}>
      <form css={form}>
        <LoginFormTitle />
        <LoginInput type="email" placeholder="Email" />
        <LoginInput placeholder="Password" />
        <LoginButton />
      </form>
    </div>
  );
};
