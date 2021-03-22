// 
const options = [
  'All',
  '50-300',
  '300-500',
  '500-700',
  '700-900'
];

const products = [
  {
    name: 'Iphone 2',
    value: 50
  },
  {
    name: 'Iphone 3',
    value: 700
  },
  {
    name: 'Iphone 9',
    value: 100
  },
  {
    name: 'Macbook Pro',
    value: 200
  },
  {
    name: 'Dell inprison',
    value: 300
  },
  {
    name: 'Kindle paperwhite',
    value: 400
  },
  {
    name: 'Huawei mate 30',
    value: 500
  },
  {
    name: 'Samsung note 9',
    value: 600
  },
  {
    name: 'Galaxy X20',
    value: 700
  },
  {
    name: 'Iphone 12',
    value: 800
  },
  {
    name: 'Hp inprison',
    value: 900
  },
  {
    name: 'SamSung J8',
    value: 1000
  },
  {
    name: 'Iphone Xpto',
    value: 1030
  },
  {
    name: 'HP pro',
    value: 1200
  },
  {
    name: 'Galaxy X20',
    value: 1300
  },
  {
    name: 'Iphone 12',
    value: 1500
  },
];

// generate select
const select = document.querySelector('select');
const table = document.querySelector('table');
const tBody = document.querySelector('tbody');

const sumary = document.getElementById('sumary');

const selectAll = document.getElementById('selectAll');

// tao cac option cho select

options.forEach(option => {
  select.add(new Option(option, option));
})

// tao event cho select
select.onchange = function () {

  renderTableRow(this.value);
  
}

function renderTableRow(filterText = 'All') {

  var min = 0, max = 0;
  if (filterText === 'All') {

    min = 0;
    // https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Infinity
    max = Infinity;

  } else {

    // https://www.w3schools.com/jsref/jsref_split.asp
    const arrLimit = filterText.split('-');
    min = arrLimit[0];
    max = arrLimit[1];

  }

  // xoa gia tri cu table 
  tBody.innerHTML = '';

  products.forEach(product => {

    if (product.value >= min && product.value <= max) {

      // tao row va them class
      let row = tBody.insertRow(); // tao tr
      row.setAttribute('class', 'row');

      // https://www.it-swarm.dev/vi/javascript/cach-su-dung-ky-tu-backtick-trong-javascript/1049826696/
      // them checkbox
      let tdCheckbox = row.insertCell(); // tao td
      tdCheckbox.innerHTML = `<input type="checkbox" class="tdCb" value='${product.value}'>`;

      let tdProdName = row.insertCell();
      tdProdName.innerHTML = product.name;

      let tdProdValue = row.insertCell();
      tdProdValue.innerHTML = product.value;

      let tdInput = row.insertCell();
      tdInput.innerHTML = '<input type="number" value="0" disabled class="tdSL">';

      let tdThanhTien = row.insertCell();
      tdThanhTien.innerHTML = '<span class="tdThanhTien">0</span>';

    }

  });

  initEvents();

  // tinh tong tien
  tinhTongTien();
}


selectAll.onchange = function () {

  const checkboxes = tBody.getElementsByClassName('tdCb');
  const inputs = tBody.getElementsByClassName('tdSL');
  const tdThanhTien = tBody.getElementsByClassName('tdThanhTien');

  if (this.checked) {

    for (let i = 0; i < checkboxes.length; i++) {
      if (this.checked) {
        checkboxes[i].checked = true;
        inputs[i].removeAttribute('disabled');
        const value = checkboxes[i].value * inputs[i].value;
        tdThanhTien[i].innerText = value;
      }
    }

  } else {

    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
      inputs[i].setAttribute('disabled', true);
      tdThanhTien[i].innerText = 0;
    }

  }

  tinhTongTien();
  // tinhTongTien2();
}

function initEvents() {

  const checkboxes = tBody.getElementsByClassName('tdCb');
  const inputs = tBody.getElementsByClassName('tdSL');
  const tdThanhTien = tBody.getElementsByClassName('tdThanhTien');

  for (let i = 0; i < checkboxes.length; i++) {

    checkboxes[i].onchange = function () {
      if (this.checked) {
        // cho nhap input
        inputs[i].removeAttribute('disabled');
        // tinh thanh tien
        const value = checkboxes[i].value * inputs[i].value;
        tdThanhTien[i].innerHTML = value;

      } else {

        inputs[i].setAttribute('disabled', true);
        tdThanhTien[i].innerHTML = 0;

      }

      //tinh lai tong tien
      tinhTongTien();
      // tinhTongTien2();
    };
  }

  for (let i = 0; i < inputs.length; i++) {

    inputs[i].onchange = function () {
      if (inputs[i].value < 0) {

        alert('Vui lòng nhập số > 0');
        inputs[i].value = 0;

      } else {

        //tinh thanh tien
        const value = checkboxes[i].value * inputs[i].value;
        tdThanhTien[i].innerHTML = value;
        tinhTongTien();
        // tinhTongTien2();

      }
    };

  }

}



function tinhTongTien() {
  var sum = 0;

  const checkboxes = tBody.getElementsByClassName('tdCb');
  const inputs = tBody.getElementsByClassName('tdSL');

  for (let i = 0; i < checkboxes.length; i++) {

    if (checkboxes[i].checked === true) {
      sum += checkboxes[i].value * inputs[i].value;
    }

  }

  sumary.innerHTML = sum;
}

function tinhTongTien2() {
  console.log('tinh tong tien2');
  var sum = 0;

  const rows = tBody.getElementsByClassName('row');
  const checkboxes = tBody.getElementsByClassName('tdCb');
  const inputs = tBody.getElementsByClassName('tdSL');

  for (var i = 0; i < checkboxes.length; i++) {

    if (checkboxes[i].checked === true && !rows[i].classList.contains('d-none')) {
      sum += checkboxes[i].value * inputs[i].value;
    }

  }

  sumary.innerHTML = sum;
}





