import React from 'react';
import './SearchList.css';

const SearchList = ({ searchItems }) => {
    const renderedList = searchItems?.map(item => {
        return(
            <React.Fragment key={item.pageid}>
                <h2 className="ui header">{item.title}</h2>
                <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
                <a href={`https://en.wikipedia.org?curid=${item.pageid}`}>
                    <button className="ui button btn_group">
                        Go
                    </button>
                </a>
            </React.Fragment>
        )
    })

    return(
        <div className="search_list">
            {renderedList}
        </div>
    )
}

export default SearchList;