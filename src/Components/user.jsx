import { Suspense } from "react"
import {  Await, useAsyncValue, useLoaderData, useNavigate } from "react-router-dom"

const UserItem = () => {
    const user = useAsyncValue()
    return (
    <>
        <h3 className="checkbox">Name - {user.name}</h3>
        <h3 className="checkbox">Userame - {user.username}</h3>
        <h3 className="checkbox">Email - {user.email}</h3>
    </>
    )
}

export const User = () => {
    const {user} = useLoaderData()
    const navigate = useNavigate()
    const goBack = () => navigate(-1, true)

    return (
        <div>
            <button className="button" onClick={goBack}>Go back</button>
            <Suspense fallback={<h2 className="page-loader">Loading User...</h2>}>
                <Await resolve={user} >
                    <UserItem />
                </Await>
            </Suspense>       
        </div>
    )
}

async function getUserById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
}

export const userLoader = async ({params}) => {
    const id = params.id

    return ({
        user: getUserById(id),
        id
    })
}