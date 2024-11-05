import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootElement from './pages/Root.jsx';
import Home from './pages/Home.jsx';
import Explorer from './pages/Explorer.jsx';
import Search from './pages/Search.jsx'
import './App.css';

function App() {
  //React Router Resources
  const router = createBrowserRouter( [
    { path: '/', element: <RootElement />, children: [
      {path:'/', element: <Home />},
      {path:'/explore', element: <Explorer />},
      {path:'/search', element: <Search />}
    ]}
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
