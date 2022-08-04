
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
populate(products);

$("#tbody1").on("click", "#remove", function () {
   $row = $(this).parent();
   $row.hide();
});

$("#filter1").change(function () {
   var sort_by = $(this).val();
   // console.log(sort_by);
   products = products.sort(function (a, b) { let x = a[sort_by].toLowerCase(); let y = b[sort_by].toLowerCase(); if (x < y) { return -1; } if (x > y) { return 1; } return 0; });
   populate(products);
});
$('#search1').click(function () {
   let value = $('#input1').val().toLowerCase();
   $("#tbody1 tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
   })
})

function populate(arr) {
   var row = "";
   for (let i = 0; i < arr.length; i++) {
      row += '<tr>';
      $.each(arr[i], function (key, value) {

         row += '<td id="' + key + '">' + value + '</td>';
      });
      row += '<td id="remove">X</td></tr>';
   }
   $('#tbody1').html(row);
}
