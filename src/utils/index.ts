export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract the month, day, and year
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Format the date as "Month, Day Year"
  return `${month} ${day}, ${year}`;
};

export const checkIsFavorite = (favoriteArray: any, movie: any) => {
  // Assuming 'id' is the unique identifier
  return favoriteArray.some(
    (favoriteMovie: any) => favoriteMovie?.id === movie?.id
  );
};
