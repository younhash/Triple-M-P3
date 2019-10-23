import { Trail, State, User } from './models'

const main = async () => {
    await State.sync({force:true})
    await Trail.sync({force:true})
    await User.sync({force:true})
    process.exit()
  
}
main()
