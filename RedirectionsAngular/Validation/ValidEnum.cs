using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

public class ValidEnum : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value == null)
        {
            return new ValidationResult("app_invalid_value");
        }
        else
        {
            return Enum.IsDefined(value.GetType(), value) ? ValidationResult.Success : new ValidationResult(value + " " + "app_invalid_value");
        }
    }
}


public class ValidSource : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value == null)
        {
            return new ValidationResult("app_invalid_value");
        }
        else
        {
            return Enum.IsDefined(typeof(EnumSourceTypeTargetType), value) && SourceTypeTargetType.SourceTypes.Any(x => x == (EnumSourceTypeTargetType)value) ? ValidationResult.Success : new ValidationResult(value + " " + "app_invalid_value");
        }
    }
}