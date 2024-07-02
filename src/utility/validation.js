const validateName = (name) => {
    name = name.trim();
    return name.length >= 2 && name.length <= 60;
};

const validateEmail = (email) => {
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return emailRegex.test(email);
};

const validatePhone = (phone) => {
    const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/;
    return phoneRegex.test(phone);
  };

// creating a new image object and checking its width and height via Promise
// function awaiting promise result and returning boolean value
const validatePhotoSize = async (photo) => {
    const validateSize = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const minWidth = img.width >= 70 && img.height >= 70;
            resolve(minWidth);
        };
        img.src = URL.createObjectURL(photo);
    });
    return await validateSize.then((result) => result);
};

const validatePhoto = (photo) => {
    if (!photo || !photo.type.startsWith("image/")) {
        return false;
    }
    const validateMb = photo.size <= 5 * 1024 * 1024;
    const validatePx = validatePhotoSize(photo);

    const result = validateMb && validatePx;

    return result;
};

export { validateName, validateEmail, validatePhone, validatePhoto };
