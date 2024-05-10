import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch=useDispatch();

  useEffect(() => {
    getSearchSuggestions();
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }
      , 200);
    return (() => {
      clearTimeout(timer);
    })
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img className="h-8 cursor-pointer" onClick={() => {
          toggleMenuHandler()
        }}
          src='https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small/bullet-menu-icon-free-vector.jpg' alt='hamburger menu' />
        <a href='/'>
          <img className='h-6 mt-1 mx-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="YOUTUBE" />
        </a>
      </div>
      <div className='col-span-10 '>
        <div>
          <input className='border border-gray-400 w-6/12 p-2 rounded-l-full' type="text" value={searchQuery} onChange={(e) => (setSearchQuery(e.target.value))} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
          <button className='border border-gray-400 rounded-r-full p-2'>Search
            {/* <img className='h-[30px] p-2' src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="Search" /> */}
          </button>
        </div>
        {showSuggestions && (<div className='fixed  bg-white py-2 px-1 w-[37rem] shadow-lg rounded-lg border-gray-100'>
          <ul>
            {suggestions.map((s) => (<li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>))}

          </ul>
        </div>)}
      </div>
      <div className='col-span-1 flex'>
        <img className='h-8' src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user-icon" />
      </div>
    </div>
  )
}

export default Head
