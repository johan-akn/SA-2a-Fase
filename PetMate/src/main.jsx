import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/routes.jsx'
import { GlobalContextProvider } from './contexts/GlobalContext.jsx'
import { PetContextProvider } from './contexts/PetContext'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <PetContextProvider>
      <RouterProvider router={router} />
    </PetContextProvider>
  </GlobalContextProvider>
)
