import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
 import image1 from "./assets/images/cool puppy.jpeg"
 import image2 from"./assets/images/cute puppies.jpeg"
 import image3 from"./assets/images/Innocent puppies.jpeg"
 import image4 from"./assets/images/lonely puppy.jpeg"
 import image5 from"./assets/images/lovely puppies.jpeg"
 import image6 from"./assets/images/naughty puppies.jpeg"
 import image7 from"./assets/images/bonding puppies.jpeg"
 import image8 from"./assets/images/puppies family.jpeg"
 import image9 from "./assets/images/cool puppy.jpeg"
 import image10 from"./assets/images/naughty puppies.jpeg"

const root = ReactDOM.createRoot(document.getElementById('root'));


//image component
function Gallery(props){
  return(
    <div className="dog-gallery">
      <div>
      <img src={props.images} alt="dog img" className='dog-images'></img>
      <h2 className='names'>{props.names}</h2>

    </div>
    </div>
    
  )}

var pics=[
  {images:image1,

  names :"cool puppy"
  },

  {
    images :image2,
    names:"Cute puppies"
  },
  {
    images :image3,
    names:"Innocent puppies"
  },
  {
    images :image4,
    names:"Lonely puppies"
  },
  {
    images :image5,
    names:"Lovely puppies"
  },
  {
    images :image6,
    names:"Naughty puppies"
  },
  {
    images :image7,
    names:"Bonding puppies"
  },
  {
    images :image8,
    names:"Puppies family"
  },
  {
    images:image9,
    names:"Cool puppy"
  },
  {
    images:image10,
    names:"Naughty puppy"
  },

]

root.render(
<div id="box" className='boximage'>
    {
    pics.map (function(item){
     return <Gallery images={item.images} names={item.names}></Gallery>
    })
} 
</div>
)