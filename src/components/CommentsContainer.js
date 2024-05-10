import React from 'react'

const commentsData=[
  {
    name:"sonika",
    text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
    replies:[
      {
        name:"sonika",
        text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
        replies:[
          {
            name:"sonika",
            text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
            replies:[]
          },
        ]
      },
    ]
  },
  {
    name:"sonika",
    text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
    replies:[
      {
        name:"sonika",
        text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
        replies:[]
      },
      {
        name:"sonika",
        text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
        replies:[]
      },
    ]
  },
  {
    name:"sonika",
    text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
    replies:[]
  },
  {
    name:"sonika",
    text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
    replies:[
      {
        name:"sonika",
        text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
        replies:[
          {
            name:"sonika",
            text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
            replies:[]
          },
        ]
      },
      {
        name:"sonika",
        text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
        replies:[]
      },
    ]
  },
  {
    name:"sonika",
    text:"lorem23c ivyubhinjmoklduftv igyhoujikduf ighoj",
    replies:[]
  },
]

const Comment=({data})=>{
  const {name,text}=data;
  return (
    <div className='flex bg-gray-100 p-2 rounded-lg shadow-sm my-2 '>
      <img className='w-12 h-12' alt="user" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" />
      <div>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

const CommentsList=({comments})=>{
    return comments?.map((comment,index)=>
    (<div key={index}>
    <Comment data={comment}/>
      <div className='ml-5 pl-5 border border-l-black'>
        <CommentsList comments={comment.replies}/>
      </div>
    </div>)
    )
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
