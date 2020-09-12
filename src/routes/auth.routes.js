import {Router} from 'express'
import {signIn,signUp} from '../controllers/auth.controller'

const router = Router()


router.route('/signin')
        .post(signIn)

router.route('/signup')
        .post(signUp)

export default router