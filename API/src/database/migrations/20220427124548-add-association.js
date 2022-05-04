'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'dailyEntries',
      'habitId',
      {
        type: Sequelize.INTEGER,
        references:{
          model: 'habits',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('dailyEntries', 'habitId');
  }
};