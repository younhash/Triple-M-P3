import { Trail, State, User } from './models'

const main = async () => {
    await Trail.sync({force:true})
    await State.sync({force:true})
    await User.sync({force:true})
    process.exit()
}
main()