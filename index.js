const listOfNames = Array.from(document.getElementsByClassName("list-item"));
const cancelBtn = document.querySelector("#cancel-btn");
const saveBtn = document.querySelector("#save-btn");

// .check-mark-wrapper-hide
// .check-mark-hide
// .check-mark-show
// .check-mark-wrapper-show

listOfNames.forEach((value)=>{
    const checkMarkWrapper = value.querySelector(".check-mark-wrapper");
    const checkMark = value.querySelector(".fa-check");
    
    checkMarkWrapper.classList.add("check-mark-wrapper-hide");
    checkMark.classList.add("check-mark-hide");

    value.addEventListener("click",()=>{
        value.classList.toggle("not-selected");
        value.classList.toggle("selected");
        checkMarkWrapper.classList.toggle("check-mark-wrapper-hide");
        checkMark.classList.toggle("check-mark-hide");
        
        checkMarkWrapper.classList.toggle("check-mark-wrapper-show");
        checkMark.classList.toggle("check-mark-show");
    });
});