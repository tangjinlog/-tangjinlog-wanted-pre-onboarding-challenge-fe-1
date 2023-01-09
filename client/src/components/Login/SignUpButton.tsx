import { setState } from 'types/login';

export const SignUpButton = ({ isUser, setIsUser, value }: setState) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isUser ? setIsUser(false) : setIsUser(true);
    const target = e.currentTarget.parentNode;
    const ta: any = target?.querySelectorAll('input');
    const ta2 = [...ta].map((e) => (e.value = ''));
  };

  return (
    <button
      css={{
        position: 'absolute',
        bottom: '2rem',
        color: 'rgba(0,0,0,0.5)',
      }}
      type="reset"
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};
