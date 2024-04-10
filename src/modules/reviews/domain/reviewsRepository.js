const categoriesRepository = ({
  database,
  baseQueriesRepository,
  baseCommandsRepository,
}) => {
  const { Review } = database.models;

  return {
    ...baseQueriesRepository(Review),
    ...baseCommandsRepository(Review),
  };
};

module.exports = categoriesRepository;
