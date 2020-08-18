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

check["sexe"] = function() {

    let sexe = document.getElementsByName("sexe");
    let tootipStyle = getToolTip(sexe[1].parentNode).style;

    if(sexe[0].checked || sexe[1].checked) {
        tootipStyle.display = "non";
        return true;
    } else {
        tootipStyle.display = "inline-block";
        return false;
    }
    
};




desactivateTooltip();

