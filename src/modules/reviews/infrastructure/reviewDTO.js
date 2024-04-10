const reviewDTO = (
  id,
  locationId,
  locationName,
  latitude,
  logitude,
  categoryId,
  categoryName,
  createdAt,
  updatedAt
) => ({
  id,
  locationId,
  locationName,
  location: {
    latitude,
    logitude,
  },
  categoryId,
  categoryName,
  createdAt,
  updatedAt,
});

module.exports = reviewDTO;
