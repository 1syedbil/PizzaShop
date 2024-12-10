using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WDD_Final
{
    public partial class finalPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string choice = (string)Session["choice"];
            string fullName = (string)Session["fullName"];

            if (choice == "confirm")
            {
                finalMsg.InnerHtml = "<b>Thank you for confirming your order with the SET Pizza Shop " + fullName + "!</b>";
            }
            else if (choice == "cancel")
            {
                finalMsg.InnerHtml = "<b>Thank you for visiting the SET Pizza Shop " + fullName + "! We are sorry to hear you decided to cancel your order.</b>";
            }
        }
    }
}