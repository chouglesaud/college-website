
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(17.474400816455308,73.61422419548035),
  zoom:5,
};
var map = new google.maps.Map(document.querySelector(".mapcont"),mapProp);
let map2 = new google.maps.getCenter(17.474400816455308,73.61422419548035);
console.log(map2);

}
myMap();