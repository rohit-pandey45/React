import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import { createBrowserRouter } from "react-router-dom";
// import {
//   Route
// } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/user.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
// In React, a Router is used to create multiple pages/views in a Single Page Application (SPA) without reloading the entire website.

//Method 1
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader,
      }

    ]
  }
])

//Method 2
// const router = createBrowserRouter(
//   createRoutesFromElements(
//      <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />}/>
//      </Route>
//   )
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
