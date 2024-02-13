import axios from "axios";
import { useState, useEffect} from 'react';
 
const  apiKey= '1wMY1qB4mop_JYwMJ-ZSM8_-g6JXv5zIz2OW4PXryGNYehjc'

function TopsHeadlines () {
    //test aPI because low daily limit
      
        axios.request('https://gnews.io/api/v4/top-headlines?lang=en&apikey=3bcaf7196b03271776f870904803a308')
        .then((response) => {
            console.log(response.data.articles);
        });
    
        return 
        <div className="topheadlines-container">
            {NewsItems.map((newsItem) => (
                 <a href="" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                 <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                 <div className="flex flex-col justify-between p-4 leading-normal">
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 </div>
             </a>
            ))};
           
         </div>
        
    };

export default TopsHeadlines;


