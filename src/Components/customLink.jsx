import { useMatch, Link } from "react-router-dom"

export const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to)

    return (
        <Link 
        to={to}
        className={match ? 'active-link' : ''}
        {...props}
        >
            {children}
        </Link>
    )

}