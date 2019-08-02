namespace robot {

    export class MyRobot extends Robot {

        constructor() {
            super()
            
            
        }
        
        move():void{
            music.baDing.play()
        }
    }

    robot.currentRobot = new MyRobot(); // libraries can set this field when loading

}

