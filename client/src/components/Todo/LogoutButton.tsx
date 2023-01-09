import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  return (
    <button
      css={(Theme) => ({
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        padding: '6px',
        backgroundColor: Theme.colors.secondary,
        borderRadius: '5px',
      })}
      onClick={clickHandler}
    >
      Logout
    </button>
  );
};
