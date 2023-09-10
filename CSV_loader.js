async function foo() {
    let dat;

    const res = await fetch('./data.csv')

    dat = await res.text();

    return dat;
}

var data = await foo();
var data = data.split("\r\n");
for (var i in data) {
    data[i] = data[i].split(',');
}

// remove newline data
while (!data[data.length - 1][0]) {
    data.pop();
}

// get headings
var headings = [];
for (var i in data[0]) {
    headings.push(data[0][i])
}

// get values
var rows = [];
for (var i in data) {
    var row = [];
    for (var j in headings) {
        row.push(data[i][headings[j]]);
    }
    rows.push(row);
}

// make table
var table = document.getElementById("table")
// header row
var header_row = document.createElement("tr");
for (var i in headings) {
    var cell = document.createElement("th");
    cell.innerHTML = headings[i];
    header_row.appendChild(cell);
}
table.appendChild(header_row);

// cells
for (var i = 1; i < data.length; i++) {
    var table_row = document.createElement("tr");
    for (j in data[i]) {
        var cell = document.createElement("td");
        cell.innerHTML = data[i][j];
        table_row.appendChild(cell);
    }
    table.appendChild(table_row);
}
