
class KioskCalc{
    constructor(fruit,quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPriceList = {"orange":30,"mango":15,"Avocado":40};
        this.getTotalcost = function(){
            return `${quantity} ${fruit} for KES ${quantity*this.fruitPriceList.orange}`
        }
    }
}
let kioskCalc = new KioskCalc("orange",4)
console.log(kioskCalc.getTotalcost());