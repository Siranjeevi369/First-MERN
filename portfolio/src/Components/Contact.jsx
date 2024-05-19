import React, { useEffect, useState } from 'react'

import axios from 'axios'

import TableView from './TableView'

function Contact() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [getUsers, setGetUsers] = useState([])
    const [dataUpdate, setdataUpdate] = useState(0)

    
    const collection = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:4000/users',{
            method:'post',
            body:JSON.stringify({name, email, password}),
            headers:{
                'Content-Type':'application/json'
            },
        });

        setdataUpdate(pre => pre + 1)

        result = await result;

        console.log("result ", result);
        localStorage.setItem("user", JSON.stringify(result))

    }

    useEffect(() => { 
        axios.get('http://localhost:4000/users')
        .then(users => setGetUsers(users.data))
        .catch(err => console.log(err))
        
    }, [dataUpdate])

    console.log("getUsers " , getUsers);

    //------------------------ fetch data from db -------------------



  return (
    <div>
        <h1>yrdykfutgyi
            olhnoihjoi
            ouikyuftdyrtexrkyculvi.kb
            'ouhnui9prshtx
            kihbiuwgr
            ojiniulwra
            o;jibhiuwa3g
            kjibiw'
        </h1>
        <h1>yrdykfutgyi
            olhnoihjoi
            ouikyuftdyrtexrkyculvi.kb
            'ouhnui9prshtx
            kihbiuwgr
            ojiniulwra
            o;jibhiuwa3g
            kjibiw'
        </h1>
        
       <div>
        <form onSubmit={collection}>
            
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" 
            value={name}

            onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="name">Email</label>
            <input type="email" name="email" id="email"
            value={email}

            onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" 
            value={password}

            onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="file">File Upload</label>
            <input type="file" name='file' id='file'/>

            <button type='submit'>Submit</button>
        </form>
        </div>
        <hr />
        <h1>Data dispaly Table View</h1>
        
       <TableView getUsers={getUsers}/>
        
    </div>


  )
}

export default Contact