def on_received_string(receivedString):
    global item
    item = receivedString
    if 0 == item.compare("A"):
        mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_RUN)
    elif item.compare("B") == 0:
        mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_LEFT)
    elif item.compare("C") == 0:
        mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_BACK)
    elif item.compare("D") == 0:
        mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_RIGHT)
    elif item.compare("0") == 0:
        mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
    elif item.compare("E") == 0:
        mbit_Robot.RGB_Car_Big(255, 0, 0)
    elif item.compare("F") == 0:
        mbit_Robot.RGB_Car_Big(0, 255, 0)
    elif item.compare("G") == 0:
        mbit_Robot.RGB_Car_Big(0, 0, 255)
    elif item.compare("H") == 0:
        mbit_Robot.RGB_Car_Big(255, 255, 0)
    elif item.compare("I") == 0:
        mbit_Robot.RGB_Car_Big(0, 0, 0)
radio.on_received_string(on_received_string)

item = ""
radio.set_group(1)
radio.set_transmit_power(7)
basic.show_icon(IconNames.HEART)