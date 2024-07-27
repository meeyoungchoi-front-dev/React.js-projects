import logo from './logo.svg';
import './App.css';
import Layout from "../src/components/Layout";
import Home from "../src/pages/Home";
import Detail from "../src/pages/Details";
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/:slug' element={<Detail/>}/>
        </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
