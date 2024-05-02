
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';


function App() {

  return (
    <>
      <h1>Page App</h1>
      <NavBar/>
      <Outlet />
    </>
  );
}

export default App
