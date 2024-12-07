<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="startPage.aspx.cs" Inherits="WDD_Final.startPage" %>

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
    <form id="startForm" runat="server">
        <b>Enter your first and last name:</b> <input id="fullName" type="text" runat="server"/>
        <asp:Button runat="server" ID="submitFullName" Text="Submit" OnClientClick="return validateFullName();" OnClick="submitFullName_Click"/>
        <div id="nameError" runat="server"></div>
    </form>
</body>
</html>
