// JavaScript for Café Menu Project

document.getElementById("calculate").addEventListener("click", function () {
    const quantities = document.querySelectorAll(".quantity");
    let totalBill = 0;

    quantities.forEach(input => {
        const quantity = parseInt(input.value) || 0;
        const price = parseInt(input.getAttribute("data-price"));
        totalBill += quantity * price;
    });

    // Display the total bill
    document.getElementById("total-bill").textContent = totalBill;
    document.getElementById("bill-details").classList.remove("hidden");
});
