import React, { useEffect, useState } from 'react';
import BreakfastItem from '../BreakfastItem/BreakfastItem';
import './BackFast.css'

const BaskFast = () => {
      const [breakFasts, setBreackFast] = useState([])
      useEffect(()=>{
            fetch('breackFirst.json')
            .then(res => res.json())
            .then(data => setBreackFast(data))
      },[])


      return (
           <div className="brack-fast-container my-5">
                 {
                       breakFasts.map(breakFast => <BreakfastItem
                        key={breakFast.id}
                        breakFast={breakFast}
                        
                        ></BreakfastItem>)
                 }
           </div>
      );
};

export default BaskFast;