import { css } from '@emotion/react';

const background = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: 'gray',
});

export const Background = ({ children }: any) => {
  return <div css={background}>{children}</div>;
};
