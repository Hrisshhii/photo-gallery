import { useCallback, useMemo, useReducer, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer, initialState } from "../reducers/favouritesReducer";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import PhotoCard from "./PhotoCard";

export default function Gallery(){
  const {photos,loading,error}=useFetchPhotos();
  const [search,setSearch]=useState("");
  const [state,dispatch]=useReducer(favouritesReducer,initialState);

  const handleSearch=useCallback((value)=>{
    setSearch(value);
  },[]);

  const filteredPhotos=useMemo(()=>{
    return photos.filter((photo)=>photo.author.toLowerCase().includes(search.toLowerCase()));
  },[photos,search]);

  if(loading) return <Spinner />
  if(error) return <p className="text-red-500 text-center font-bold">{error}</p>

  return (
    <div className="w-auto mx-auto px-6 pb-10">
      <SearchBar search={search} setSearch={handleSearch}/>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo)=>(
          <PhotoCard key={photo.id} photo={photo} dispatch={dispatch} isFav={state.favourites.some((p)=>p.id===photo.id)}/>
        ))}
      </div>
    </div>
  );
};