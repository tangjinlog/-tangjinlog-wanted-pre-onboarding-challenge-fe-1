export const LoginButton = ({ value = 'button' }) => {
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
