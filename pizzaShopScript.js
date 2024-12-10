function validateFullName() {
    var error = document.getElementById("nameError");
    var input = document.getElementById("fullName").value;
    var checkChars = /^[\sA-Za-z]+$/
    var splitName = input.split(' ');
    var numSpaces = splitName.length;

    error.innerHTML = "";

    if (input === "") {
       error.innerHTML = "<b>Your name input cannot be empty.</b>";
       return false;
    }

    if (!checkChars.test(input)) {
       error.innerHTML = "<b>Your name can only contain letters and spaces.</b>";
       return false;
    }

    if (numSpaces != 2 || splitName[1] == "") {
       error.innerHTML = "<b>You must only enter your first and last name separated by a single space.</b>";
       return false;
    }

    return true;
}

var orderTotal = 10.00;

$(document).on('change', '#pepperoni', function () {
    var addOrRemove = "remove";

    if ($("#pepperoni").is(":checked")) {
        addOrRemove = "add";
    }

    $.ajax({
        type: "POST",
        url: "createOrder.aspx/CalculateTotal",
        data: JSON.stringify({ total: orderTotal, topping: "pepperoni", addOrRemove: addOrRemove }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            orderTotal = response.d;
            $('#priceVal').val(orderTotal);
            $("#orderTotal").html("$" + orderTotal);
        },
        error: function () {
            alert("Error. Response not received.");
        }
    });
});

$(document).on('change', '#mushroom', function () {
    var addOrRemove = "remove";

    if ($("#mushroom").is(":checked")) {
        addOrRemove = "add";
    }

    $.ajax({
        type: "POST",
        url: "createOrder.aspx/CalculateTotal",
        data: JSON.stringify({ total: orderTotal, topping: "mushroom", addOrRemove: addOrRemove }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            orderTotal = response.d;
            $('#priceVal').val(orderTotal);
            $("#orderTotal").html("$" + orderTotal);
        },
        error: function () {
            alert("Error. Response not received.");
        }
    });
});

$(document).on('change', '#olive', function () {
    var addOrRemove = "remove";

    if ($("#olive").is(":checked")) {
        addOrRemove = "add";
    }

    $.ajax({
        type: "POST",
        url: "createOrder.aspx/CalculateTotal",
        data: JSON.stringify({ total: orderTotal, topping: "olive", addOrRemove: addOrRemove }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            orderTotal = response.d;
            $('#priceVal').val(orderTotal);
            $("#orderTotal").html("$" + orderTotal);
        },
        error: function () {
            alert("Error. Response not received.");
        }
    });
});

$(document).on('change', '#pepper', function () {
    var addOrRemove = "remove";

    if ($("#pepper").is(":checked")) {
        addOrRemove = "add";
    }

    $.ajax({
        type: "POST",
        url: "createOrder.aspx/CalculateTotal",
        data: JSON.stringify({ total: orderTotal, topping: "pepper", addOrRemove: addOrRemove }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            orderTotal = response.d;
            $('#priceVal').val(orderTotal);
            $("#orderTotal").html("$" + orderTotal);
        },
        error: function () {
            alert("Error. Response not received.");
        }
    });
});

$(document).on('change', '#cheese', function () {
    var addOrRemove = "remove";

    if ($("#cheese").is(":checked")) {
        addOrRemove = "add";
    }

    $.ajax({
        type: "POST",
        url: "createOrder.aspx/CalculateTotal",
        data: JSON.stringify({ total: orderTotal, topping: "cheese", addOrRemove: addOrRemove }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            orderTotal = response.d;
            $('#priceVal').val(orderTotal);
            $("#orderTotal").html("$" + orderTotal);
        },
        error: function () {
            alert("Error. Response not received.");
        }
    });
});