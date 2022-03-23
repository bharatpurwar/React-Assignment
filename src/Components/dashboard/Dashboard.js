import React from 'react'
import Card from '../card/Card'
import {useState,useEffect} from "react"
export default function Dashboard() {
    const [news, setnews] = useState([])


    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=eb342449c4754edf9504d16c6a064521')
        .then(res=>res.json())
        .then(news=>{setnews(news.articles);});
        
        
      
       
    }, [])
    return (
        <div className="container" data-testid="containerTestId">
            <div className="row" data-testid="rowId">
          {
              news.filter(news=>news.urlToImage!=null).map(items=><Card key={items.publishedAt} title={items.title} urlToImage={items.urlToImage} url={items.url} author={items.author} description={items.description} />)
          }
        </div>
        </div>
    )
}
