'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('habits', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name:{
          type: Sequelize.STRING,
          allowNull: false
      },
      repeteableAtTheseDaysOfWeek:{
          type: Sequelize.STRING,
          allowNull: false
      },
      minimalCredit_condition:{
          type: Sequelize.STRING,
      },
      partialCredit_condition:{
          type: Sequelize.STRING,
      },
      fullCredit_condition:{
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        defaultValue: Date.now()
    },
      updatedAt:{
        type: Sequelize.DATE,
        defaultValue: Date.now()
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('habits');
  }
};
