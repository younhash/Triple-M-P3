import { Model, DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    "database": "bikingtrails_db",
    "dialect": "postgres"
});

// trail model
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
        length: DataTypes.DOUBLE,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,
    },
    {
        freezeTableName: true,
        tableName: "Trails",
        sequelize
    },
)

// city model
export class City extends Model{}
City.init(
    {
        name: DataTypes.STRING,
        state: DataTypes.STRING,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,
    },
    {
        freezeTableName: true,
        tableName: "Cities",
        sequelize
    }
)

// user model
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
City.hasMany(Trail, {onDelete: 'cascade'});
Trail.belongsTo(City)
