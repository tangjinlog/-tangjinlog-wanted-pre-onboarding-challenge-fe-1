import { loginBtn } from 'types/login';

export const LoginButton = ({ value }: loginBtn) => {
  return (
    <button
      css={{
        padding: '6px 6px',
        background: 'gray',
        width: '100%',
      }}
    >
      {value}
    </button>
  );
};
