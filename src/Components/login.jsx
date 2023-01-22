import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signIn} = useAuth()

    const fromPage = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const user = form.username.value

        signIn(user, () => navigate(fromPage, {replace: true}))
    }

    return (
        <div>
            <h2 className="page-title left">Login</h2>
            <form onSubmit={handleSubmit}>
                <label className="checkbox">
                    Name: <input className="input-in login-input" name="username" />
                </label>
                <button className="button" type="submit">Login</button>
            </form>
        </div>
    )
}