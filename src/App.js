import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nutrionists from './pages/Nutrionists';
import Fitlight from './pages/Fitlight';
import Membership from './pages/Membership';
import rectangle from '../src/images/Rectangle 37.png'
import blob from '../src/images/blob-haikei-removebg-preview.png'

function App() {
  return (
    <div className='background'>

      {/* <img src={blob} alt="" className='absolute z-[-1] md:opacity-100 md:flex hidden opacity-60' /> */}
      {/* <img src={rectangle} alt="" className='absolute z-[-1] md:hidden top-0 w-full' /> */}

      <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />

      <Routes>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/nutrionists" element={<Nutrionists />}></Route>
        <Route path="/fitlight" element={<Fitlight />}></Route>
        <Route path="/membership" element={<Membership />}></Route>

      </Routes>

    </div>
  );
}

export default App;
