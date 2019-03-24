function dropdownClick() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
   var icon = document.getElementsByClassName("fas");
   for (let i = 0; i < dropdown.length; i++) {
     dropdown[i].addEventListener("click", function() {
       var dropdownContent = this.nextElementSibling;
       if (dropdownContent.style.display === "block") {
         dropdownContent.style.display = "none";
         icon[i].className = "fas fa-plus";
       } else {
         dropdownContent.style.display = "block";
         icon[i].className = "fas fa-minus";
       }
     });
   }
}
