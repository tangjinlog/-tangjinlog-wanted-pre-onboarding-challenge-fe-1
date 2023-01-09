import { setState } from 'types/login';

export const SignUpButton = ({ setIsUser }: setState) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsUser(false);
  };

  return (
    <button
      css={{
        position: 'absolute',
        bottom: '2rem',
        color: 'rgba(0,0,0,0.5)',
      }}
      onClick={clickHandler}
    >
      Sign up
    </button>
  );
};
