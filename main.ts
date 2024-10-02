input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.showString("process done")
})
input.onGesture(Gesture.FreeFall, function () {
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showString("please put this little device in Audi")
    basic.showIcon(IconNames.Target)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showString("engineers boot up")
})
