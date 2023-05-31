var customers = [];

function addCustomer() {
    var customerName = document.getElementById("customer-name").value;
    var priority = document.getElementById("priority").value;

    if (customerName && priority) {
        var customer = {
            name: customerName,
            priority: parseInt(priority)
        };

        customers.push(customer);

        var table = document.getElementById("customer-table");
        var row = table.insertRow(-1);
        var indexCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var priorityCell = row.insertCell(2);

        indexCell.innerHTML = table.rows.length - 1;
        nameCell.innerHTML = customerName;
        priorityCell.innerHTML = priority;

        document.getElementById("customer-name").value = "";
        document.getElementById("priority").value = "";
    }
}

function prioritizeCustomers() {
    customers.sort(function(a, b) {
        return a.priority - b.priority;
    });

    var resultTable = document.getElementById("scheduling-result-table");
    resultTable.innerHTML = "";

    var delay = 0;
    var displayTime = 9000; // Tiempo de visualización en milisegundos (8 segundos)

    for (var i = 0; i < customers.length; i++) {
        var customer = customers[i];

        setTimeout(function(customer) {
            var row = resultTable.insertRow(-1);
            var nameCell = row.insertCell(0);
            var priorityCell = row.insertCell(1);

            nameCell.innerHTML = customer.name;
            priorityCell.innerHTML = customer.priority;

            setTimeout(function() {
                row.remove();
            }, displayTime); // Desaparece después de displayTime milisegundos

        }, delay, customer);

        delay += 1000; // Espera 1 segundo antes de mostrar el siguiente cliente
    }
}




