import React from 'react'
import Buttons from './Buttons'

const list=['All','Gaming','Songs','Dance','Live','Cooking','News','Cricket','Soccer','Live','Cooking','News','Cricket','Soccer'];

const ButtonList = () => {
  return (
    <div className='flex'>
     { list?.map((l)=>( <Buttons name={l}/>
      ))}
     
    </div>
  )
};

export default ButtonList;
