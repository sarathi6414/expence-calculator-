
var form = document.getElementById('expenseform');
var list = document.getElementById('expenses');
let expenses = [];
function addExpense(event) {
    event.preventDefault();
    var name = document.getElementById('date').value;
    var category = document.getElementById('category').value;
    var amount = parseFloat(document.getElementById('amount').value);
    if (name && category && amount) {
        const expense = {
            name,
            category,
            amount
        };
        expenses.push(expense);
        displayExpenses();
        document.getElementById('date').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    }
}
function displayExpenses() { 
    list.innerHTML = '';
    let total = 0;
        expenses.forEach(expense => {
        var listItem = document.createElement('li');
        listItem.textContent = `${expense.name} - ${expense.category} - $${expense.amount}`;
        list.appendChild(listItem);
        total += expense.amount;
    });

    var totalElement = document.createElement('li');
    totalElement.textContent = `Total: $${total}`;
    list.appendChild(totalElement);
}

form.addEventListener('submit', addExpense);