const dcdc = (param) => {
    let dcdc = document.querySelector(param.dcdc);
    let speed = param.speed;
    let message = param.message.split("");

    message.forEach((char, index) => {
        setTimeout(() => {
            dcdc.textContent += char;
        }, speed * index);
    });
};

dcdc({
    dcdc: "#dcdc",
    speed: 70,
    message: "Japan based Security Team!!!"
});