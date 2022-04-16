import React from 'react';
import './Banner.css'
import backgroundimg from '../../../images/bannerbackground.png'
import { FormControl, InputGroup } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Banner = () => {
      return (
            <div className="banner-container">

                  <div className="search-text">
                        <div className='search'>
                              <h2 className='my-3'>Best food waiting for your belly </h2>
                              <div class="input-group">

                                    <input type="text" className="form-control rounded" placeholder="Search food items" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="sing-up-btn" type="button" id="button-addon2">Search</button>

                              </div>

                        </div>
                        

                  </div>
            </div>
      );
};

export default Banner;