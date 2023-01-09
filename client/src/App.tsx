import { Login } from 'components/Login';
import { Background } from 'components/Background';
import { Todo } from 'components/Todo';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const getToken: any = localStorage.getItem('token');
  const userToken = JSON.parse(getToken);
  console.log(getToken, userToken);

  return (
    <Background>
      <Routes>
        <Route path="/" element={userToken ? <Todo /> : <Login />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </Background>
  );
};

export default App;
