const UPDATE_INTERVAL_MILLIS = 750

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const shownDate = new Date()

function clockTick() {
    // Advance one more second
    shownDate.setSeconds(shownDate.getSeconds() + 1)

    updateClockView()
}

function updateClockView() {
    const secondsRatio = shownDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + shownDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + shownDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

var ticks = setInterval (clockTick, UPDATE_INTERVAL_MILLIS)
clockTick()
