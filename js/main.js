let addBtn = document.querySelectorAll('.menu-add');
let cart = {};
let cartTotal = 0;

addBtn.forEach(btn => {
    btn.addEventListener('click', evt => {
        let itemName = evt.target.name;
        let itemPrice = evt.target.value;
        if(cart[itemName]) cart[itemName].quantity++;
        else {
            cart[itemName] = {
                quantity: 1,
                price: itemPrice
            };
        }
        cartTotal += parseInt(itemPrice);
        console.log(cart);
        console.log(`TOTAL: ${cartTotal}`)

        for(let item in cart) {
            document.querySelector('.items').innerHTML = "";
            let newItem = document.createElement("li");
            let itemNameLi = document.createTextNode(`${item} - X${cart[item].quantity}`);
            newItem.appendChild(itemNameLi);
            document.querySelector('.items').appendChild(newItem);
        }

        // cart.forEach(item => {
        //     let newItem = document.createElement("li");
        //     let itemNameLi = document.createTextNode(`${itemName} - X${cart[itemName].quantity}`);
        //     newItem.appendChild(itemNameLi);
        //     document.querySelector('.items').appendChild(newItem);
        // })
    });
})
