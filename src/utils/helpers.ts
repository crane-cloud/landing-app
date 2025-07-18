import moment from "moment";

// Helper function to format dates
export const formatDate = (date: string) => {
  if (!date) return "TBD";

  return moment(new Date(date)).format("D MMMM YYYY");
};
