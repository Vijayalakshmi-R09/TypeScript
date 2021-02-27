interface paymentManager{
    doPayment(paymentcreds:string):string;
    getPaymentStatus(refId: string):string;
}
class UPIPaymentImpl implements paymentManager{
    public doPayment(paymentcreds:string):string
    {
        return `Payment of Rs ${paymentcreds}  is in Progress`;
    }
    public getPaymentStatus(refId: string): string {
       return `Payment done Successfully for reference Id: ${refId} `;
    }
}
class CreditCardPaymentImpl implements paymentManager{
    doPayment(paymentcreds:string):string{
    return `Payment of Rs ${paymentcreds} is in Progress`;
    }
    getPaymentStatus(refId: string): string {
        return `Payment done Successfully for reference Id: ${refId} `;
    }
}

let upi:UPIPaymentImpl=new UPIPaymentImpl();
console.log(upi.doPayment('50000'));
console.log(upi.getPaymentStatus('PAY012345'));
let upiobj:CreditCardPaymentImpl=new CreditCardPaymentImpl();
console.log(upiobj.doPayment('70000'));
console.log(upiobj.getPaymentStatus('PAY012346'));
