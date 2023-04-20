/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */

interface Loan {
	principle: number;
	interest: number;
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan {
	months: number;
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment({
	principle,
	interest: interestRate,
}: Loan) {
	// Calculates the monthly payment of an interest only loan
	let interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
	let payment;
	payment = principle * interest;
	return "The interest only loan payment is " + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment({
	principle,
	interest: interestRate,
	months,
}: ConventionalLoan) {
	// Calculates the monthly payment of a conventional loan
	let interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
	let payment;
	payment = (principle * interest) / (1 - Math.pow(1 / (1 + interest), months));
	return "The conventional loan payment is " + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({
	principle: 30000,
	interest: 5,
});
let conventionalPayment = calculateConventionalLoanPayment({
	principle: 30000,
	interest: 5,
	months: 180,
});

console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"

