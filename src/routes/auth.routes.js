import {Router} from 'express'
const router = Router()

router.route('/products')
        .get((req,res)=>res.json('getting products'))

export default router