import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Alumni from './components/Alumni/Alumni.jsx'
import Contact from './components/Contact/Contact.jsx'
import Events from './components/Events/Events.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Projects from './components/Projects/Projects.jsx'
import Register from './components/Register/Register.jsx'
import Team from './components/Team/Team.jsx'
import Login from './components/Login/Login.jsx'
import Profile from './components/Profile/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='alumni' element={<Alumni />} />
        <Route path='contact' element={<Contact />} />
        <Route path='events' element={<Events />} />
        <Route path='register' element={<Register />} />
        <Route path='team' element={<Team />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)