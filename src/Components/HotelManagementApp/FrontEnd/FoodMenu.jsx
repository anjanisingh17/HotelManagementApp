import React from 'react'

function FoodMenu({showItems,menulist,onChangeSearch}) {
  return (
     <>
<nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" disabled>SpaceInn</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {
          menulist.map((curCategory,index)=>{

            return(
                <>
                   <li className="nav-item" >
                     <a key={index} className="nav-link" onClick={()=>{showItems(curCategory)}}>{curCategory}</a>
                   </li>
                    
                </>
            )
           })   
        }
      </ul>
      <input className="d-flex" type="search" placeholder="Search" onChange={onChangeSearch} aria-label="Search" />
    </div>
  </div>
</nav>
     </>
  )
}

export default FoodMenu