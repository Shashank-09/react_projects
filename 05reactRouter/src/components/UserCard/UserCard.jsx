import React, { useEffect, useState } from 'react'



const UserCard = () => {
    const [card , setCard] = useState([])
    //  const call =  async () => {
    //         const res = await  fetch('https://reqres.in/api/users/')
    //         const json = await res.json()
    //         setCard(json.data)

    //  }
    useEffect(() => {
        fetch('https://reqres.in/api/users/')
      .then(response => response.json())
      .then(card => {
        setCard(card.json())
        console.log(card)
      })
    
    }, [])
  return (
    <>
      {card.length && card.map(data => {
        return(
            <div key={data.id}>
              <p>{data.first_name}</p>
              <p>{data.email}</p>
            </div>
        )
      })}
    </>
  )
}

export default UserCard