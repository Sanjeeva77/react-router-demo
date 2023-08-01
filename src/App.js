import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { PageNotFound } from './components/PageNotFound';
import { Product } from './components/Product';
import { FeaturedProduct } from './components/FeaturedProduct';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import RequireAuth from './components/RequireAuth';
import { Login } from './components/Login';

function App() {
  return (
    <AuthProvider>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='order-summary' element={OrderSummary}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='products' element={<Product/>}>
          <Route index element={<FeaturedProduct/>}/>
          <Route path='featured' element={<FeaturedProduct/>}/>
          <Route path='new' element={<NewProducts/>}/>
          </Route>
          <Route path='users' element={<Users/>}/>
          {/* <Route path='/users/1' element={<UserDetails/>}/>
          <Route path='/users/2' element={<UserDetails/>}/>
          <Route path='/users/3' element={<UserDetails/>}/> */}
          {/* <Route path='/users/:userId' element={<UserDetails/>}/>
          <Route path='/users/admin' element={<Admin/>}/> */}
          {/* fixed path is prefered */}
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />}/>
            <Route path="admin" element={<Admin/>}/>
          </Route>
          <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>}/>

          <Route path='login' element={<Login/>}/>
    </Routes>
    </AuthProvider>
  );
}

export default App;
