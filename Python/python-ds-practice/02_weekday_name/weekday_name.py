def weekday_name(day_of_week):
    """Return name of weekday.
    
        >>> weekday_name(1)
        'Sunday'
        
        >>> weekday_name(7)
        'Saturday'
        
    For days not between 1 and 7, return None
    
        >>> weekday_name(9)
        >>> weekday_name(0)
<<<<<<< HEAD
    """
=======
    """
    days = ("Monday","Tuesday","Wednesday",
        "Thursday",
        "Friday",
        "Saturday",)
    if day_of_week < 0 or day_of_week > 7:
     return None
     
    return days[day_of_week -1]
    
    
print (weekday_name(5))
>>>>>>> ce8d43ceef7452c8efda90f250e1369b7b68b450
