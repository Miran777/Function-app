import { useState } from "react"


export const UsersFilter = ({setSearchParams, top, userQuery}) => {
    const [search, setSearch] = useState(userQuery)
    const [checked, setChecked] = useState(top)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        const query = form.search.value
        const isTop = form.top.checked

        const params = {}

        if (query.length) params.user = query
        if (isTop) params.top = true
        setSearchParams(params)
    }

    return (
        <form className="users-filter" autoComplete="off" onSubmit={handleSubmit}>
            <input className="input-search" type="search" name='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <label className="checkbox" style={{padding: '0 1rem'}}>
                <input  type="checkbox" name="top" checked={checked} onChange={(e) => setChecked(e.target.checked)}/> Top 5
            </label>
            <input className="button" type="submit" value='search' />
        </form>
    )
}