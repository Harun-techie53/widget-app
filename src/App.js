import React, {useState} from 'react';
import { Route, Switch, Link } from 'react-router-dom'; 
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Layout from './components/Layout';
import './App.css';

const App = () => {
    const [ selected, setSelected ] = useState(null);
    const items = [
        {
            title: 'What is React?',
            content: 'React is a JS library built by facebook.'
        },
        {
            title: 'Why do we use React?',
            content: 'React is the most popular JS library among all the developers and its quite amazing.'
        },
        {
            title: 'How do we use React?',
            content: 'We used React by creating different types of components and passing them data as its properties.'
        }
    ]

    const options = [
        {
            label: 'Color Red',
            value: 'red'
        },
        {
            label: 'Color Green',
            value: 'green'
        },
        {
            label: 'A shade of blue',
            value: 'blue'
        }
    ]
    return(
        <div className="ui container app">
            <Layout />
            <Switch>
                <Route path="/dropdown">
                    <Dropdown 
                        selected={selected}
                        setSelected={setSelected}
                        label="Select a color"
                        options={options} />
                </Route>
                <Route path="/translator">
                    <Translate />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/">
                    <Accordion items={items} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;