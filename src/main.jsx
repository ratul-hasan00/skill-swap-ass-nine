import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from './LayOut/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import AboutUs from './Component/AboutUs/AboutUs.jsx';
import ContactUs from './Component/ContactUs/ContactUs.jsx';
import Terms from './Component/Terms/Terms.jsx';
import Privacy from './Component/Privacy/Privacy.jsx';
import Login from './Component/Login/Login.jsx';
import Registration from './Component/Registration/Registration.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Blog from './Component/Blog/Blog.jsx';
import SkillDetails from './Component/SkillDetails/SkillDetails.jsx';
import PrivateRoute from './Component/private/PrivateRoute.jsx';
import MyProfile from './Component/MyProfile/MyProfile.jsx';
import EditProfile from './Component/EditProfile.jsx';
import ForgetPass from './Component/ForgetPass.jsx';
import Loading from './Component/Loading.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/aboutUs',
        Component: AboutUs
      },
      {
        path: '/contactUs',
        Component: ContactUs
      },
      {
        path: '/terms',
        Component: Terms
      },
      {
        path: '/privacy',
        Component: Privacy
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/registration',
        Component: Registration
      },
      {
        path: '/skilldetails/:id',
        loader: () => fetch('/swapData.json').then(res => res.json()),
        element: (
          <PrivateRoute>
            <SkillDetails></SkillDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path:'/blog',
        Component: Blog
      },
      {
        path: '/myprofile',
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },
      {
        path: '/editprofile',
        element: <PrivateRoute>
          <EditProfile></EditProfile>
        </PrivateRoute>
      },
      {
        path: '/forgetpass',
        element:<ForgetPass></ForgetPass>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
  </StrictMode>,
)
