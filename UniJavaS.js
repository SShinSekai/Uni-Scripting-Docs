let lastShow = localStorage.getItem("lastShow") || "introduction";

function showdorpdownbutton(id){
   if(id){
    let dropdowngroup = document.getElementById(id);
     if(dropdowngroup.style.display === "none"){
       dropdowngroup.style.display = "block"
    }else{
        dropdowngroup.style.display = "none"
    }
   }else{
   }
}

function show(page,id) {

    let sections = document.querySelectorAll('.content > div');

    sections.forEach(sec => {
        sec.style.display = "none";
    });

    if (page == null) {
        document.getElementById(lastShow).style.display = "block";
    } else {
        lastShow = page;

        localStorage.setItem("lastShow", page);

        document.getElementById(page).style.display = "block";

        console.log(lastShow);
    }
    showdorpdownbutton(id)
}

function scrollto(id,page){
    show(page,null)
    let target =  document.getElementById(id);
    target.scrollIntoView({behavior:"smooth"})
}

function toggleinfo(infoid){
    let info = document.getElementById(infoid);
    if(info.style.display === "none"){
        info.style.display = "block"
    }
    else{
        info.style.display = "none"
    }
}