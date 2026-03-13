export default function SearchBar({search,setSearch}){
  return (
    <input type="text" placeholder="Search by author..." value={search}
      onChange={e=>setSearch(e.target.value)}
      className="w-full px-5 py-3 border border-gray-600 shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-black mb-6 transition"
    />
  )
};