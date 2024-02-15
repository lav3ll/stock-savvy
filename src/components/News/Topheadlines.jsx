import axios from 'axios';
import { useState, useEffect } from 'react';

function truncateDescription(description, wordsCount) {
  const words = description.split(' ');
  const truncatedDescription = words.slice(0, wordsCount).join(' ');
  return truncatedDescription;
}

// MAIN REPO TO PUSH CHANGES

function TopsHeadlines() {
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    axios
      .request(
        'https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=3bcaf7196b03271776f870904803a308'
      )
      .then((response) => {
        setTopHeadlines(response.data.articles);
        // console.log(response.data.articles);
      });
  }, [setTopHeadlines]);

  return (
    <>
      <h2 className='text-left text-2xl'> Today's Headlines </h2>
      {topHeadlines.map((newsItem, index) => (
        <a
          href={newsItem.url}
          target='_blank'
          key={index}
          className='m-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
        >
          <img
            className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
            src={newsItem.image}
            alt={newsItem.title}
          />
          <div className='flex flex-col justify-between p-4 leading-normal'>
            <h5 className='mb-2 text-l text-left font-bold tracking-tight text-gray-900 dark:text-white'>
              {newsItem.title}
            </h5>
            <p className='p-2 mb-3 font-normal text-left text-gray-700 dark:text-gray-400'>
              {truncateDescription(newsItem.description, 20) + '...'}
            </p>
            <p className='text-xs text-gray-400 text-left'>
              Published at: {newsItem.publishedAt}{' '}
            </p>
          </div>
        </a>
      ))}
      ;
    </>
  );
}

export default TopsHeadlines;
