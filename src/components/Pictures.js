import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import './Pictures.css'

/* backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music*/

function Pictures() {

    const [data, setData] = useState()
    const [filteredData, setFilteredData] = useState('')


    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=25346944-88e16966aeb5500afa8453601&q=${filteredData}`)
            .then((response) => {
                const { data } = response
                console.log(data)
                setData(data.hits)
            })

    }, [filteredData])

    function filterImagesByName(event) {
        setFilteredData(event.target.value)
    }

    return (<>
        <input className="api-img-search" type="text" placeholder="search images" value={filteredData} onChange={filterImagesByName} />
        <div className="api-img-container">
            {data?.map(img => <img className="api-img" key={img.id} src={img.largeImageURL} alt=""></img>
            )}
        </div>
    </>)




}

export default Pictures
