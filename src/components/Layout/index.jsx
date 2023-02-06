import "./styles.scss"
import { Outlet } from "react-router-dom"
import { Background } from "../Background"
import { NavBar } from "../NavBar"

export function Layout() {
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <Outlet />
      </div>
      <Background />
    </div>
  )
}