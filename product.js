
var products = [{
   "id": "100",
   "name": "iPhone 4S",
   "brand": "Apple",
   "os": "iOS"
},
{
   "id": "101",
   "name": "Moto X",
   "brand": "Motorola",
   "os": "Android"
},
{
   "id": "102",
   "name": "iPhone 6",
   "brand": "Apple",
   "os": "iOS"
},
{
   "id": "103",
   "name": "Samsung Galaxy S",
   "brand": "Samsung",
   "os": "Android"
},
{
   "id": "104",
   "name": "Google Nexus",
   "brand": "ASUS",
   "os": "Android"
},
{
   "id": "105",
   "name": "Surface",
   "brand": "Microsoft",
   "os": "Windows"
}];
var cmnd = 0;
populate(products);

$("#tbody1").on("click", "#remove", function () {
   $row = $(this).parent();
   $row.hide();
});

$("#headtr").on("change", "select", function () {
   var forthis = $(this).attr("class");
   var value = $(this).val();
   // console.log(sort_by);
   // products = products.sort(function (a, b) { let x = a[sort_by].toLowerCase(); let y = b[sort_by].toLowerCase(); if (x < y) { return -1; } if (x > y) { return 1; } return 0; });
   // populate(products);
   var newArray = products.filter(function (el) {
      return el[forthis] == value;

   });
   populate(newArray);
   // console.log(newArray);
});



$('#search1').click(function () {
   let value = $('#input1').val().toLowerCase();
   var newArray = products.filter(function (el) {
      return (el.id == value || el.name.toLowerCase() == value);

   });
   // $("#tbody1 tr").filter(function () {
   //    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
   // })
   populate(newArray);
})

function populate(arr) {
   var row = "";
   var brand = [];
   var os = [];
   for (let i = 0; i < arr.length; i++) {
      row += '<tr>';
      brand.push(arr[i].brand);
      os.push(arr[i].os);
      $.each(arr[i], function (key, value) {

         row += '<td id="' + key + '">' + value + '</td>';
      });
      row += '<td id="remove">X</td></tr>';
   }
   $('#tbody1').html(row);
   // console.log(os);
   if (cmnd == 0) {
      brandArr = brand.filter((v, i, a) => a.indexOf(v) === i);
      osArr = os.filter((v, i, a) => a.indexOf(v) === i);
      console.log(brandArr);
      $("#filter1").append(optioner(brandArr));
      $("#filter2").append(optioner(osArr));
      cmnd++;
   }

}
function optioner(arr) {
   let tem = "";
   for (let i = 0; i < arr.length; i++) {
      tem += '<option value=' + arr[i] + '>' + arr[i] + '</option>';
   }
   return tem;
}