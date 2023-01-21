export const Background = ({ children }: any) => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'gray',
      }}
    >
      {children}
    </div>
  );
};
