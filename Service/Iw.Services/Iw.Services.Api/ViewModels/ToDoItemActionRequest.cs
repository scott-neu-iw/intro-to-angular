﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Iw.Services.Api.ViewModels
{
    public class ToDoItemActionRequest
    {
       [Required]
       public string ByUser { get; set; }
       public DateTime? OnDate { get; set; }
    }
}
