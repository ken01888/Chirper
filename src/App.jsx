import React, {useEffect,useState} from 'react';
import './app.css'

const App = ()=>{

const [user,setUser]=useState('')
const [member,setMember]=useState(['SpongeBob','Mr.Browney','Ms.PatPat'])
const [message,setMessage]=useState('')
const [chirper,setChirper]=useState(
['Never trust atoms; they make up everything.',
'Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.',
'Atheism is a non-prophet organization.'
])

 const handleUserChange = (e)=>{
     setUser(e.target.value)
 }

 const handleMessageChange =(e)=>{
     setMessage(e.target.value)
 }

 const handleClick = (e)=>{
    setChirper(chirper.concat(message))
    setMember(member.concat(user))
    e.preventDefault()   
}

useEffect(()=>{
    document.getElementById('user').value=''
},[chirper])

useEffect(()=>{
    document.getElementById('message').value=''
},[member])



const reply = chirper.map((val,index)=>{return(<p key={`chirps-${index}`}>{val}</p>)})
const who = member.map((val,index)=>{return(<p key={`chirps-${index}`}>{val}-</p>)})

    return(
        <React.Fragment>
            <form>
                <div>
                <label htmlFor="user">Enter UserName: </label>
                <input onChange={handleUserChange} type="text" name='user' id='user' value={user}/>
                </div>
                <div>
                <label htmlFor="message">Enter Message: </label>
                <input onChange={handleMessageChange} type="text" name='message' id='message' value={message}/>
                </div>
                <button onClick ={handleClick} >Click Me</button>
            </form>
            <div className ='chirper'> 
                 <div>{who}</div>
                <div>{reply}</div>    
            </div>
        </React.Fragment>  
    )
}
export default App;