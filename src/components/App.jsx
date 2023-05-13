import { useState } from "react";
import {ImageGallery} from "./imageGallery/ImageGallery";
import { Searchbar } from "./searchbar/Searchbar";

export const App = ()=> {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1)
  
  const handleSubmit = (value) =>{
    setValue(value)
  }

  const handleNewPage = () => {
    setPage(page+1)
  }

  return (
    <div>
      <Searchbar onSubmit={handleSubmit}/>
      {(value.length!==0)&&<ImageGallery imgValue={value} newPage={handleNewPage} page={page}/>}
    </div>
  );
}
