import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from '../store/store.js'
import "tailwindcss"
import { createBrowserRouter } from 'react-router-dom'
import Protected from './components/Authlayout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Donation from './pages/Donations.jsx'
import SignupComponenet from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import Addpost from './pages/Addpost.jsx'
import Post from './pages/Post.jsx'
import { RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; 



const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        index: true, // this matches exactly `/`
        element: <Navigate to="/home" replace />
      },
      {
        path: 'post/:slug',
        element: <Post/>
      },
      {
        path: 'login',
        element: (
          <Protected authentication={false}>
          <Login/>
          </Protected>
        ),
      },
      {
        path: 'signUp',
        element: (
          <Protected authentication={false}>
          <SignupComponenet/>
          </Protected>
        ),
      },
      {
        path: 'add-post',
        element: (
          <Protected authentication={true}>
          <Addpost/>
          </Protected>
        ),
      },
      {
        path: 'edit-post/:slug',
        element: (
          <Protected authentication={true}>
          <Addpost/>
          </Protected>
        ),
      },

    ]
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: 'all-posts',
    element: (
      <AllPosts />
    ),
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/donate",
    element: <Donation/>
  },
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
)
