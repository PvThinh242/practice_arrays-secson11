// LUYỆN TẬP VÀ THAO TÁC MẢNG

// step 1: Tạo mảng rỗng và thêm các phần tử vào mảng thông qua phương thức push()
// > Tạo mảng rỗng let array =[];
// > Chạy vòng lặp for với i chạy từ 0 đến 10;
// > Với mỗi lần chạy sử dụng phương thức push() để thêm phần tử đó vào mảng array ban đầu;
// > Hiển thị kết quả array;

// let array = [];
// for (let i = 0; i < 11; i++) {
//   array.push(i);
// }
// console.log("used push", array);

// Step 2: Tạo thêm mảng array1 sau đó sửu dụng phương thức unshift() để thêm một phần tử của array1 vào mảng array.
// > Khởi tạo biến a = 10;
// > Sử dụng phương thức unshift() để thêm a vào đầu mảng array:
// > Hiển thị array

// let array = [];
// for (let i = 0; i < 11; i++) {
//   array.push(i);
// }
// console.log("used push - add element to the end of array", array);

// let array1 = 10;
// array.unshift(array1);
// console.log("used unshift - add element to the start of array", array);

// // Step 3: Sử dụng phương thức pop() để xoá phần tử cuối mảng array ban đầu

// array.pop();
// console.log("used pop - delete element to the end of array", array);

// //Step 4: Sử dụng shift() để xoá đi phần tử đầu mảng ban đầu

// array.shift();
// console.log("used shift - delete element to the start of array", array);

// // Step 5: Sử dụng phương thức plice để xoá một or nhiều phần tử của mảng
// // > Với cú pháp array.splice(vị trí index, só lượng muốn xoá,  ) để xoá thành phần trong mảng

// array.splice(2, 3);
// console.log("used plice - Delete one or more of array", array);

// // TÌM GIÁ TRỊ TRONG MẢNG
// Mô tả: Tạo mảng có sẵn với các phần tử số.Cho người dùng nhập vào số bất kì sau đó tiến hành kiểm tra:
//  > Nếu số đó có trong mảng có sẵn thì alert('Bingooo');
//  > Nếu số đó không có trong mảng có sẵn thì alert('Chúc các bạn may mắn lầm sau')

// Step 1: Tạo mảng array và cho người dùng nhập giá trị  của n qua prompt
//   > Tạo mảng array = [1, 2, 3, 4, 5, 6];
//   > Cho người dùng nhập giá trị qua prompt

// Step 2: Kiểm tra biến n xem nó có trùng với phần tử trong mảng bằng cách sử dụng if...else
//  > Khởi tạo biến check = false
//  > Sử dụng vòng lặp để duyệt các phần tử trong mảng
//  > Sử dụng câu lệnh điều kiện if để so sánh các phần tử trong mảng sau mỗi lần duyệt
//  > Nếu n = array[i] thì gán lại giá trị check bằng true

// let array = [1, 2, 3, 4, 5, 6];
// let n = Number(prompt("Enter a number"));
// let check = false;

// for (let i = 0; i < array.length; i++) {
//   if (n == array[i]) {
//     check = true;
//   }
// }

// if (check == true) {
//   alert("Bingooo");
// } else {
//   alert("Wish you luck next time");
// }

// THỰC HÀNH: ĐẢO NGƯỢC VÀ CÁC PHẦN TỬ TRONG MẢNG

// Mô tả: Cho người dùng nhập dãy số bất kì. Sử dụng plit() để chuyển đổi các kiểu dữ liệu từ string sang array.
//        Tiến hành đảo ngược cá phần tử trong mảng.

//  Step 1. Sử dụng split() Để chuyển đổi kiểu string sang array
//  > Cho người dùng nhập vào dãy số bất kì được ngăn cách bởi dấu ' , '
//  > Sử dụng split để chuyển đổi sang array
//  > Hiển thị kết quả

// let n = prompt("Enter a number");
// let convert = n.split(",");
// console.log("convert from string to array", convert);

