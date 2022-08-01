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
  
  return (
   
   <>
   <FoodMenu showItems={showItems} menulist={uniqueList} />
    <FoodItemCard foodItems={itemslist} />   
   </>

  );
}

export default App;
