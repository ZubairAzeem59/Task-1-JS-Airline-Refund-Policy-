function calculateRefund(fare, delay) {
    if (delay <= 0 || isNaN(delay)) {
      return -1; // invalid delay
    } else if (delay <= 30) {
      return 0; // no refund
    } else if (delay <= 120) {
      return Math.min(0.1 * fare, 100); 
    } else if (delay <= 300) {
      return Math.min(0.2 * fare, 100); 
    } else {
      return Math.min(0.5 * fare, 100); 
    }
  }
  const fare = 300.0; // $300.00
const delay = 120; // 2 hours
const refund = calculateRefund(fare, delay);
console.log(refund); // 30.0 (10% of $300.00, capped at $100.00)