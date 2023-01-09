import { LogoutButton } from './LogoutButton';
import { useNavigate } from 'react-router-dom';

export const Todo = () => {
  const navigate = useNavigate();
  const getToken: any = localStorage.getItem('token');
  const parseToken = JSON.parse(getToken);
  console.log(parseToken);
  if (!getToken) navigate('/auth');

  return (
    <div>
      <LogoutButton />
      <h1>Todo!!</h1>
    </div>
  );
};
