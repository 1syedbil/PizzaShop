<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="orderConfirmation.aspx.cs" Inherits="WDD_Final.orderConfirmation" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" type="text/css" href="styles.css"/>
    <title>SET Pizza Shop</title>
</head>
<body>
    <h1><b>SET Pizza Shop</b></h1>
    <form id="confirmOrderForm" runat="server">
        <h2 style="text-align:center"><b>Ciao <% Response.Write(Session["firstName"].ToString()); %></b></h2> <br />
        <table border="0">
            <tr>
                <td style="text-align:left; vertical-align:top">
                    <b>Order: </b>1 large pizza<br />
                    <b>Order Total: </b> <span runat="server" id="total"></span><br />
                    <p><b>Toppings:</b></p>
                    <p runat="server" id="selectedToppings"></p>
                </td>
            </tr>
        </table>
        <asp:Button runat="server" ID="confirmOrder" Text="CONFIRM" OnClick="confirmOrder_Click"/> <asp:Button runat="server" ID="cancelOrder" Text="CANCEL" OnClick="cancelOrder_Click"/>
    </form>
</body>
</html>
