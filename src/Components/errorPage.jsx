import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError()



    return (
        <div className="Error">
            <h1>{error.status}</h1>
            <h2>{error.statusText || 'Something goes wrong'}</h2>
        </div>
    )

}