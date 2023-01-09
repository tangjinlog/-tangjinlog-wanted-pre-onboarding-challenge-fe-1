import { loginTitle } from 'types/login';

export const LoginFormTitle = ({ title }: loginTitle) => {
  return (
    <h2
      css={(theme) => ({
        position: 'absolute',
        top: '10vh',
        fontSize: theme.fontSizes.lg,
      })}
    >
      {title}
    </h2>
  );
};
