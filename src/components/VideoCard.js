import React from 'react'

const VideoCard = ({info}) => {
    const title=info?.snippet?.title;
    const channelTitle=info?.snippet?.channelTitle;
    const thumbnails=info?.snippet?.thumbnails;
    const viewCount=info?.statistics?.viewCount;
  return (
    <div className=' w-72 shadow-lg flex flex-wrap items-center justify-center my-4 mx-2'>
      <img className='rounded-lg' src={thumbnails?.medium?.url} alt="video" />
      <ul>
        <li className='font-bold text-lg'>{channelTitle}</li>
        <li>{title}</li>
        <li>{viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard
