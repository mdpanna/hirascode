import React, { useEffect, useState } from 'react'
import { Virtuoso } from 'react-virtuoso'


let countpage = 0

function P() {
    const [data, setdata] = useState([])


    const fetchMore = () => {
        fetch(`https://dummyjson.com/products?limit=${5}&skip=${countpage}&select=title,price`)
            .then(response => response.json())
            .then(json => {
                setdata([...data, ...json.products])
            })

        countpage = countpage + 5
    }

    useEffect(() => {
        fetchMore()

    }, [])




    return (
        <div>
            <h1>Optimize Way</h1>

            <ul>

                <Virtuoso
                    useWindowScroll

                    style={{ height: '100%' }}
                    data={data}
                    endReached={fetchMore}
                    itemContent={(index, data) => {
                        return (
                            <li key={index} className='bg-danger text-white mb-3 p-2'>
                                <h2>{data.id}</h2>
                                <h3>{data.title}</h3>
                                <h4>{data.body}</h4>
                            </li>
                        )
                    }}
                />




            </ul>
        </div>
    )
}

export default P