import React from 'react';
import './SearchBar.css';

let sortByOptions = {
    'Best Match': 'best_match',
    'Highest Match': 'rating',
    'Most Reviewed': 'review_count'
};

export class SearchBar extends React.Component {
        render(){
            return(
                <div className="SearchBar">
                    <div className="SearchBar-sort-options">
                        <ul>
                            { this.renderSortByOptions() }
                        </ul>
                    </div>
                    <div className="SearchBar-fields">
                        <input placeholder="Search Businesses" />
                        <input placeholder="Where?" />
                    </div>
                    <div className="SearchBar-submit">
                        <a>Let's Go</a>
                    </div>
                </div>
            );
        }

    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
              let sortByOptionValue = sortByOptions[sortByOption];
              return <li key={sortByOptionValue}>{sortByOption}</li>;
          }
        )
    }
}