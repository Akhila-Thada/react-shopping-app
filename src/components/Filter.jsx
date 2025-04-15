import React, { useState } from 'react';
import './filter.css';
import ShopPage from './ShopPage';

const Filter = ({ onOpenAuth }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);

    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleClick = () => {
        setIsDropdownOpen(false);
    };


    return (
        <div className="filter-wrapper">
            <div id="btns">
                <button className='filter-btn' onClick={toggleSidebar}>FILTER</button>
                <div id="dropdown-container" className='filter-btn' >
                    <button onClick={toggleDropdown}>
                        RECOMENDED <span>v</span>
                    </button>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li onClick={handleClick}>Recommended</li>
                            <li onClick={handleClick}>Newest First</li>
                            <li onClick={handleClick}>Popular</li>
                            <li onClick={handleClick}>Price: High to Low</li>
                            <li onClick={handleClick}>Price: Low to High</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="content-row">

                {isSidebarOpen && (
                    <div className="sidebar">
                        <label><input type="checkbox" />CUSTOMIZABLE </label>
                        <div>
                            <div className="filter-group">
                                <label htmlFor="ideal-for">IDEAL FOR</label><br />
                                <select id="ideal-for" defaultValue="all" >
                                    <option value="all">All</option>
                                    <option value="some">Some</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>OCCASION</label><br />
                                <select defaultValue="all" >
                                    <option value="all">All</option>
                                    <option value="some">Some</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>WORK</label><br />
                                <select defaultValue="all" >
                                    <option value="all">All</option>
                                    <option value="some">Some</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>FABRIC</label><br />
                                <select defaultValue="all" >
                                    <option value="all">All</option>
                                    <option value="some">Some</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>SEGMENT</label><br />
                                <select defaultValue="all" >
                                    <option value="all">All</option>
                                    <option value="some">Some</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>SUITABLE FOR</label><br />
                                <select defaultValue="all" >
                                    <option value="all">All</option>
                                    <option value="some">Some</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>RAW MATERIALS</label><br />
                                <select defaultValue="all" >
                                    <option value="all">All</option>
                                    <option value="some">Some</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>PATTERN</label><br />
                                <select defaultValue="all" >
                                    <option value="all">All</option>
                                    <option value="some">Some</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}


                <div className={`shop-content ${isSidebarOpen ? 'shifted' : ''}`}>
                    <ShopPage onOpenAuth={onOpenAuth}  />
                </div>
            </div>
        </div>
    );
};

export default Filter;
