function displayCountdown(number) {
    const countdown = document.getElementById('countdown')
    countdown.innerHTML =
        parseInt(number) === 10 ? number : `0${parseInt(number)}`

    const timer = setTimeout(
        () =>
            number === 0
                ? displayCountdown(parseInt(10))
                : displayCountdown(parseInt(number - 1)),
        1000
    )

    return () => clearTimeout(timer)
}

displayCountdown(10)
