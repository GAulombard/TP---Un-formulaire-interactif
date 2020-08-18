// desctivate tooltip
function desactivateTooltip () {
    let tooltips = document.querySelectorAll(".tooltip");

    for(let i=0; i < tooltips.length ; i++) {
        tooltips[i].style.display = "none";
    }

}

//allow recovering tooltip
function getToolTip(element) {
    while(element = element.nextSibling) {
        if(element.className === "tooltip") {
            return element;
        }
    }
    return false;
}


// checking the form
let check = {}; //an literal object

check["sex"] = function() {


    
};




desactivateTooltip();

