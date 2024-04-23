import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CountryDetails from './pages/CountryDetails.tsx'
import Africa from './pages/Region/Africa.tsx'
import America from './pages/Region/America.tsx'
import Asia from './pages/Region/Asia.tsx'
import Europe from './pages/Region/Europe.tsx'
import Oceania from './pages/Region/Oceania.tsx'

const router = createBrowserRouter([
  {
    path: "/country",
    element: < App />
  },
  {
    path: "/country-Details",
    element: <  CountryDetails />
  },
  {
    path: "*",
    element: < App />
  },
  {
    path: "/Africa",
    element: <Africa />
  },
  {
    path: "/America",
    element: <America />
  },
  {
    path: "/Asia",
    element: <Asia />
  },
  {
    path: "/Europe",
    element: <Europe />
  },
  {
    path: "/Oceania",
    element: <Oceania />
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <RouterProvider router={router} />
)
