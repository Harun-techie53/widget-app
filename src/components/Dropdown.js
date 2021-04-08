import React, {useState, useEffect, useRef} from 'react';
import './Dropdown.css';

const Dropdown = ({ options, selected, setSelected, label }) => {
    const [ open, setOpen ] = useState(false);
    const ref = useRef();
    const renderedOptions = options.map((option, index )=> {
        return(
            <div 
                key={option.value} 
                className="item"
                onClick={() => setSelected(option)} >
                {option.label}
            </div>
        )
    });
    const classes = open === true ? 'visible transition' : '';
    useEffect(() => {
        const bodyClick = (e) => {
            if(ref.current?.contains(e.target)){
                return;
            }

            setOpen(false);
        }
        document.body.addEventListener( 'click', bodyClick );
        return (
            () => document.body.removeEventListener( 'click', bodyClick )
        )
    }, []);
    return (
        <React.Fragment>
            <div 
                ref={ref}
                className="ui selection dropdown visible active"
                onClick={() => setOpen(!open)}>
                <i className="dropdown icon"></i>
                {
                    selected === null ? (
                        <div className="default text">{label}</div>
                    ) : (
                        <div className="text">{selected.label}</div>
                    )
                }
                <div className={`menu ${classes}`}>
                    {renderedOptions}
                </div>
            </div>
            {/* {
                selected ? 
                (<h2 className={`color_${selected.value}`}>
                The text is {selected.value}.
            </h2>) : null
            } */}
        </React.Fragment>
    )
}

export default Dropdown;