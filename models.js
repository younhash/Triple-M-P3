import { Model, DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    {
        "database": "bikingtrails_db",
        "dialect": "postgres"
    }
)
export class Trail extends Model{}

Trail.init(
    {
    name: DataTypes.STRING,
    summary: DataTypes.STRING,
    imgSqSmall: DataTypes.STRING,
    imgSmall: DataTypes.STRING,
    imgSmallMed: DataTypes.STRING,
    imgMedium:DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    url: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    length: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
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
            state: DataTypes.STRING,
            latitude: DataTypes.INTEGER,
            longitude: DataTypes.INTEGER
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

