import express from 'express'

const app = express()


app.get('/api/products' , (req , res) => {
  const products = [
    {
        id: 1,
        name: 'table wooden',
        price: 200,
    },
    {
        id: 2,
        name: 'table galss',
        price: 200,
    },
    {
        id: 1,
        name: 'table palstiic',
        price: 150,
    },
    {
        id: 1,
        name: 'table metel',
        price: 300,
    },
    {
        id: 1,
        name: 'table polyester',
        price: 150,
    },
  ]

  if(req.query.search){
    const filterProduct = products.filter(product => product.name.includes(req.query.search))
    res.send(filterProduct);
    return;
  }

  setTimeout(() => {
     res.send(products)
  } , 3000)
})


const port = process.env.PORT || 3000

app.listen(port , () => {
    console.log(`Server running on port ${port}`);
}) 