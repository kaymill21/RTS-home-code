import React from 'react'

function History(props){
  {props.previousSearches.map((term) => {
   return (
    <button type="button" onClick={this.applyPreviousSearch.bind(this, term)}>
      {term}
    </button>
  );
})}
}
export default History