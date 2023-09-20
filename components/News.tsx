import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

const News: React.FC = props => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    const response = await fetch(url)
    const parsedData = await response.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  useEffect(() => {
    updateNews()
  }, [page])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${
      process.env.NEXT_PUBLIC_NEWS_API
    }&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    const response = await fetch(url)
    const parsedData = await response.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <div className="container mt-5">
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {articles.map(element => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title || ''}
                description={element.description || ''}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default News
