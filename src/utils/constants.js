import logo from "../assets/main-logo-white-transparent.svg";

export const main_logo = logo;
export const USER_AVATAR =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjI5NGZkMjZlOGMzYmJkMDdiZmRlMWM2YjUyZGFiMCIsInN1YiI6IjY1YWJiNTI5YTg0M2MxMDBiY2I2YWM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p7yNDebLwM-YdiI9b1Yn2tUC8G6y0XkNXmwXenAVM2c",
  },
};

export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2) {
    errors.name = "Must be 2 characters or more";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      values.password
    )
  ) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
