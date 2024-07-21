function displayCountdown(number) {
    const countdownElements = document.getElementsByClassName('countdown-10')
    const displayNumber =
        parseInt(number) === 10 ? number : `0${parseInt(number)}`

    for (let i = 0; i < countdownElements.length; i++) {
        countdownElements[i].innerHTML = displayNumber
    }

    const timer = setTimeout(
        () =>
            number === 0 ? displayCountdown(10) : displayCountdown(number - 1),
        1000
    )

    return () => clearTimeout(timer)
}

displayCountdown(10)
