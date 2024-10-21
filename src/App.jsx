
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideDrawer from './Layout/SideDrawer'
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import SubmitCommission from './pages/SubmitCommission';
import HowitWorks from './pages/HowitWorks';
import About from './pages/About';
import Leaderboard from './pages/Leaderboard';
import Auctions from './pages/Auctions';
import ProductDetails from './pages/ProductDetails';
import CreateAuction from './pages/CreateAuction';
import ViewMyAuction from './pages/ViewMyAuction';
import ViewAuctionDetails from './pages/ViewAuctionDetails';
import Dashboard from './pages/Dashboard/Dashboard';



function App() {
  

  return (
    <>
      <SideDrawer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/submitcommission' element={<SubmitCommission />} />
        <Route path='/howitworks' element={<HowitWorks />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/auctions' element={<Auctions />} />
        <Route path='/auctions/item' element={<ProductDetails />} />
        <Route path='/createauction' element={<CreateAuction />} />
        <Route path='/viewmyauction' element={<ViewMyAuction />} />
        <Route path='/viewauctiondetails' element={<ViewAuctionDetails />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      

      <ToastContainer position='top-right' />
    </>
  )
}

export default App
