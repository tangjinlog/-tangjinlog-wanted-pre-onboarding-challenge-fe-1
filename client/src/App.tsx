import { Login } from 'components/Login';
import { Background } from 'components/Background';
import { Todo } from 'components/Todo';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </Background>
  );
};

export default App;
