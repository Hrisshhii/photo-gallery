export default function PhotoCard({photo,dispatch,isFav}){
  return (
    <div className="group bg-white/30 rounded border border-gray-200 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 p-2">
      <div className="h-75 flex items-center justify-center bg-white/30 overflow-hidden">
        <img src={photo.download_url} alt={photo.author} className="h-full w-auto object-cover transition duration-300 group-hover:scale-105" />
      </div>
      
      <div className="flex justify-between items-center px-4 py-3">
        <p className="font-semibold text-[1.2rem] text-gray-700 truncate group-hover:scale-105 transition duration-300">{photo.author}</p>
        <button onClick={()=>dispatch({
          type:"TOGGLE_FAVOURITE",
          payload:photo
        })}
          className="text-xl hover:scale-125 transition cursor-pointer"
        >
          {isFav?"❤️":"🤍"}
        </button>
      </div>
    </div>
  )
};