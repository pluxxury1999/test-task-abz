const validateName = (name) => {
    name = name.trim();
    return name.length >= 2 && name.length <= 60;
};

const validateEmail = (email) => {
    // copypasted from https://regexr.com/2rhq7
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email);
};

const validatePhone = (phone) => {
    return /^\+380\d{9}$/.test(phone);
};

const validatePhoto = (photo) => {
    return photo && photo.size <= 5 * 1024 * 1024;
};

export { validateName, validateEmail, validatePhone, validatePhoto }