import { Link, Route, Routes } from "react-router-dom"

export const About = () => {
    return (
        <section className="about">
            <h2 className="page-title">This is About</h2>
            <ul className="list-wrap">
                <li ><Link className='list-item' to='contacts'>Our phone</Link></li>
                <li ><Link className='list-item' to='team'>Our team</Link></li>
            </ul>


            <Routes>
                <Route path='contacts' element={<p className="about-item">Our Phone Route</p>}></Route>
                <Route path='team' element={<p className="about-item">Our Team Route</p>}>Our Team Route</Route>
            </Routes>
        </section>
    )
}