using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Rocoland.ViewModel
{
    public class Greaterthan18 : ValidationAttribute
    {
      protected override ValidationResult IsValid(object value , ValidationContext validationContext)
        {
            string message = String.Format("The {0} field is invalid.", validationContext.DisplayName ?? validationContext.MemberName);

            DateTime date;
            if (value == null)
                return new ValidationResult(message);
            try
            {
                date = Convert.ToDateTime(value);
            }
            catch (Exception ex)
            {
                return new ValidationResult(message);
            }

            DateTime dt1 = DateTime.Now.AddYears(-18);

            if (dt1 < date)
            {
                return new ValidationResult(message);
            }
            else
            {
                return ValidationResult.Success;
            }
         
        }
    }
}