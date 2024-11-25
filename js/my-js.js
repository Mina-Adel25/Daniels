var typed = new Typed('#element', {
    strings: ['Larry Daniels', 'Developer',"Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});




const targetNumbers = [3850, 3000, 9450, 8304];

function animateCount(target, element) {
    let currentNumber = 0;
    const duration = 2000;
    const intervalTime = 20;
    const increment = target / (duration / intervalTime);

    const counter = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= target) {
            currentNumber = target;
            clearInterval(counter);
        }
        element.innerText = Math.floor(currentNumber);
    }, intervalTime);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            animateCount(targetNumbers[index], entry.target);
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('#counter1, #counter2, #counter3, #counter4').forEach((element, index) => {
    observer.observe(element);
});


