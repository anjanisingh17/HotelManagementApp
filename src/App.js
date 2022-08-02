import './App.css';
import FoodItemCard from './Components/HotelManagementApp/FrontEnd/FoodItemCard';
import itemData from './Components/HotelManagementApp/API/Api';
import FoodMenu from './Components/HotelManagementApp/FrontEnd/FoodMenu';
import { useState } from 'react';

  //show Unique Category  
  const uniqueList = ["Home",...new Set (itemData.map((curElement)=>{
        return  curElement.category;
      }))] ;   



function App() {

const [itemslist,setItemsList] = useState(itemData);

//show Reciepe Card  
  const showItems = (parameter)=>{
      if(parameter==='Home'){
          return setItemsList(itemData);
      }else{
        const itemToShow = itemData.filter((curElement)=>{
          return parameter === curElement.category;
        })  
        setItemsList(itemToShow); 
      }
  }

  //onChangeSearch function
  const onChangeSearch = (e)=>{

    const searchval = e.target.value;
    
        
      if (searchval === "") {
        //if query is empty
        
          const itemToShow = itemData.filter((curElement)=>{
            return curElement;
         })

         setItemsList(itemToShow);

      } else {
        //returns filtered array
        const itemToShow = itemData.filter((curElement)=>{
          return curElement.title.toLowerCase().includes(searchval.toLowerCase());
       })
       setItemsList(itemToShow); 
     }



  }


  //Anjani Singh

  
  return (
   
   <>
   
   <FoodMenu showItems={showItems} menulist={uniqueList} onChangeSearch={onChangeSearch} />
    <FoodItemCard foodItems={itemslist} />   
    
            
   </>

  );
}

export default App;
