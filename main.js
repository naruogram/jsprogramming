"use strict";

//2-1
//let rateNumber=(number1, number2)=>{
//     return number1/number2*100+"%";
//}
//
//const Numbers= rateNumber(30, 60);
//console.log(Numbers);


//2-2
//let circleArea=()=>{
//    const radius= 2;
//    return radius*radius*3.14;
//}
//
//const area= circleArea();
//console.log(area);


//2-3
//const nowTime= new Date();
//
//const hour= formatTime(nowTime.getHours());
//const min= formatTime(nowTime.getMinutes());
//const sec= formatTime(nowTime.getMinutes());

//function formatTime(val){
//    return ("0" + val).slice(-2);
//}

//console.log(`${hour}:${min}:${sec}`);


//2-4
//const season= new Date();

//const month= season.getMonth();

//switch(month){
//    case 2:
//    case 3:
//    case 4:
//    console.log("春");
//    break;
//
//    case 5:
//    case 6:
//    case 7:
//    console.log("夏");
//    break;
//
//    case 8:
//    case 9:
//    case 10:
//    console.log("秋");
//    break;
//
//    case 11:
//    case 12:
//    case 1:
//    console.log("冬");
//    break;
//
//    default:
//        console.log("?");
//}
//
//
//2-5✖️
//let TotalPrice=(money)=>{
//    const HundredYen= money/100;
//    const number1= Math.floor(HundredYen);
//
//    return `100円玉${number1}枚`;
//}
//
//const result=TotalPrice(12345);
//console.log(result);


//3-1✖️
//for(let i=1; i<10; i++){
//    console.log();
//
//    for(let j=1; j<10; j++){
//        console.log(i*j);
//    }
//}
//
//
//3-2✖️
//for(let i=1; i<=10; i++){
//    if(i%2===0){
//        console.log("-");
//    }else{
//        console.log("*");
//    }
//}
//
//
//3-3△
//let pyramid=(n)=> {
//    for (let row = 0; row < n; row++) {
//      let stair = '';
//  
//      for (let column = 0; column < n; column++) {
//        if (column <= row) {
//          stair += '#';
//        } else {
//          stair += ' ';
//        }
//      }
//      console.log(stair);
//    }
//  }
//
//pyramid(10);
//
//
//3-4✖️
//const TotalNum=(number1, number2)=>{
//    const array1= Array.from(number1);
//    const array2= Array.from(number2);
//
//    const rev1= array1.reverse();
//    const rev2= array2.reverse();
//
//    const revNum1= Number(rev1.join(""));
//    const revNum2= Number(rev2.join(""));
//
//    console.log(revNum1+revNum2);
//}
//
//TotalNum(453,234);
//
//3-5✖️
//const students = (score)=>{
//    if(score=100){
//        console.log("*");
//    }else if(90<=score && score<100){
//        console.log("/");
//    }else{
//        console.log("?");
//    }
//}
//
//const EveryScores=students(17,38,100,95,23,62,77,45,69,81,83,51,42,36,60);
//
//
//４−１
//const Numbers5= [24,19,3,25,40];
//Numbers5.sort((a,b)=>{
//    return a - b;
//})
//console.log(Numbers5[3]);
//
//4-2△
//for(let i=1; i<=50; i++){
//    if(i%3===0){
//        console.log("WOW");
//    }else{
//        console.log(i);
//    }
//}
//
//
//4-3
//const shuffle = ([...array]) => {
//    for (let i = array.length - 1; i >= 0; i--) {
//      const j = Math.floor(Math.random() * (i + 1));
//      [array[i], array[j]] = [array[j], array[i]];
//    }
//    return array;
//  }
//
//const array=[0,1,2,3,4,5,6,7,8,9];
//console.log(shuffle(array));
//
//
//4-4
//let numbers = [45,65,34,76,12];
//
//numbers.sort((a, b) => {
//    return a - b
//});
//
//console.log(numbers);
//
//
//4-6△
//const nowTime= new Date();
//
//const hour= formatTime(nowTime.getHours());
//const min= formatTime(nowTime.setMinutes(nowTime.getMinutes()+45));
//
//
//function formatTime(val){
//    return ("0" + val).slice(-2);
//}
//
//console.log(`${hour}:${min}`);
//
//
//4-7
//let str="Suzuki,Yamada,Sato,Ito,Tanaka,Takahashi,Ando";
//let arr=str.split(',');
//
//arr.sort((f, s)=>{
//	const a = f.toLowerCase(); 
//	const b = s.toLowerCase();
//	if (a < b) return -1;
//	if (a > b) return 1;	
//});
//
//console.log(arr);

//4-8
//const str="こはるはるここはるここはるはるここはるこはるはるはる";
//const count = ( str.match( /こ/g ) || [] ).length ;
//console.log(`こ:${count}`);
//
//const count1= (str.match( /は/g ) || [] ).length ;
//console.log(`は:${count1}`);


//5-1✖️
//const profiles = {
//    profiles: [
//      {
//        name: "佐藤",
//        age: 22
//      },
//      {
//        name: "鈴木",
//        age: 34
//      },
//      {
//        name: "高橋",
//        age: 42
//      },
//      {
//        name: "田中",
//        age: 15
//      }
//    ]
//  };
//console.log(profiles.profiles[0]);


//5-2
