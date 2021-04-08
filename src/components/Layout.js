import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Layout.css';

const Layout = () => { 
    const [ activeIndex, setActiveIndex ] = useState(null);
    const headerItems = [
        {
            id: 1,
            name: "Accordion",
            path: ''
        },
        {
            id: 2,
            name: "Dropdown",
            path: "dropdown"
        },
        {
            id: 3,
            name: "Translate",
            path: "translator"
        },
        {
            id: 4,
            name: "Search",
            path: "search"
        }
    ];

    const onClick = (id) => {
        setActiveIndex(id);
    }
    return (
        <div className="layout">
            {
                headerItems.map((item) => {
                    const classes = activeIndex === item.id ? 'active' : '';
                    return (
                        <div 
                            className="ui secondary pointing menu"
                            style={{ display: 'inline-block' }}
                            key={item.id}>
                            <Link to={`/${item.path}`}>
                                <a 
                                    className={`item ${classes}`}
                                    onClick={onClick.bind(this, item.id)} >
                                        {item.name}
                                </a>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Layout;