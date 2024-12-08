<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="createOrder.aspx.cs" Inherits="WDD_Final.createOrder" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" type="text/css" href="styles.css"/>
    <script src="Scripts/jquery-3.7.1.min.js"></script>
    <script src="pizzaShopScript.js"></script>
    <title>SET Pizza Shop</title>
</head>
<body>
    <h1><b>SET Pizza Shop</b></h1>
    <form id="form1" runat="server">
        <h2 style="text-align:center"><b>Ciao <% Response.Write(Session["firstName"].ToString()); %></b></h2> <br />
        <table border="0" style="text-align:center">
            <tr>
                <td style="text-align:left;">
                    Please select which toppings you would like on your large pizza:<br />(You can only order 1 and it already comes with cheese and sauce)<br /><br />
                    <input id="pepperoni" type="checkbox" value="1.50"/> Pepperoni <br />
                    <input id="mushroom" type="checkbox" value="1.00"/> Mushrooms <br />
                    <input id="olive" type="checkbox" value="1.00"/> Green Olives <br />
                    <input id="pepper" type="checkbox" value="1.00"/> Green Peppers <br />
                    <input id="cheese" type="checkbox" value="2.25"/> Double Cheese <br /><br />
                    <b>Order Total: <label id="orderTotal">$10.00</label></b> <br /><br />
                    <input id="submitSelections" type="submit" value="Make It!"/>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
