var a = null, b = null, o = null;

function toan_hang(x){
  if(a == null){
    a = x;
    document.getElementById('result').innerText = a;
  }
  else if(b == null){
    b = x;
    document.getElementById('result').innerText = a + ' ' + o + ' ' + b;
  }
}

function toan_tu(x){
  if(a != null && b == null){
    o = x;
    document.getElementById('result').innerText = a + ' ' + o;
  }
}

function lam_lai(){
  a = null;
  b = null;
  o = null;
  document.getElementById('result').innerText = '';
}

function thuc_hien(){
  if(a != null && b != null && o != null){
    var c;
    switch (o) {
      case '+':
        c = a + b;
        break;
      case '-':
        c = a - b;
        break;
      case '*':
        c = a * b;
        break;
      case '/':
        if(b != 0){
          c = a / b;
        }
        else{
          c = "Không thể chia cho 0";
        }
        break;
      default:
        c = o + ' không phải toán tử';
    }
    document.getElementById('result').innerText = c;
    lam_lai();
  }
}
