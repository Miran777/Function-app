import { useState } from "react"


export const PostsFilter = ({postQuery, latest, setSearchParams}) => {
    const [search, setSearch] = useState(postQuery)
    const [checked, setChecked] = useState(latest)


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        
        const query = form.search.value
        const isLatest = form.latest.checked
    
        const params = {}
    
        if (query.length) params.post = query
        if (isLatest) params.latest = true
        setSearchParams(params)
       }

    return (
        <form autoComplete="off" onSubmit={handleSubmit} >
        <input className="input-search" type="search" name="search"  value={search} onChange={e => setSearch(e.target.value)}/>
        <label className="checkbox" style={{padding: '0 1rem'}}>
            <input type="checkbox" name="latest" checked={checked} onChange={e => setChecked(e.target.checked)}/> New only
        </label>
        <input className="button" type="submit" value="Search" />
    </form>
    )
}
