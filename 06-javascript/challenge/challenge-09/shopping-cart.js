const cart = createShoppingCart();
function createShoppingCart() {

    let items = [];
    let discount = 0;

    return {

        addItem: function (item) {
            let found = false;

            for (let i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    items[i].quantity += item.quantity;
                    found = true;
                }
            }

            if (found === false) {
                items.push(item);
            }
        },

        getItems: function () {
            return items;
        },

        updateQuantity: function (id, qty) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    items[i].quantity = qty;
                }
            }
        },

        removeItem: function (id) {
            let newItems = [];

            for (let i = 0; i < items.length; i++) {
                if (items[i].id !== id) {
                    newItems.push(items[i]);
                }
            }

            items = newItems;
        },

        getTotal: function () {
            let total = 0;

            for (let i = 0; i < items.length; i++) {
                total += items[i].price * items[i].quantity;
            }

            if (discount > 0) {
                total = total - (total * discount / 100);
            }

            return Number(total.toFixed(2));
        },

        getItemCount: function () {
            let count = 0;

            for (let i = 0; i < items.length; i++) {
                count += items[i].quantity;
            }

            return count;
        },

        isEmpty: function () {
            return items.length === 0;
        },

        applyDiscount: function (code, percent) {
            if (code === "SAVE10") {
                discount = percent;
            }
        },

        clear: function () {
            items = [];
            discount = 0;
        }
    };

}

cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 }); // increases quantity

console.log(cart.getItems());

cart.updateQuantity(1, 3);
cart.removeItem(2);

console.log(cart.getTotal());
console.log(cart.getItemCount());
console.log(cart.isEmpty());

cart.applyDiscount('SAVE10', 10);
console.log(cart.getTotal());

cart.clear();
console.log(cart.isEmpty());
