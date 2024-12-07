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
using System.Drawing;

namespace WDD_Final
{
    public partial class startPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            nameError.InnerHtml = "";
        }

        protected void submitFullName_Click(object sender, EventArgs e)
        {
            string firstName = fullName.Value.ToString().Split(' ')[0];

            Session["firstName"] = firstName;
            Session["fullName"] = fullName.Value.ToString(); 

            Response.Redirect("createOrder.aspx");
        }
    }
}