// Step 2: Sử dụng vòng lăp for để đảo ngược các phần tử trong mảng
// > Tạo mảng rỗng
// > Sử dụng vòng lặp for với điểm bắt đầu i = covert.length - 1, điểm kết thúc i >= 0, bước nhảy i --
// > Hiển thị kết quả

// Way 1
// let n = prompt("Enter a number");
// let convert = n.split(",");
// console.log("convert from string to array", convert);

// let array = [];
// for (i = convert.length - 1; 1 >= 0; i--) {
//   array.push(convert[i]);
//   console.log("Đảo ngược phần tử mảng", array);
// }

// Way 2
// let n = prompt("Enter a number");
// let convert = n.split(",");
// console.log("convert from string to array", convert);

// console.log(
//   " used reverse() - Đảo ngược phần tử trong mảng",
//   convert.reverse()
// );

// [MD01-S15-BT] PRACTICE WITH ARRAYS

// lesson_1: Viết chương trình js để nối các phần tủ trong mảng lại với nhau(Sử dụng phương thức join)

// let array1 = ["Hello", "Rikkei", "Academy"]; // Khai báo
// console.log("used join -Append element in array :", array1.join(" ")); // Nối phần tử mảng

//lesson_2: Viết chương trình đảo ngược các phần tử trong mảng với nhau.Sau đó nối chúng lại
// > Đảo ngược mảng
// > Nối các phần tử mảng

// let array2 = ["Academi", "Rikkei", "Hello"]; // Khai báo
// console.log("used reverse - Reverse element in the array: ", array2.reverse()); // Đảo ngược phần tử mảng
// console.log("used join - Append element in array:", array2.join(" ")); // Nối các phần tử

// lesson_3: Viết 2 cách để xoá phần tử có vị trí index là số 1 trong mảng dưới đây.
//          Sau đó các phần tử còn lại với mảng

// let array3 = ["Hello", "World", "Rikkei", "Academy"];

//  Way 1: Sử dụng phương thức plice
// array3.splice(1, 1);
// console.log("used splice - delete one or more element of array:", array3);
// console.log("used join - Append element in array:", array3.join(" "));

// lesson_4: Viết các chương trình tính tổng các phần tử trong mảng

// let sum = 0;
// for (let i = 1; i < 6; i++) {
//   console.log(`lần ${i}: ${i}`);
//   sum = sum + i;
// }
// console.log("Tổng các phần tử trong mảng là:", sum);

// [MD01 - S15 - BTTH] LUYỆN TẬP VỚI MẢNG

// lesson_1:Viêt chương trinh js cho người dùng nhâp vào chuỗi số bất kì được ngăb cách bởi ' , '
//          Sau đó tính tổng các phần tử chẵn và tổng phần tử lẻ trong chuỗi số đó

// let n = prompt("Enter a number separated by commas");
// let array = n.split(",");
// console.log("convert from string to array", array);

// let sumEven = 0;
// let sumOdd = 0;
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   let number = Number(array[i]); // Chuyển phần tử trong i sang dạng số
//   if (number % 2 == 0) {
//     sumEven = sumEven + number;
//   } else {
//     sumOdd = sumOdd + number;
//   }
//   sum = sumEven + sumOdd;
// }
// console.log(`sum of even elements: ${sumEven}`);
// console.log(`sum of odd elements: ${sumOdd}`);
// console.log(`sum of even and odd elements: ${sum}`);

// lesson_2: Viết chương trình js cho người dùng nhập vào dãy số bất kì ngăn cách bởi dấu ' , '
//           Sau đó tìm số lớn nhất và bé nhất trong dãy số đó

// let n = prompt("Enter a number separated by commas");
// let array = n.split(",");
// console.log("convert from string to array", array);

// let max = Number(array[0]);
// let min = Number(array[0]);

// for (let i = 0; i < array.length; i++) {
//   if (max <= Number(array[i])) {
//     max = Number(array[i]);
//   } else if (min >= Number(array[i])) {
//     min = Number(array[i]);
//   }
// }

// console.log(`The max numbers is: ${max}`);
// console.log(`The min numbers is: ${min}`);

