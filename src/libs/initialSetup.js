import rol from '../models/Rol'

export const createRoles=async()=>{
    try {
        const count = await rol.estimatedDocumentCount()

        if(count > 0 ) return

        const values= await Promise.all([
            new rol({name:'user'}).save(),
            new rol({name:'admin'}).save(),
            new rol({name:'moderator'}).save()
        ])

        console.log(values)

    } catch (error) {
        console.error(error)
    }
}