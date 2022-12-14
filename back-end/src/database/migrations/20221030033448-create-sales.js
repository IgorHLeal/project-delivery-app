"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: "users", key: "id" },
        allowNull: false,
        field: "user_id",
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sellerId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: "users", key: "id" },
        allowNull: false,
        field: "seller_id",
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
        field: "total_price"
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "delivery_address"
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "delivery_number",
      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "sale_date",
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
