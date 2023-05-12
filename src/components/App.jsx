import { useState } from "react";
import {ImageGallery} from "./imageGallery/ImageGallery";
import { Searchbar } from "./searchbar/Searchbar";

export const App = ()=> {
  const [value, setValue] = useState('');
  
  const handleSubmit = (value) =>{
    setValue(value)
  }

  return (
    <div>
      <Searchbar onSubmit={handleSubmit}/>
      <ImageGallery imgValue={value}/>
    </div>
  );
}
