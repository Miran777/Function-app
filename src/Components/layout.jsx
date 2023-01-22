import { Outlet } from "react-router-dom"
import { CustomLink } from "./customLink"


export const Layout =() => {
    return (
        <div className="app">
            <header className="header">
                <ul>
                    <CustomLink to='/'><li>Home</li></CustomLink>
                    <CustomLink to='/users'><li>Users</li></CustomLink>
                    <CustomLink to='/info'><li>Info</li></CustomLink>
                    <CustomLink to='/about'><li>About</li></CustomLink>
                    <CustomLink to='/posts'><li>Posts</li></CustomLink>
                </ul>
            </header>

            <main>
            <Outlet />
            </main>

            <footer className="footer">
                2023
            </footer>
        </div>
    )
}