import React from 'react'

const Newsitem = (props)=> {
        let {title,description,imageurl,newsurl,author,publishedAt} = props;
        return (
            <div className="my-3" >
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={!imageurl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageurl} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {author} on {(new Date(publishedAt)).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsurl} target="_blank"  className ="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
}

export default Newsitem
