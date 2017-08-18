   window.onload = function(){
	   
	   
var input = document.getElementById("searchInput");
var defaultValue = document.getElementById("searchInput").value;

input.addEventListener("focus", function() {
input.value="";
});

input.addEventListener("blur", function() {
input.value=defaultValue;
});
   var select = document.getElementById("slt_page");

select.addEventListener("change", function() {
var strLink = select.options[select.selectedIndex].value;
//window.location.replace(strLink);
if(strLink!="")
var win = window.open(strLink, '_blank');
});
   
   
   
   
   }
   