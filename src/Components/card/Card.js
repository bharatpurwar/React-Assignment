import React from 'react'

export default function Card(props) {
  function AddReadLater() {
    fetch('http://localhost:3001/api/v1/news'
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          title: props.title,
          description: props.description,
          urlToImage: props.urlToImage,
          url: props.url,
          author:props.author


        })


      });
    }
  return (
    <div className="col-md-4 g-4">
      <div class="card h-100" data-testid="cardTestId" >
        <img src={props.urlToImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" data-testid="cardTitleId">{props.title}</h5>
          <p class="card-text" data-testid="cardTextId">{props.description}</p>
          </div>
          <div class="card-footer">
          <button class="btn btn-dark" onClick={AddReadLater}>Read Later</button>
        </div>

      </div>
    </div>
  )
}
