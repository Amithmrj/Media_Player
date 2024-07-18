import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import { Route, Routes } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  return (
    <>                                   {/*We installed a new library called react-router-dom for routing (to give path) */}
    <Header/>

    <Routes>                                                     {/* the components that require routing is inside <Routes> */}
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>                    {/* content in path will show after the base url in the browser */}
      <Route path='/watch-history' element={<WatchHistory/>}/>
    </Routes>
    {/* <ToastContainer position='top-center' theme="colored" autoClose={2000} /> */}
    <Footer/>
    </>
  )
}

export default App
