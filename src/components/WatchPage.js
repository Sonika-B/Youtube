import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className='flex-row'>
      <div className='px-2 flex'>
        <div>
        <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div>
          <LiveChat/>
        </div>
      </div>
      <div className='w-8/12'>
      <CommentsContainer/>
      </div>
    </div>
  )
}

export default WatchPage;
