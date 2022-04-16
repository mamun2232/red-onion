import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Foodlist.css'
const FoodList = () => {
      return (
            <div>
                  <div className="container">
                        <div className="food-list my-5">
                              <nav>
                                    <Link to='/brackfast'>BreakFast</Link>
                                    <Link to='/lanch'>Lunch</Link>
                                    <Link to='/dinner'>Dinner</Link>
                                   
                              </nav>
                              <Outlet></Outlet>
                        </div>
                  </div>
            </div>
      );
};

export default FoodList;