const feeStructure = {
    tuition: 5000,
    exam: 1000,
    library: 500
};

function calculateFees() {
    let name = document.getElementById("name").value;
    let admissionNumber = document.getElementById("admission_number").value;
    let selectedFeeType = document.getElementById("fee_type").value;
    let feeAmount = parseFloat(document.getElementById("fee_amount").value);
    let totalFees = feeStructure[selectedFeeType];
    let remainingFees = totalFees - feeAmount;
    
    document.getElementById("result").innerHTML = `
        <h3>Payment Confirmation</h3>
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Admission Number:</strong> ${admissionNumber}</p>
        <p><strong>Selected Fee Type:</strong> ${selectedFeeType}</p>
        <p><strong>Total Fees:</strong> ₹${totalFees}</p>
        <p><strong>Paid Fee Amount:</strong> ₹${feeAmount}</p>
        <p><strong>Remaining Fees:</strong> ₹${remainingFees}</p>
    `;
} 