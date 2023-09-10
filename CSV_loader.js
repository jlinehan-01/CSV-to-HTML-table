async function foo() {
    let dat;

    const res = await fetch('./data.json')

    dat = await res.json();

    return dat;
}

var data = await foo();

// get headings
var headings = [];
for (var key in data[0])
{
    headings.push(key)
}

// get values
var rows = [];
for (var i in data)
{
    var row = [];
    for (var j in headings)
    {
        row.push(data[i][headings[j]]);
    }
    rows.push(row);
}

// make table
var table = document.getElementById("table")
// header row
var header_row = document.createElement("tr");
for (var i in headings)
{
    var cell = document.createElement("th");
    cell.innerHTML = headings[i];
    header_row.appendChild(cell);
}
table.appendChild(header_row);

// cells
for (row in rows)
{
    var table_row = document.createElement("tr");
    for (i in rows[row])
    {
        var cell = document.createElement("td");
        cell.innerHTML = rows[row][i];
        table_row.appendChild(cell);
    }
    table.appendChild(table_row);
}
