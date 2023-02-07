/**
 *
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数は再宣言可能";
// console.log(val1);

//

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数を上書き";
// // console.log(val3);

// onst val3 = "const変数を再宣言";
// console.log(val3);

// const val4 = {
//   name: "健太",
//   age: 28
// };
// val4.name = "Kenta";
// val4.addres = "Kyoto";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "健太";
// const age = 28;
// // 「私の名前は健太です。年齢は28です」

// /** 従来の方法*/
// const massage1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(massage1);

// // テンプレート
// const massage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

// // function func1(str) {
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 *
 */

// const myProfile = {
//   name: "健太",
//   age: 28
// };

// const massage1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(massage1);

// const { name, age } = myProfile;
// const massage2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(massage2);

// const myProfile = [`健太`, 28];

// const massage3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(massage3);

// const [name, age] = myProfile;
// const massage4 = `名前は${name}です。年齢は${age}です。`;
// console.log(massage4);

/**デフォルト値など */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("健太");

/**スプレッド構文 */

// const arrl = [1, 2];
// console.log(arrl);
// console.log(...arrl);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arrl[0], arrl[1]);
// sumFunc(...arrl);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

/**配列のコピー、結合 */

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// console.log(arr

const nameArr = ["田中", "山田", "茂木"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
