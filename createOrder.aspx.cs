using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.IO;
using System.Diagnostics;
using Newtonsoft.Json;

namespace WDD_Final
{
    public partial class createOrder : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static double CalculateTotal(double total, string topping, string addOrRemove)
        {
            Dictionary<string, double> toppingPrices = new Dictionary<string, double> { { "pepperoni", 1.50 }, { "mushroom", 1.00 }, { "olive", 1.00 }, { "pepper", 1.00 }, { "cheese", 2.25 } };

            double toppingPrice = toppingPrices[topping];

            if (addOrRemove == "add")
            {
                total += toppingPrice;
            }
            else if (addOrRemove == "remove")
            {
                if (total > 10.00)
                {
                    total -= toppingPrice;
                }
            }

            return total;
        }

        protected void submitOrder_Click(object sender, EventArgs e)
        {
            Session["orderTotal"] = priceVal.Value;
            string[] toppings = new string[5];
            bool[] selections = { pepperoni.Checked, mushroom.Checked, olive.Checked, pepper.Checked, cheese.Checked };
            string[] toppingNames = { "Pepperoni", "Mushroosm", "Green Olives", "Green Peppers", "Double Cheese" };

            for (int i = 0; i < selections.Length; i++)
            {
                if (selections[i])
                {
                    toppings[i] = toppingNames[i];
                }
            }

            Session["toppingSelections"] = toppings;

            Response.Redirect("orderConfirmation.aspx");
        }
    }
}