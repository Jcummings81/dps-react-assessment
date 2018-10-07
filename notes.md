Having an extremely hard time extracting the data in the random function.  Cannot figure out how to retrieve data from a specific page. Can only get a random beer from the first, entries[0] page.  


I have a hunch that I need to map over the data first and put beer ID's into an array, as their order in the database is in constant flux, their position is not a reliable identifier.  
Pretty obvious now, but yeah, I just had an epiphany... lol

Using two for loops in Beer.js I've found out how to cycle through beers to get more than 50.  Still don't have error handling but going with this for now.

Finally have the ability to load just the preset paginated 50 beers per click!  Will now transfer the same method to the Breweries page.

Got rid of getTotal method and moved same functionality into component did mount