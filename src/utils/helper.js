/**
 * =================================================
 * UTILITY FUNCTIONS RELATED TO THE LOCAL STORAGE
 * =================================================
 * */

export const setItemsIntoLocalStorage = (key, value, isJson = false) => {
  if (isJson) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const getItemsFromLocalStorage = (key, isJson = false) => {
  const item = localStorage.getItem(key);
  if (item) {
    if (isJson) {
      return JSON.parse(item);
    } else {
      return item;
    }
  }
};

/**
 * =================================================
 * CUSTOM VALIDATION
 * =================================================
 * */

export const VALIDATE_USER_DETAIL = (userData) => {
  if (!userData) return false;

  const IS_ANY_FIELD_EMPTY = Object.keys(userData).some(
    (key) => userData[key] === ""
  );

  const IS_EMPTY = IS_ANY_FIELD_EMPTY;
  const ERRORS = [];

  if (IS_ANY_FIELD_EMPTY) return { ERRORS, IS_EMPTY };

  const { username, email, password, phone } = userData;

  const EMAIL_REGEX = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/;
  const PHONE_REGEX = /^[6-9]\d{9}$/;

  if (username && username?.length < 6) {
    ERRORS.push("Username must be 6 characters long");
  }
  if (email && !EMAIL_REGEX.test(email)) {
    ERRORS.push("Invalid email address");
  }
  if (phone && !PHONE_REGEX.test(phone)) {
    ERRORS.push("Invalid phone number");
  }
  if (phone && phone?.length < 10 && phone?.length > 0) {
    ERRORS.push("Phone number must be 10 digits");
  }
  if (password && password?.length < 3 && password?.length > 0) {
    ERRORS.push("Password must be 3 characters long");
  }

  return { ERRORS, IS_EMPTY };
};
