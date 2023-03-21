input.onButtonPressed(Button.A, function () {
    radio.sendString("Holaaa ")
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Estoy bien ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 191)
