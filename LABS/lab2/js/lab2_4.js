const theList = ['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']]; // Dòng này khởi tạo một mảng với các giá trị khác nhau.
theList.shift(); // Dòng này xóa phần tử đầu tiên của mảng.
theList.pop(); // Dòng này xóa phần tử cuối cùng của mảng.
theList.unshift('FIRST'); // Dòng này thêm 'FIRST' vào đầu mảng.
theList.splice(3, 0, 'hello world'); // Dòng này chèn 'hello world' vào vị trí thứ 3 trong mảng.
theList.splice(2, 0, 'middle'); // Dòng này chèn 'middle' vào vị trí thứ 2 trong mảng.
theList.push('LAST'); // Dòng này thêm 'LAST' vào cuối mảng.
console.log(theList); // Dòng này in mảng ra console.
alert(theList); // Dòng này hiển thị mảng trong một hộp thông báo.
