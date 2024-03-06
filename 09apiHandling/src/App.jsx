import { useState  , useEffect} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data , setData] = useState([])
  const [error ,setError] = useState(false)
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    // ;(async () =>{
    //   try {
    //     setLoading(true)
    //      setError(false)
    //      const response = await fetch('https://reqres.in/api/users/')
    //      const json =  await response.json()
    //      console.log(response)
    //      setData(json.data)
    //      setLoading(false)
    //   } catch (error) {
    //     setError(true)
    //     setLoading(false)
    //   }
    // })()
    setLoading(true)
    setTimeout( async () => {
            try {
              setError(false)
              const response = await axios.get('https://fakestoreapi.com/products')
              console.log(response)
              setData(response.data)
              setLoading(false)
           } catch (error) {
             setError(true)
             setLoading(false)
           }
    
    }, 3000);
  
    
  }, [])
  
 
  return (
    <>
     
      <h1>API Handling</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Somthing went wrong</h1>}
      <p>{data.page}</p>
      <div className='grid grid-cols-4 gap-3'>
      {data.map((user) => {
    return (
        <div key={user.id} className="max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl bg-slate-700">
            <img className="w-80 h-96 object-cover" src={user.image} alt={user.title} />
            <div className="px-6 py-4">
                <p className="text-xl mb-2">  
                    <strong>{user.title}</strong>
                </p>
                <p className="text-center">
                    Price:${user.price}
                </p>
                <p className='mt-2 text-xs text-justify'>
                  {user.description}
                </p>
            </div>
        </div>
    );
})}



      </div>

    </>
  )
}

export default App
