export const LoginFormTitle = () => {
  return (
    <h2
      css={(theme) => ({
        position: 'absolute',
        top: '10vh',
        fontSize: theme.fontSizes.lg,
      })}
    >
      로그인
    </h2>
  );
};
