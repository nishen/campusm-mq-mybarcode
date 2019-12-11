require('./lib/JsBarcode.all.min');

var barcode = JSON.parse(sessionStorage.getItem('barcode'));

// eslint-disable-next-line
JsBarcode('#barcode', barcode, {
  format: 'CODE39',
  displayValue: false
});
