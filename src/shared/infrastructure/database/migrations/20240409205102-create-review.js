module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reviews", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      id_location: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "Locations", key: "id" },
      },
      id_category: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "Categories", key: "id" },
      },
      date_review: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Reviews");
  },
};
