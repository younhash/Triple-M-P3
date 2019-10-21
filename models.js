<<<<<<< HEAD
import { Model, DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    {   database: "mp3",
        dialect: "postgres",
    }
)
=======
import { Model, DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    {
        database: "bikingtrails_db",
        dialet: "postgres"
    }
)
export class Trails extends Model{}

Trail.init(
    {
      name: DataTypes.STRING,
      summary: DataTypes.STRING,
      image: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      difficulty: DataTypes.STRING,
      length: DataTypes.INTEGER,
      latitude: DataTypes.INTEGER,
      longitude: DataTypes.INTEGER,
      url: DataTypes.STRING
    },
    {
    freezeTableName: true,
    tableName: "Trails",
    sequelize
    },
)

export class City extends Model{}

    City.init(
        {
            name: DataTypes.STRING,
            latitude: DataTypes.INTEGER,
            longitude: DataTypes.INTEGER,
            state: DataTypes.STRING
        },
        {
            freezeTableName: true,
            tableName: "Cities",
            sequelize
        }
    )

    export class User extends Model{}

    User.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            alias: DataTypes.STRING,
        },
        {
            freezeTableName: true,
            tableName: "Users",
            sequelize
        }
    )
>>>>>>> origin/Marcos
