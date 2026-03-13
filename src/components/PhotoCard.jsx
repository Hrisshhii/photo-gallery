export default function PhotoCard({photo,dispatch,isFav}){
  return (
    <div>
      <img src={photo.download_url} alt={photo.author} className="w-full h-48 object-cover" />
      <div>
        <p>{photo.author}</p>
        <button onClick={()=>dispatch({
          type:"TOGGLE_FAVOURITE",
          payload:photo
        })}
          className="text-xl"
        >
          {isFav?"❤️":"🤍"}
        </button>
      </div>
    </div>
  )
};