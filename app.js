let slider = document.getElementById('slider');
let view = document.querySelector('#view');
let money = document.querySelector('#cost');
let discount = document.querySelector('#check');




discount.onchange = calculate;
slider.onchange = calculate;


function calculate() {
    let pageViews = slider.value * 10;
    view.innerHTML = slider.value * 10 + "K";


    discountChecker(pageViews);
}

slider.addEventListener('input', () => {
    let x = slider.value;
    let color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(224, 65% , 95% )' + x + '% )';
    slider.style.background = color;
});


function discountChecker(pageViews) {
    if (pageViews <= 50) {
        if (discount.checked) {
            money.innerHTML = "$6.00";
        } else {
            money.innerHTML = "$8.00";

        }
    } else if (pageViews > 50 && pageViews <= 100) {
        if (discount.checked) {
            money.innerHTML = "$9.00";
        } else {
            money.innerHTML = "$12.00";
        }
    } else if (pageViews > 100 && pageViews <= 500) {
        if (discount.checked) {
            money.innerHTML = "$12.00";
        } else {
            money.innerHTML = "$16.00";
        }
    } else if (pageViews > 500 && pageViews < 1000) {
        if (discount.checked) {
            money.innerHTML = "$18.00";
        } else {
            money.innerHTML = "$24.00";
        }
    } else if (pageViews == 1000) {

        view.innerHTML = "1 M";
        if (discount.checked) {
            money.innerHTML = "$27.00";
        } else {
            money.innerHTML = "$36.00";
        }
    }
}