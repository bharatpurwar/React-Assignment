import React from 'react'

export default function DisplayCard(props) {
    return (
        <div className="col-md-4">
        <div class="card" >
<img src={props.url}class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">{props.title}</h5>.
<p class="card-text">{props.description}</p>

</div>
</div>
    </div>
    )
}
