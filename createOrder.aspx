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
    <h1><b>SET Pizza Shop</b></h1><br />
    <form id="form1" runat="server">
        <h2><b>Ciao <% Response.Write(Session["firstName"].ToString()); %></b></h2> 
    </form>
</body>
</html>
