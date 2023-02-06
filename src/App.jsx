import { Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import './styles/App.scss'

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

