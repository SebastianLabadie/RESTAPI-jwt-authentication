import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/products.routes'
import usersRoutes from './routes/users.routes'
import authRoutes from './routes/auth.routes'
import {createRoles} from './libs/initialSetup'

const app=express()
createRoles()

app.use(express.json())
app.use(morgan('dev'))
app.use('/products',productsRoutes)
app.use('/auth',authRoutes)
app.use('/users',usersRoutes)


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