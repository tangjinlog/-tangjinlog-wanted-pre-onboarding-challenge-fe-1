import { loginTitle } from '@/types/login';

export const LoginFormTitle = ({ title }: loginTitle) => {
  return (
    <h2
      css={(theme) => ({
        position: 'absolute',
        top: '20%',
        fontSize: theme.fontSizes.lg,
      })}
    >
      {title}
    </h2>
  );
};
