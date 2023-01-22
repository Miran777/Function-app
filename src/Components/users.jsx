import { Await, defer, Link, useLoaderData, useSearchParams } from "react-router-dom"
import { UsersFilter } from "./usersFilter"
import { Suspense } from "react"

export const Users = () => {
    const {users} = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()

    const userQuery = searchParams.get('user') || ''
    const top = searchParams.has('top')
    const startBefore = top ? 5 : 10


    return (
        <section className="users">
            <h2 className="page-title">Our Users</h2>

            <UsersFilter setSearchParams={setSearchParams} userQuery={userQuery} top={top} />

            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={users}>
                    {
                        (resolvedUsers) => (
                            <ul className='list-wrap'>
                                {
                                    resolvedUsers.filter(
                                        user => user.username.toLowerCase().includes(userQuery) && user.id <= startBefore
                                    ).map(user => (
                                        <Link key={user.id} to={`${user.id}`}>
                                            <li className="list-item">{user.username}</li>
                                        </Link>
                                    ))
                                }
                            </ul>)
                    }
                </Await>
            </Suspense>


        </section>
    )
}

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

export const usersLoader = async () => {
    return defer({
        users: getUsers()
    })
}