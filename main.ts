function Turn_Right () {
    while (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_0)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 15)
        neZha.setMotorSpeed(neZha.MotorList.M2, -5)
    }
    neZha.stopAllMotor()
}
function Line_Follower (speed: number) {
    if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, speed)
        neZha.setMotorSpeed(neZha.MotorList.M2, speed)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, speed)
        neZha.setMotorSpeed(neZha.MotorList.M2, speed * 1.35)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, speed * 1.35)
        neZha.setMotorSpeed(neZha.MotorList.M2, speed)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, speed * 0.35)
        neZha.setMotorSpeed(neZha.MotorList.M2, speed)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, speed)
        neZha.setMotorSpeed(neZha.MotorList.M2, speed * 0.35)
    } else {
        neZha.setMotorSpeed(neZha.MotorList.M1, 15)
        neZha.setMotorSpeed(neZha.MotorList.M2, 15)
    }
}
function Turn_Left () {
    while (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_0)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -5)
        neZha.setMotorSpeed(neZha.MotorList.M2, 15)
    }
    neZha.stopAllMotor()
}
while (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_0)) {
    Line_Follower(15)
}
neZha.stopAllMotor()
neZha.setMotorSpeed(neZha.MotorList.M1, 15)
neZha.setMotorSpeed(neZha.MotorList.M2, 15)
basic.pause(200)
Turn_Right()
while (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_0)) {
    Line_Follower(15)
}
neZha.setMotorSpeed(neZha.MotorList.M1, 15)
neZha.setMotorSpeed(neZha.MotorList.M2, 15)
basic.pause(200)
Turn_Left()
while (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5)) {
    Line_Follower(15)
}
