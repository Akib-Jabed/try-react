export default function SearchBox({handleChange}) {
    return (
        <input className="search-box" type="search" placeholder="search monsters..." onChange={handleChange} />
    )
}