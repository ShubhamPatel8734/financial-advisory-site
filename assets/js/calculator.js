document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("budgetForm");
  const incomeInput = document.getElementById("income");
  const expensesInput = document.getElementById("expenses");
  const resultBox = document.getElementById("result");

  if (!form || !incomeInput || !expensesInput || !resultBox) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const income = parseFloat(incomeInput.value.trim());
    const expenses = parseFloat(expensesInput.value.trim());

    if (isNaN(income) || isNaN(expenses)) {
      resultBox.textContent = "Please enter valid income and expense values.";
      resultBox.style.display = "block";
      return;
    }

    const savings = income - expenses;
    let message = "";

    if (savings > 0) {
      message = `You are saving $${savings.toFixed(2)} per month.`;
    } else if (savings < 0) {
      message = `You're overspending by $${Math.abs(savings).toFixed(2)} each month.`;
    } else {
      message = "You're breaking even with no savings.";
    }

    resultBox.textContent = message;
    resultBox.style.display = "block";
  });
});
