import { input } from '@/types/login';

export const LoginInput = ({ innerRef, type, placeholder }: input) => {
  return (
    <input
      css={{
        boxSizing: 'border-box',
        width: '100%',
        padding: '6px',
        margin: '0.25rem 0',
      }}
      ref={innerRef}
      type={type}
      placeholder={placeholder}
      minLength={8}
      required
    />
  );
};
