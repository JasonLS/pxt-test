namespace robot {

    export class MyRobot extends Robot {

        constructor() {
            super()
        }
        //% blockId="gigglebot_stop_motor" block="Stop %which motor |"
        move() {
            music.baDing.play()
        }

    }



    robot.currentRobot = new MyRobot(); // ß libraries can set this field when loading

}
