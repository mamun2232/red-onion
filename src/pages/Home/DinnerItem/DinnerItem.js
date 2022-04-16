import React from 'react';

const DinnerItem = ({dinners}) => {
      const {name, price , category , img} = dinners
      return (
            <div>
                 <div className="card text-center p-3">
                       <div className="food-img">
                             <img src={img} alt="" />
                       </div>
                       <div className="food-info mt-2">
                             <h4>{name}</h4>
                             <p>{category}</p>
                             <h2>${price}</h2>
                       </div>
                 </div>
            </div>
                
      );
};

export default DinnerItem;