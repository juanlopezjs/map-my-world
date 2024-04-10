const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {
        foreignKey: "id_category",
      });
      this.belongsTo(models.Location, {
        foreignKey: "id_location",
      });
    }
  }
  Review.init(
    {
      id_location: DataTypes.STRING,
      id_category: DataTypes.STRING,
      date_review: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
