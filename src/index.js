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

const name = "健太";
const age = 28;
// 「私の名前は健太です。年齢は28です」

/** 従来の方法*/
const massage1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(massage1);

// テンプレート
const massage2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(massage2);
