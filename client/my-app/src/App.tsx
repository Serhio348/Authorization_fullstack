import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from './component/header/Header'

import './App.scss'

import Layout from './component/Layout'
import { routes } from './routes'
import { RoutePath } from './constant'
import { Error } from './pages'
import { CurrentUserContext } from '.'


const App: React.FC = () => {
  const {user}:any= useContext(CurrentUserContext)
  console.log(user);

  return (
    <div className="app-container">
      <Header />
      <BrowserRouter>
      {/* <AppRouter/> */}
      <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route) => (
              <Route
                index={RoutePath.HOME === route.path}
                path={route.path}
                element={<route.component />}
                key={route.name}
              />
            ))}
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
