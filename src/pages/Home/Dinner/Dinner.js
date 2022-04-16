import React, { useEffect, useState } from 'react';
import DinnerItem from '../DinnerItem/DinnerItem';

const Dinner = () => {
      const [dinners, setDinner] = useState([])
      useEffect(()=>{
            fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
      },[])
      return (
            <div className="brack-fast-container my-5">
                 {
                       dinners.map(dinner => <DinnerItem
                       key={dinner.id}
                       dinners={dinner }
                        ></DinnerItem>)
                 }
           </div>
      );
};

export default Dinner;