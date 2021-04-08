import React, {useState} from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const onTitleClicked = (index) => {
        setActiveIndex(index);
        setOpen(!open);
    }

    const renderedItems = items.map((item, index) => {
        const classes = (activeIndex === index) && open ? "active" : "";
        return (<React.Fragment key={item.title}>
            <div 
                className={`title ${classes}`}
                onClick={onTitleClicked.bind(this, index)}>
                <i className="dropdown icon" />
                    {item.title}
            </div>
            <div className={`content ${classes}`}>
                <p>{item.content}</p>
            </div>               
        </React.Fragment>)
    });
    return(
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion;