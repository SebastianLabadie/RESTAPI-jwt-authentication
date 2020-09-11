import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/products.routes'


const app=express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/products',productsRoutes)

app.set('pkg',pkg)


app.get('/',(req,res)=>{
    res.json({
        name:app.get("pkg").name,
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version,
    })
})

export default app