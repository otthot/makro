//list of subjects within makroeconomics in an array

const list = document.getElementById("subject-list");

const subject_submit = document.getElementById("subject-submit");

const ls_restart_btn = document.getElementById("LS-restart");

const subjects = [
    "BNP (Bruttonationalprodukt)",
    "Inflation",
    "Arbejdsløshed",
    "Økonomisk vækst",
    "Fiscal politik",
    "Pengepolitik",
    "Handelsbalance",
    "Budgetunderskud",
    "Offentlig gæld",
    "Investeringer",
    "Konjunkturcyklus",
    "Valutakurser"
];

ls_restart_btn.addEventListener("click", () => {

    localStorage.clear();
    if(localStorage.getItem("subjects") == null){
        alert("List deleted")
    } else {
        alert("List not deleted")
    }
    localStorage.setItem("subjects", JSON.stringify(subjects));
    window.location.reload();
});



subject_submit.addEventListener("click", () => {

    let currentlist = JSON.parse(localStorage.getItem("subjects"));
    let subject = document.getElementById("subject-input").value;
    
    currentlist.push(subject);
    localStorage.setItem("subjects", JSON.stringify(currentlist));
    let li = document.createElement("li");
    li.innerHTML = subject;

    list.appendChild(li);

})

function LoadListOfSubjects(){

    let currentlist = JSON.parse(localStorage.getItem("subjects"));

    for(let i = 0; i < currentlist.length ; i++){

        let li = document.createElement("li");
        li.innerHTML = currentlist[i];
        list.appendChild(li);
    }

}
LoadListOfSubjects()

