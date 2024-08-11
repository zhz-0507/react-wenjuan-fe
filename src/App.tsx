import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { RouterProvider } from 'react-router-dom'
import routerConfig from './router/index'

function App() {
  return (
    <>
     <RouterProvider router={routerConfig}>

     </RouterProvider>
    </>
  )
}

export default App
