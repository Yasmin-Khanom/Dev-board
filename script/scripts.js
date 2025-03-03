const completesButtons = document.querySelectorAll(".btn-primary")
const assignTask = document.getElementById("assign-tast")
for(const completesButton of completesButtons){
    completesButton.addEventListener('click', () => {
        completesButton.textContent = "✔ Completed";
        completesButton.classList.add("btn-success");
        const remaingTask = parseInt(assignTask.innerText)-1
        assignTask.innerText=remaingTask
            });
}
const addingNumber = document.getElementById("adding-number")
for(const completesButton of completesButtons){
    completesButton.addEventListener('click', () => {
        completesButton.textContent = "✔ Completed";
        completesButton.classList.add("btn-success");
        const remaingTask = parseInt(addingNumber.innerText)+1
        addingNumber.innerText=remaingTask
            });
}






