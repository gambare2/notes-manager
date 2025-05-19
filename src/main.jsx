// Project: paste
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Manager from './component/Manager/Manager.jsx'
import AuthLayout from './component/Authpath/AuthLayout.jsx'
import Login from './component/Authpath/Login.jsx'
import Register from './component/Authpath/Register.jsx'
import Profile from './component/Profile/Profile.jsx'
import Viewpath from './component/ViewPath/Viewpath.jsx'
import Layout from './Layout.jsx'
import { createRoutesFromElements } from 'react-router'
import Navbar from './component/Navbar/Navbar.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='home' element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='manager' element={<Manager />} />
      <Route path='profile' element={<Profile />} />
      <Route path='/manager/:id' element={<Viewpath />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
