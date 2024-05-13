import { MonthlyBilling } from "./modules/MonthlyBilling.js";
import { LocalCall } from "./modules/LocalCall.js";
import { LongDistanceCall } from "./modules/LongDistanceCall.js";

//New Monthy Billing 
const monthlyBillingMarch = new MonthlyBilling('March', 2024, 40);
const monthlyBillingApril = new MonthlyBilling('April', 2024, 50);

//Dates March
const datetimeStartMarch = new Date("Mar 10, 2024 10:00:00");//Sunday
const datetimeEndMarch = new Date("Mar 10, 2024 12:00:00");//Sunday
const datetimeStartMarch2 = new Date("Mar 04, 2024 14:30:00");//Monday
const datetimeEndMarch2 = new Date("Mar 04, 2024 15:00:00");//Monday
//Dates April
const datetimeStartApril = new Date("Apr 25, 2024 13:30:00");
const datetimeEndApril = new Date("Apr 25, 2024 14:35:00");
const datetimeEndApril2 = new Date("Apr 25, 2024 15:00:00");



//Destinations
const localDestination = "Quilmes";
const longDistanceDestination = "Bariloche";
const otherCountry = "Brasil";

//Calls March
const newLocalCallMarch = new LocalCall(datetimeStartMarch, datetimeEndMarch, localDestination);
const newLongDistanceMarch = new LongDistanceCall(datetimeStartMarch2, datetimeEndMarch2, 0.40, otherCountry);
//Calls April
const newLocalCall = new LocalCall(datetimeStartApril, datetimeEndApril, localDestination);
const newLongDistanceCall = new LongDistanceCall(datetimeStartApril, datetimeEndApril2, 0.50, otherCountry);
const newLongDistanceCall2 = new LongDistanceCall(datetimeStartApril, datetimeEndApril2, 0.30, longDistanceDestination);

//Monthly Billing March
monthlyBillingMarch.addCall(newLocalCallMarch);
monthlyBillingMarch.addCall(newLongDistanceMarch);
monthlyBillingMarch.printBill();
//Monthly Billing April
monthlyBillingApril.addCall(newLocalCall);
monthlyBillingApril.addCall(newLongDistanceCall);
monthlyBillingApril.addCall(newLongDistanceCall2);
monthlyBillingApril.printBill();
