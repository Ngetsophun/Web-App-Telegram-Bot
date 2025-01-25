import IR from "../images/IR.png";
import LED from "../images/LED.png";
import Matrix from "../images/Matrix.png";
import Wheel from "../images/Wheel.png";
import Uno from "../images/Uno.png";
import DriverL298N from "../images/Driver.png";
import Servo from "../images/Servo.png";

export function getData() {
  return [
    { title: "IR", price: 17.99, Image: IR,id:1 },
    { title: "LED", price: 15, Image: LED,id:2 },
    { title: "Matrix", price: 3.5, Image: Matrix ,id:3},
    { title: "Wheel", price: 13.99, Image: Wheel,id:4 },
    { title: "Uno", price: 2.5, Image: Uno,id:5 },
    { title: "DriverL298N", price: 0.99, Image: DriverL298N,id:6 },
    { title: "Servo", price: 2.99, Image: Servo,id:7 },
  ];
}