//lesson_3:Viết chương trình js cho người dùng nhập vào dãy số bất kì ngăn cách bởi dấu ' , '
//    Sau đó sắp xếp chuỗi đó từ bé đến lớn bằng 2 cách( sử dụng sort và ko dùng sort)

// let n = prompt("Enter a number separated by commas");
// let array = n.split(",");
// console.log("convert from string to array", array);

// // Sử dụng hàm sort
// let a = array.sort((a, b) => {
//   return a - b;
// });
// console.log(a);

//Sử dung for để duyệt qua từng phần tử sau đó sắp xếp lại chúng
// Sắp xếp từ bé đến lớn
// for (let i = 0; i < array.length; i++) {
//   // Để duyệt qua từng phần tử

//   for (let j = i; j < array.length; j++) {
//     // Để sắp xếp

//     if (Number(array[i]) > Number(array[j])) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

// Sắp xếp từ lớn đến bé
// for (let i = 0; i < array.length; i++) {
//   // Để duyệt qua từng phần tử

//   for (let j = i; j < array.length; j++) {
//     // Để sắp xếp

//     if (Number(array[i]) < Number(array[j])) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

// lesson_4: Cho một mảng có sẵn.Tìm ra phần tử xuất hiện nhiều nhất trong mảng và in ra chúng

// let array = [1, 3, 6, 8, 1, 4, 5, 3, 1, 6, 3];
// let maxCount = 0;
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//   let count = 1; //Đếm số lần xuất hiện trong mảng

//   for (let j = i; j < array.length; j++) {
//     if (array[j] === array[i]) {
//       count = count + 1;
//     }
//   }

//   // Kiểm tra số lần xuất hiện mà nó lớn hơn maxCount thì gán lại maxCount = count
//   // Và push phần tửu đó vào trong mảng
//   if (count > maxCount) {
//     maxCount = count;
//     newArray = [array[i]];
//   }

//   // Nếu số lần xuất hiện mà băng maxCount thì push array[i] vào trong mảng array
//   else if (count === maxCount) {
//     newArray.push(array[i]);
//   }
// }

// console.log("Phần tử xuất hiện nhiều nhất:" + newArray.join(","));

// lesson_5: Tạo một ứng dụng to do list
//         Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
//         C - Cho người dùng nhập toàn bộ nội dung công việc mới,thêm công việc mới vào cuối mảng.
//             Sau đó in toàn bộ các pt trong mảng
//         R - In ra toàn bộ phần tủ trong to do list
//         U - Hỏi người dùng vị trí công việc muốn cập nhật.sau đó cho người dùng nhâp nội dung muốn update.
//             Tiến hành update và in ra toàn bộ phần tử trong to do list
//         D - Hỏi ngừoi dùng vị trí công việc muốn xoá.Tiến hành xoá và tin ra toàn bộ phần tử trong to do list
//         E - Biến chương trinh thành vòng lặp vĩnh cửu và khi người dùng nhâp  E vào sẽ thoát khỏi chương trình

let todoList = ["Go to school at 7pm", "Read book at 12am"];
let state = true;

while (state) {
  let input = prompt("Enter a C,R,U,D,E");
  switch (input) {
    case "C":
      let newJob = prompt("new job content");
      todoList.push(newJob); //  Thêm vào cuối mảng
      console.log(todoList); // In mảng
      break;

    case "R":
      console.log(todoList.join(",")); // In mảng
      break;

    case "U":
      let updateJob = Number(prompt("Where do you want to update?")); // Chỗ muốn update
      let updateInfo = prompt(" Enter a content update"); //   Nội dung update
      todoList[updateJob] = updateInfo; //    Tiến hành update
      console.log(todoList); //      In
      break;

    case "D":
      let deleteJob = Number(prompt(" Where do you want to delete")); // chỗ cần xoá
      todoList.splice(deleteJob, 1); //  Tiến hành xoá
      console.log(todoList); // in
      break;

    case "E":
      state = false;
      break;

    default:
      alert("Unsuccess");
  }
}
