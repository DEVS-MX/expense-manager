function toggleModal() {
    let modal = document.querySelector("#modal-1");
    let addItem = document.querySelector(".addItem");
    let closeModal = document.querySelector(".close")
    addItem.addEventListener("click", function() {
        console.log("Listen!")
        if(modal.hasAttribute("class", "modal hidden")) {
            modal.setAttribute("class", "modal")
            console.log("Good")
        }

        else {
            modal.setAttribute("class", "modal hidden")
            console.log("Bad")
        }
    });

    closeModal.addEventListener("click", function() {
        if (!modal.hasAttribute("class", "modal")) {
            modal.setAttribute("class", "modal hidden")
            console.log("Good")
        }
        else {
            modal.setAttribute("class", "modal hidden")
            console.log("Bad")
        }
    })
}

toggleModal();