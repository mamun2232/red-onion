import React, { useEffect, useState } from 'react';
import LunchItme from '../LunchItem/LunchItme';

const Lanch = () => {
      const [lunchs, setLunch] = useState([])
      useEffect(()=>{
            fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data))
      },[])
      return (
            <div className="brack-fast-container my-5">
                 {
                       lunchs.map(lunch => <LunchItme
                       key={lunch.id}
                       lunch ={lunch }
                        ></LunchItme>)
                 }
           </div>
      );
};

export default Lanch;