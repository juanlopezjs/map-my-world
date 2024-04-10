const categoriesRepository = ({
  database,
  baseQueriesRepository,
  baseCommandsRepository,
}) => {
  const { Location } = database.models;

  return {
    ...baseQueriesRepository(Location),
    ...baseCommandsRepository(Location),
  };
};

module.exports = categoriesRepository;
