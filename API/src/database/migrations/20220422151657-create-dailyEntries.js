'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dailyEntries', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      minimalCredit_RequirementWasMet:{
          type: Sequelize.BOOLEAN,
          defaultValue: false
      },
      partialCredit_RequirementWasMet:{
          type: Sequelize.BOOLEAN,
          defaultValue: false
      },
      fullCredit_RequirementWasMet:{
          type: Sequelize.BOOLEAN,
          defaultValue: false
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
    await queryInterface.dropTable('dailyEntries');
  }
};
