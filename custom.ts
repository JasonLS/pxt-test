//% weight=10 color=#006400 icon="\uf1b9" block="Tinybit"
namespace robot {

    export class MyRobot extends Robot {

        constructor() {
            super()
            
            
        }
        //% blockId="Test" block="Play Music"
        move():void{
            music.baDing.play()
        }
    }

    robot.currentRobot = new MyRobot(); // libraries can set this field when loading

}
