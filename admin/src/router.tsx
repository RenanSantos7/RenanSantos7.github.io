import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Base from './pages/Base'
import Home from './pages/Home'
import NovoProjeto from './pages/NovoProjeto/NovoProjeto'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Base />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: '/novo-projeto',
                element: <NovoProjeto />
            }
        ]
    }
])

export default router