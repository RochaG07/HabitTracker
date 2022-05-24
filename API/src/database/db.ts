import {Sequelize} from 'sequelize';

// Inicializa e exporta um novo objeto usando um construtor que espera a configuração do banco.

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/database.sqlite3',
}); 

export {sequelize};