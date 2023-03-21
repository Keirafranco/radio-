radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Holaaa ")
})
radio.setGroup(1)
