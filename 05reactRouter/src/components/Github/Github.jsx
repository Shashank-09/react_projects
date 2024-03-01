import React, { useEffect, useState } from 'react'
import  { useLoaderData } from 'react-router-dom'
import UserData from '../UserData/UserData';

const Github = () => {
    
  //const data = useLoaderData()

    // const [data , setData] = useState([]);
    // useEffect(() => {
    //    fetch('https://reqres.in/api/users/')
    //    .then(response => response.json())
    //    .then(data => {
    //       setData(data)
    //    })
    //    console.log(data);
      
    // } , [])

    const [data , setData ]  = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data)
      } )
      
    })
    




  return (
    <>
     <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th> 
        </tr>
      </thead>
      <tbody>
         <UserData  data={data}/>
      </tbody>
     </table>
  
    
  
    
    </>

  )
  
}

export default Github;

// // export  const githubInfoLoader = async () => {
// //   const response = await fetch('https://api.github.com/users/Shashank-09')
// //   return response.json()
// // }

