import React , {useEffect,useState}from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const chatMessages=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
        // API Polling
        console.log("API Polling");
        dispatch(addMessage({ 
            name:generateRandomName(),
            message:makeRandomMessage(20)
        }))
        },1000);
        return ()=>clearInterval(i);
    },[]);

  return (
    <>
    <div className='w-[485px] h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((c,index)=><ChatMessage key={index} name={c.name} message={c.message} />)}
    </div>
    <form className='border border-black rounded-lg p-2 mx-2' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({name:"sonika",message:liveMessage}))
      setLiveMessage("");
    }}>
      <input type="text" className='border border-black rounded-lg w-10/12 px-2' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
      <button className='px-2 bg-green-200 rounded-lg mx-2'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
