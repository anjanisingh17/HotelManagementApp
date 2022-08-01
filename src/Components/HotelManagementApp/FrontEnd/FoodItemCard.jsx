import React from 'react'

function FoodItemCard({foodItems}) {
  return (
    <>
     <div className='container-fluid' style={{paddingTop:'20px'}}>
      <div className="row row-cols-3 row-cols-md-3 g-1" key={new Date().toLocaleTimeString()}>
       {foodItems.map((curElement,index)=>{
            return(
              <>
                    <div className="col" key={1+index}>
                        <div className="card h-100">
                            <img src={curElement.image} className="card-img-top" alt="Card image cap" width='100%' height='400px' />
                            <div className="card-body">
                                <h5 className="card-title"> <span className='reciepe_name'>{curElement.title}</span> <span className='item_price'>Rs {curElement.price} </span> </h5>
                                <p className="item_category">{curElement.category}</p>
                                <p className="card-text">{curElement.description}</p>
                            </div>
                        </div>
                    </div>
              </>
            )
       })}


      </div>
     </div> 
    
    </>
  )
}

export default FoodItemCard