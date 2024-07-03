import React , {useEffect,useState} from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{
const[articles,setArticles]= useState([]);
const[loading,setLoading]= useState(true);
const[page,setPage]= useState(1);
const[totalResults,setTotalResults]= useState(0);
const capitalizeFirstLetter = (string)  => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  const updatenews=async()=>{
    props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(80);
    let parseData = await data.json();
    props.setProgress(90);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);

  }


useEffect(()=>{
  document.title = `${capitalizeFirstLetter(props.category)}-New-News`;
  updatenews();
  // eslint-disable-next-line

},[])


    

    const fetchMoreData = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1); 

      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles));
      setTotalResults(parseData.totalResults);
    };

    return (
      <>
        <h1 className="text-center" style={{margin:'70px 0px 20px 0px'}}>New-News Top Headline on {capitalizeFirstLetter(props.category)} </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
        {articles.map((element)=>{
          return <div className="col md-4" key={element.url}>
        <Newsitem title={element.title? element.title.slice(0,45) :""} description = {element.description?element.description.slice(0,88):""} imageurl={element.urlToImage?element.urlToImage:"https://cdn.ndtv.com/common/images/ogndtv.png"} newsurl={element.url} author={element.author?element.author:"unknown"} publishedAt={element.publishedAt}/>
        </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
}


News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News