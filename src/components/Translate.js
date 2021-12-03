import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import './Translate.css';

const Translate = () => {
    const [language, setLanguage] = useState(null);
    const [term, setTerm] = useState('');
    const label = "Select a Language";
    const [options, setOptions] = useState([
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        },
        {
            label: 'Bengali',
            value: 'bn'
        }
    ])
    return (
        <React.Fragment>
            <div className="ui input" style={{ width: "400px" }}>
                <input 
                    type='text' 
                    placeholder="Enter your text here"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)} />
            </div>
            <div style={{marginTop: "50px"}}>
                <div>
                    <span>{label}</span>
                </div>
                <br/>
                <Dropdown 
                    label={label}
                    options={options}
                    selected={language}
                    setSelected={setLanguage} />
            </div>
            <hr/>
            <Convert
                term={term}
                language={language} />
        </React.Fragment>
    )
}

export default Translate;