var UPIPaymentImpl = /** @class */ (function () {
    function UPIPaymentImpl() {
    }
    UPIPaymentImpl.prototype.doPayment = function (paymentcreds) {
        return "Payment of Rs " + paymentcreds + "  is in Progress";
    };
    UPIPaymentImpl.prototype.getPaymentStatus = function (refId) {
        return "Payment done Successfully for reference Id: " + refId + " ";
    };
    return UPIPaymentImpl;
}());
var CreditCardPaymentImpl = /** @class */ (function () {
    function CreditCardPaymentImpl() {
    }
    CreditCardPaymentImpl.prototype.doPayment = function (paymentcreds) {
        return "Payment of Rs " + paymentcreds + " is in Progress";
    };
    CreditCardPaymentImpl.prototype.getPaymentStatus = function (refId) {
        return "Payment done Successfully for reference Id: " + refId + " ";
    };
    return CreditCardPaymentImpl;
}());
var upi = new UPIPaymentImpl();
console.log(upi.doPayment('50000'));
console.log(upi.getPaymentStatus('PAY012345'));
var upiobj = new CreditCardPaymentImpl();
console.log(upiobj.doPayment('70000'));
console.log(upiobj.getPaymentStatus('PAY012346'));
