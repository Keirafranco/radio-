input.onButtonPressed(Button.A, function () {
    radio.sendString("Holaaa ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Estoy bien ")
})
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 191)
