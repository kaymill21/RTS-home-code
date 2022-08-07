import React, {useState, useEffect} from "react";

function DataFetching() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://hn.algolia.com/api')
        .then(res => res.json())
        .then(console.log())

    })
    return (
        <div>
            <ul>
                {data.map(data => (
                    <li key={data.id}>{data.author}</li>
                ))}
            </ul>
        </div>
    )
};
export default DataFetching