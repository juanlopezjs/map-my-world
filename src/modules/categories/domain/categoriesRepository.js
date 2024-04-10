const categoriesRepository = ({
  database,
  baseQueriesRepository,
  baseCommandsRepository,
}) => {
  const { Category } = database.models;

  return {
    ...baseQueriesRepository(Category),
    ...baseCommandsRepository(Category),
  };
};

module.exports = categoriesRepository;
