//% weight=10 color=#006400 icon="\uf1b9" block="Tinybit"
namespace testrobot {

    export class MyRobot extends Robot {
        constructor(){super()}

        move(){
            music.baDing.play()
        }
    }
    robot.currentRobot = new MyRobot(); // libraries can set this field when loading
}

