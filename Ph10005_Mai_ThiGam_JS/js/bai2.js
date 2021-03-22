

function validateForm() {

  // Check cho mã sinh viên
  const a = document.querySelector("#msv").value ;
  console.log(a);
  // die;
  var name = document.forms['hello'].ma_sinh_vien.value;
  if (name == "") {
    var pText = document.getElementById("msv").style.backgroundColor = "yellow"
    return false;
  }
  //Check cho Họ và tên
  var ho_ten = document.forms['hello'].ho_ten.value;
  if (ho_ten == "") {
    alert("Bạn hãy nhập họ tên ");
    var ho = document.getElementById("ho_ten").style.backgroundColor = "yellow";
    return false;
  }

  // check cho Email
  var email = document.forms['hello'].email.value;
  if (email == "") {
    alert("Nhập email của sinh viên là ");
    var ho = document.getElementById("email").style.backgroundColor = "yellow";
    return false;

  }

  // giới tính
  var gioi_tinh = document.forms['hello'].gender.value;
  var ho = document.getElementById("gt");
  if (gioi_tinh == "") {
    alert("Bạn chưa chọn giới tính !!!");
    ho.style.backgroundColor = "yellow";
    return false;
  } else {
    ho.style.backgroundColor = "#ffffff";
  }

  // checkbox
  var so_thich = document.forms['hello'].so_thich.value;
  var so = document.getElementById("so_thich");
  var st = document.getElementsByName('so_thich');
  var dem = -1;
  for (var i = 0; i < st.length; i++) {
    if (st[i].checked) {
      dem++;
    }
  }
  if (dem == -1) {
    alert("Chọn sở thích !!");
    so.style.backgroundColor = "yellow";
    return false;
  } else {
    so.style.backgroundColor = "#ffffff";
  }




  //Quốc tịch
  var country = document.forms['hello'].country.value;
  var quoc_tich = document.getElementById('country');
  var ho;
  if (country == '0') {
    alert("Chọn quốc tịch !!");
    ho = document.getElementById("country").style.backgroundColor = "yellow";
    return false;
  } else {
    ho = document.getElementById("country").style.backgroundColor = "#ffffff";
  }

  //Ghi chú
}
