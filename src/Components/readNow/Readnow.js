import React from 'react'
import ReadLaterCard from '../displayCard/DisplayCard'
import {useState,useEffect} from "react"

export default function ReadNow() {
    const [readMore, setreadMore] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/news',{
            headers :{
                'Authorization' :`Bearer ${localStorage.getItem('token')}`
           }
        })
        .then(res=> res.json())
        .then(readMore=>{setreadMore(readMore);});
        // .then(news=>{setnews(news.articles);});
       
    }, [])
    return (
        <div className="container">
        <div className="row">
            {
        readMore.map(items=><ReadLaterCard key={items.id} title={items.title} url={items.urlToImage} description={items.description}/>)
            }
    </div>
    </div>
    )
}
