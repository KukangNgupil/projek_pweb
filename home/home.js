function showChefs(cuisine) {
    // Hide menu container
    document.getElementById('menuContainer').style.display = 'none';

    // Show chef list container
    document.getElementById('chefList').style.display = 'flex';

    // Display selected cuisine text
    document.getElementById('selectedCuisineText').getElementsByTagName('p')[0].innerText = cuisine;

    // Display chefs for the selected cuisine
    document.querySelectorAll('.chef-box').forEach(function (box) {
        box.style.display = 'none';
    });

    document.querySelector('.chef-box.' + cuisine.toLowerCase()).style.display = 'flex';
}

function showMenuItems() {
    // Hide chef list container
    document.getElementById('chefList').style.display = 'none';

    // Show menu container
    document.getElementById('menuContainer').style.display = 'flex';
}
