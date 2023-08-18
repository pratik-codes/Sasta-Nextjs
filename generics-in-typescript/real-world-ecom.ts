interface Product {
    id: string;
    name: string;
    price: number;
}

class ShoppingCart<T extends Product> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

const product1 = { id: "prod-123", name: "Widget", price: 19.99, category: "something" };
const product2 = { id: "prod-456", name: "Gadget", price: 49.99, category: "something" };

const cart = new ShoppingCart<Product>();
cart.addItem(product1);
cart.addItem(product2);

console.log("Total:", cart.getTotal());  // Output: Total: 69.98
