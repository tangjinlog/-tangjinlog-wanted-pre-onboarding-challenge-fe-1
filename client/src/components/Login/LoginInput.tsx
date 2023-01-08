export const LoginInput = ({ type = 'text', placeholder = 'id' }) => {
  return (
    <input
      css={{
        boxSizing: 'border-box',
        width: '100%',
        padding: '6px 6px',
        margin: '0.25rem 0',
      }}
      type={type}
      placeholder={placeholder}
      minLength={8}
      required
    />
  );
};
