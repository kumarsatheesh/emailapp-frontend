let key = {};
if (process.env.NODE_ENV === "production") {

  const API_URL = "http://localhost";
  key = {
    API: `${API_URL}:3002`,
  };
} else {

  const API_URL = "http://localhost";
  key = {
    API: `${API_URL}:3002`,
  };
}

export default key;
