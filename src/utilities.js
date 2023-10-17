export const getDateRest = (date) => {
  const dateRest = Date.parse(date);

  const formatDate = new Date(dateRest);

  const optionDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
  };

  return formatDate.toLocaleString('ru', optionDate);
};
