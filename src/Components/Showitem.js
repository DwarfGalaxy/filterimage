import React, { useState } from 'react';
import Menu from './Menu';

function Showitem() {
    const [items, setItems] = useState(Menu);
    let selectItem=(currentItem)=>{
        let currItem=Menu.filter((value)=>{
            return currentItem===value.category;
        });
        setItems(currItem);

    }
    return (
        <>
            <h1 className='text-center mt-3 text-secondary'>Order Your Favourite Dish</h1>
            <hr />
            <div className="d-flex justify-content-evenly mt-3">
                <button type="button" className="btn btn-warning" onClick={()=>selectItem("breakfast")}>Breakfast</button>
                <button type="button" className="btn btn-warning" onClick={()=>selectItem("lunch")}>Lunch</button>
                <button type="button" className="btn btn-warning" onClick={()=>selectItem("dinner")}>Dinner</button>
                <button type="button" className="btn btn-warning" onClick={()=>setItems(Menu)}>All</button>
            </div>

            {/* card */}
            <div className="container text-center mt-5" >
                <div className="row">

                    {items.map((value) => {
                        return <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-5" key={value.id}>
                            <div className="card " >
                                <img src={value.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">{value.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <p className=' fw-bolder text-info mt-2'>Price : Rs. {value.price}</p>
                                        <button type="button" className="btn btn-info text-light fw-bold border border-0">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>



        </>
    )
}

export default Showitem
