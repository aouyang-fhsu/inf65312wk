const initApp = () => {
    document.getElementById("resetVehicleListForm").addEventListener("click", resetVehicleListForm);
}

document.addEventListener("DOMContentLoaded", initApp);

const resetVehicleListForm = () => {
    //reset select menus
    const selectMenuOptions = document.querySelectorAll("#make_selection select option");
    selectMenuOptions.forEach(option => {
        if (option.text == "View All Makes" || 
            option.text == "View All Types" || 
            option.text == "View All Classes") {
                option.selected = true;
                option.defaultSelected = true;
        } else {
            option.selected = false;
            option.defaultSelected = false;
        }
    });
    //reset radio buttons
    document.getElementById("sortByPrice").checked = true;
    document.getElementById("sortByPrice").defaultChecked = true;
    document.getElementById("sortByYear").checked = false;
    document.getElementById("sortByYear").defaultChecked = false;
}




