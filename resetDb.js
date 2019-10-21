import { City, Trail, User } from './models'

const main = async () => {
    await Trail.sync({force:true})
    await City.sync({force:true})
    await User.sync({force:true})
    process.exit()
}
main()