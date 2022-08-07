import React, { useState } from "react";
import './Search.css';


function Search({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [history, setHistory] = useState([]);

    function handleHistory(event){
       setHistory(data => [...data, event.target.value])
        console.log(history)
    }


    const handleFilter = (event) => {
        const searchWord = event.target.value;

        // setHistory(current => [...current, event.target.value])
        // console.log(history)

        const newFilter = data.filter((value) => {
          return value.author.toLowerCase().includes(searchWord.toLowerCase());
          
        });

        
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
      };
      

  
    return (
        <div className="search">
            <div className="searchInputs">
              <form>
                <input type="text" placeholder="Search..." onSubmit={handleHistory} onChange={handleFilter}/>
                </form>

                </div>
                {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        return <div className="dataItem"> 
                        <div>{value.author}</div>
                        {/* <div>{value.title}</div>
                        <div>{value.url}</div>
                        <div>{value.created_at}</div>
                        <div>{value.text}</div> */}
                        </div>;
                    })}
                </div>
            )}
            </div>
        
    )
}

export default Search