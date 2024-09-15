radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (0 == item.compare("A")) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    } else if (item.compare("B") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Left)
    } else if (item.compare("C") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
    } else if (item.compare("D") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Right)
    } else if (item.compare("0") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    } else if (item.compare("E") == 0) {
        mbit_Robot.RGB_Car_Big(255, 0, 0)
    } else if (item.compare("F") == 0) {
        mbit_Robot.RGB_Car_Big(0, 255, 0)
    } else if (item.compare("G") == 0) {
        mbit_Robot.RGB_Car_Big(0, 0, 255)
    } else if (item.compare("H") == 0) {
        mbit_Robot.RGB_Car_Big(255, 255, 0)
    } else if (item.compare("I") == 0) {
        mbit_Robot.RGB_Car_Big(0, 0, 0)
    }
})
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
