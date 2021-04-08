var container = document.createElement("div");
container.setAttribute("class", "container");
var table = document.createElement("table");
table.setAttribute("class", "table table-striped");
var thead = document.createElement("thead");
thead.setAttribute("class", "thead-dark");
var tr = document.createElement("tr");
var th1 = createTrTd("td", "FIRST NAME");
var th2 = createTrTd("td", "LAST NAME");
var th3 = createTrTd("td", "ADDRESS");
var th4 = createTrTd("td", "PIN CODE");
var th5 = createTrTd("td", "GENDER");
var th6 = createTrTd("td", "CHOICE OF FOOD");
var th7 = createTrTd("td", "CITY");
var th8 = createTrTd("td", "STATE");
var th9 = createTrTd("td", "COUNTRY");


tr.append(th1, th2, th3, th4, th5, th6, th7, th8, th9);
thead.append(tr);
table.append(thead);
container.append(table);
document.body.append(container);

function createTrTd(elem, value = "", classname = "", id = "") {
    var td = document.createElement(elem);
    td.innerHTML = value;
    td.setAttribute("class", classname);
    return td;
}

function myfun() {
    var obj = new Object();
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var gender = document.getElementsByName("gender");
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            gender = gender[i].value;
    }

    var food = document.getElementsByName("food");
    var list = [];
    for (i = 0; i < food.length; i++) {
        if (food[i].type == 'checkbox' && food[i].checked == true)
            list += food[i].value + " ";
    }
    food = list;

    var data = [
        {
            "firstname": firstname,
            "lastname": lastname,
            "address": address,
            "pincode": pincode,
            "gender": gender,
            "food": food,
            "city": city,
            "state": state,
            "country": country,
        }
    ];

    data.forEach((obj) => {

        var tbody = document.createElement("tbody");
        tbody.setAttribute("class", "tbody");
        var tbodytr = document.createElement("tr");
        var tbodytd1 = createTrTd("td", "firstname");
        tbodytd1.innerHTML = obj.firstname;
        var tbodytd2 = createTrTd("td", "lastname");
        tbodytd2.innerHTML = obj.lastname;
        var tbodytd3 = createTrTd("td", "address");
        tbodytd3.innerHTML = obj.address;
        var tbodytd4 = createTrTd("td", "pincode");
        tbodytd4.innerHTML = obj.pincode;
        var tbodytd5 = createTrTd("td", "gender");
        tbodytd5.innerHTML = obj.gender;
        var tbodytd6 = createTrTd("td", "food");
        tbodytd6.innerHTML = obj.food;
        var tbodytd7 = createTrTd("td", "city");
        tbodytd7.innerHTML = obj.city;
        var tbodytd8 = createTrTd("td", "state");
        tbodytd8.innerHTML = obj.state;
        var tbodytd9 = createTrTd("td", "country");
        tbodytd9.innerHTML = obj.country;

        tbodytr.append(tbodytd1, tbodytd2, tbodytd3, tbodytd4, tbodytd5, tbodytd6, tbodytd7, tbodytd8, tbodytd9);
        tbody.append(tbodytr);
        table.append(tbody);
        container.append(table);
        document.body.append(container);

    });
}