using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WDD_Final
{
    public partial class orderConfirmation : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Session["choice"] = "";
            string[] toppings = (string[])Session["toppingSelections"];
            string orderTotal = (string)Session["orderTotal"];

            string toppingList = "";
            for (int i = 0; i < toppings.Length; i++)
            {
                if (!string.IsNullOrEmpty(toppings[i])) 
                {
                    toppingList += "- " + toppings[i] + "<br/>";
                }
            }

            total.InnerHtml = "$" + orderTotal;

            if (toppingList == string.Empty)
            {
                selectedToppings.InnerHtml = "None";
            }
            else
            {
                selectedToppings.InnerHtml = toppingList;
            }
        }

        protected void confirmOrder_Click(object sender, EventArgs e)
        {
            Session["choice"] = "confirm";

            Response.Redirect("finalPage.aspx");
        }

        protected void cancelOrder_Click(object sender, EventArgs e)
        {
            Session["choice"] = "cancel";

            Response.Redirect("finalPage.aspx");
        }
    }
}