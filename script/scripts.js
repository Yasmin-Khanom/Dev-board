const completesButtons = document.querySelectorAll(".completed")
console.log(completesButtons);
const assignTask = document.getElementById("assign-task")
for(const completesButton of completesButtons){
    completesButton.addEventListener('click', () => {
        completesButton.classList.add("btn-success");
        const remaingTask = parseInt(assignTask.innerText)-1
        assignTask.innerText=remaingTask
        completesButton.classList.add("btn-success");
       completesButton.setAttribute("disabled",true);
       const addingNumber = document.getElementById("adding-number")
       addingNumber.innerText = parseInt(addingNumber.innerText)+1
       const title = completesButton.parentNode.parentNode.children[1].innerText
   const activityLog = document.getElementById('History-container');
   console.log(activityLog);
       const activityEnter = document.createElement('p');
       activityEnter.innerText =`completed Task: ${title}`;
       activityLog.appendChild(activityEnter);
         });
            
}

const changeBackground =()=>{
const body = document.querySelector("body")
body.style.backgroundColor=`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
function disable(completesButton){
    completesButton.setAttribute("disabled",true);
}
function handealClick(task){
    console.log(task);
}











