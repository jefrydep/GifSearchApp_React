import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
const [categories, setCategories] = useState(['One pucn'])    


const onAddCategory = (newCategory)=>{
  if(categories.includes(newCategory))return;
    setCategories([newCategory, ...categories, ])
    console.log(newCategory)
    console.log(categories)
}

  return (

    < >   
    <h1>GifExpertApp</h1>

    <AddCategory onNewCategory={onAddCategory} />

     
      {
        categories.map((e)=>
        (
          <GifGrid key={e} category={e}/>
        )
      )
      }
         
   
    </>
  )
}

export default GifExpertApp