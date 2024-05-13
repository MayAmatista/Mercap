export class MonthlyBilling {
    constructor(month, year, fixedMonthlyCost) {
        this.month = month;
        this.year = year;
        this.fixedMonthlyCost = fixedMonthlyCost;
        this.calls = [];
    }

    addCall(call) {
        this.calls.push(call);
    }

    totalCallsCost() {
        let totalCost = 0;
        for (let call of this.calls) {
            totalCost += call.cost();
        }
        return totalCost;
    }

    monthlyBilling() {
        return this.totalCallsCost() + this.fixedMonthlyCost;
    }

    printBill() {
        for(let call of this.calls){
            console.log(`- ${call.destination} ${call.datetimeStart.getDate()}/${call.datetimeStart.getMonth() + 1} ${call.duration()} minutes ----- $${call.cost()}`);
        }
        console.log(`Total of ${this.month}: -----`, this.monthlyBilling());
    }
}
