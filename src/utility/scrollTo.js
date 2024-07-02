const scrollTo = (element) => {
    window.scrollTo({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
};

export default scrollTo;