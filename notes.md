Having an extremely hard time extracting the data in the random function.  Cannot figure out how to retrieve data from a specific page. Can only get a random beer from the first, entries[0] page.  


I have a hunch that I need to map over the data first and put beer ID's into an array, as their order in the database is in constant flux, their position is not a reliable identifier.  
Pretty obvious now, but yeah, I just had an epiphany... lol

Using two for loops in Beer.js I've found out how to cycle through beers to get more than 50.  Still don't have error handling but going with this for now.

Finally have the ability to load just the preset paginated 50 beers per click!  Will now transfer the same method to the Breweries page.

Got rid of getTotal method and moved same functionality into component did mount

Brought in card rendering method from Cat Tinder.

Decided to get rid of option to upvote, downvote a beer/brewery for now.

Running out of brain juice... So much more I want to do... I would like to display 10 beers/breweries by name on a card on the pages when their button is clicked, and then if that card is clicked go to an indepth information page about that beer, brewery... well see where I get, time's dwindling... (5:12 pm Sunday..)

Page is not updating when get beers button pressed.. need to link the get beers funtion to the card rendering somehow.  Also, still need to paginate.

Trying to figure out the random function.. I know I pretty much had it last night, but cant figure it out. Proud of how far I've come with this though, definitely need to keep going over state, props, mapping, semantic... etc etc.. but again, know I wouldve figured this all out given more time, worked through the entire weekend (minus my sisters baby shower haha), so I can truly say I did my best and call it quits. 

(maybe a bit more time in the morning, we'll see)

Good Morning! Fixed the random beer chooser.  Still need to put error handling in all axios calls, noticed if the beer has no name an error occurs in rand.  Overall its coming together though.  Also need to still fix rendering issue for Beer, Brewery, where only the first 50 cards are rendered.

Fixed Beer/Brew loading issue, somehow I removed setting nextpage to true onclick for getBeers, getBrews... Still have to press it twice though, need to figure that out.