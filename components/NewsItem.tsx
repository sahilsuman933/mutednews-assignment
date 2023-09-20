import Image from 'next/image'
import React from 'react'

const NewsItem: React.FC<NewsItemProps> = props => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <Image
          src={
            !imageUrl
              ? 'https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg'
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">{title} </h4>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? 'Unknown' : author} on{' '}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-danger"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

interface NewsItemProps {
  title: string
  description: string
  imageUrl: string
  newsUrl: string
  author: string
  date: string
  source: string
}

export default NewsItem
