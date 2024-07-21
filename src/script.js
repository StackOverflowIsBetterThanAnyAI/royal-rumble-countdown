function displayCountdown(number, maxNumber, className) {
    const countdownElements = document.getElementsByClassName(className)
    const displayNumber = /leadingZero/.test(className)
        ? parseInt(number) >= 10
            ? number
            : `0${parseInt(number)}`
        : number

    for (let i = 0; i < countdownElements.length; i++) {
        countdownElements[i].innerHTML = displayNumber
    }

    const timer = setTimeout(
        () =>
            number === 0
                ? displayCountdown(maxNumber, maxNumber, className)
                : displayCountdown(number - 1, maxNumber, className),
        1000
    )

    return () => clearTimeout(timer)
}

displayCountdown(10, 10, 'countdown-10')
displayCountdown(10, 10, 'countdown-10-leadingZero')
displayCountdown(12, 12, 'countdown-12-leadingZero')
