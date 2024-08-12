import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import ManageLayout from "../layouts/ManageLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/404"
import List from "../pages/manage/List"
import Trash from "../pages/manage/Trash"
import Star from "../pages/manage/Star"
import Edit from "../pages/question/Edit"
import Stat from "../pages/question/Stat"

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/manage',
        element: <ManageLayout />,
        children: [
          {
            path: '/manage/star',
            element: <Star />
          },
          {
            path: '/manage/list',
            element: <List />
          },
          {
            path: '/manage/trash',
            element: <Trash />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      },
      
    ]
  },
  {
    path: '/question',
    element: <QuestionLayout />,
    children: [
      {
        path: '/question/edit/:id',
        element: <Edit />
      },
      {
       path: '/question/star/:id',
       element: <Stat />
      }
    ]
  },
])

export default router 


