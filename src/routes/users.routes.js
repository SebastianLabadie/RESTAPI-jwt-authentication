import {Router} from 'express'
const router = Router()

router.route('/')
        .get((req,res)=>console.log('HOLU'))

export default router