input.onButtonPressed(Button.A, function () {
    if (Password_doer_or_not == true) {
        if (Password == 4) {
            Password += 1
        } else if (Password == 8) {
            Password += 1
        } else if (Password == 9) {
            Password += 1
        } else if (Password == 10) {
            Password += 1
        } else if (Password == 11) {
            Password += 1
        } else if (Password == 12) {
            Password += 1
        } else if (Password == 13) {
            Password += 1
        } else if (Password == 15) {
            Password += 1
        } else if (Password == 19) {
            Password += 1
        } else if (Password == 24) {
            Password += 1
        } else if (Password == 26) {
            Password += 1
        } else if (Password == 28) {
            Password += 1
        } else if (Password == 29) {
            Password += 1
        } else if (Password == 32) {
            Password += 1
        } else if (Password == 34) {
            Password += 1
        } else if (Password == 35) {
            Password += 1
        } else if (Password == 37) {
            Password += 1
        } else if (Password == 42) {
            Password += 1
        } else if (Password == 44) {
            Password += 1
        } else if (Password == 47) {
            Password += 1
        } else if (Password == 50) {
            Password += 1
        } else {
            Password += 1
            wrong_passcode = Password
        }
        if (Password == 50) {
            if (wrong_passcode >= 1) {
                radio.sendNumber(0)
                for (let index = 0; index < 20; index++) {
                    music.playMelody("C5 - C5 - C5 - C5 - ", 2000)
                }
            } else if (wrong_passcode == 0) {
                radio.sendNumber(1)
            }
        }
    } else if (Password_doer_or_not == false) {
        basic.showString("Press A+B to start entering code ")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Password_doer_or_not == true) {
        Password_doer_or_not = false
        basic.showString("password entering stopped, press A or B for instructions ")
    } else if (Password_doer_or_not == false) {
        Password_doer_or_not = true
        basic.showString("Enter password")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Password_doer_or_not == true) {
        if (Password == 1) {
            Password += 1
        } else if (Password == 2) {
            Password += 1
        } else if (Password == 3) {
            Password += 1
        } else if (Password == 5) {
            Password += 1
        } else if (Password == 6) {
            Password += 1
        } else if (Password == 7) {
            Password += 1
        } else if (Password == 11) {
            Password += 1
        } else if (Password == 14) {
            Password += 1
        } else if (Password == 16) {
            Password += 1
        } else if (Password == 17) {
            Password += 1
        } else if (Password == 18) {
            Password += 1
        } else if (Password == 20) {
            Password += 1
        } else if (Password == 21) {
            Password += 1
        } else if (Password == 22) {
            Password += 1
        } else if (Password == 23) {
            Password += 1
        } else if (Password == 25) {
            Password += 1
        } else if (Password == 27) {
            Password += 1
        } else if (Password == 30) {
            Password += 1
        } else if (Password == 31) {
            Password += 1
        } else if (Password == 33) {
            Password += 1
        } else if (Password == 36) {
            Password += 1
        } else if (Password == 38) {
            Password += 1
        } else if (Password == 39) {
            Password += 1
        } else if (Password == 40) {
            Password += 1
        } else if (Password == 41) {
            Password += 1
        } else if (Password == 43) {
            Password += 1
        } else if (Password == 45) {
            Password += 1
        } else if (Password == 46) {
            Password += 1
        } else if (Password == 48) {
            Password += 1
        } else if (Password == 49) {
            Password += 1
        } else {
            Password += 1
            wrong_passcode = Password
        }
    } else if (Password_doer_or_not == false) {
        basic.showString("You have three attempts to get the password until another person will come in and stop you from stealing my chocy milk ")
    }
})
let wrong_passcode = 0
let Password = 0
let Password_doer_or_not = false
radio.setGroup(1.7976931348623157e+308)
Password_doer_or_not = false
Password = 1
music.setVolume(127)
