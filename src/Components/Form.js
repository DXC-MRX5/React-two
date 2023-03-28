import './Form.css';
import React,{useState} from 'react';

const Form = () => {
    const [data,setData]=useState({});
    const [infoArray,setInfoArray]=useState([]);
    const handleinput=(event)=>{
        setData({...data,[event.target.name] : event.target.value})
    }
    const handleSubmit=()=>{
        setInfoArray([...infoArray,data])
    }
  return (
    <div>
    <div className='form'>
    <div>        
        <label htmlFor='name'>Name :</label>
        <input type='text' id='name' name='Name' onChange={handleinput}/>
    </div>
    <div>        
        <label htmlFor='dept'>Department :</label>
        <input type='text' id='dept' name='Department' onChange={handleinput}/>
    </div>
    <div>
        <label htmlFor='rating'>Rating :</label>
        <input type='number' id='rating' name='Rating' onChange={handleinput}/>
    </div>
        <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className='container'>
        {
            infoArray.map((info,index)=>{
                return(
                    <div key={index} className='inputs'>
                        <p>Name : {info.Name} | Department : {info.Department} | Rating : {info.Rating}</p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Form