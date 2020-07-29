function filter(){

    var value, name, item, i;

    value = document.getElementById("type-box").value.toUpperCase();
    item = document.getElementsByClassName("list-box");

    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("box");
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        item[i].style.display = "";
      }else{
        item[i].style.display = "none";
      }
    }
  }