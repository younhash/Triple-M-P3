import { Model, DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    {   database: "mp3",
        dialect: "postgres",
    }
)