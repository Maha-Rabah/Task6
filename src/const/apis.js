const baseUrl = "http://localhost:3000";

export default {
  courses: {
    get: `${baseUrl}/courses`,
    getById: (id) => `${baseUrl}/courses/${id}`,
    edit: (id) => `${baseUrl}/courses/${id}`,
    add: `${baseUrl}/courses`,
  },
};
