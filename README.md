# Outdoor Journal 

The Outdoor Journal is a place where you can plan, record, and save details and memories of your favorite outdoor adventures. This project was born out of my own personal experience as an avid outdoorsman and journal keeper. 

## Screenshots: 

This app features: 

* Mobile-first responsive design

    ![Responsive design](https://i.imgur.com/sE6Xi8G.png)
* Easy-to-navigate index page listing your trips 
    * note that trips are listed by "active" trips first, then by ascending date 

    ![Trips index](https://i.imgur.com/M5yMr6x.png)
* Detailed pages showing data on individual trips, with these features:
    * The ability for the trip owner to add logs to the trip, or a list of wildlife spotted on the trip. 
        * note the wildlife data is collected from the https://explorer.natureserve.org/ API
        * each wildlife listing contains a link to that species' NatureServe profile page, where the user can learn more about the species  
    * The ability to "like" logs and comments 
    * Basic CRUD capabilities

    ![Trip show page](https://i.imgur.com/ui9tzFd.png)
* The ability to comment on yours and others' trips

    ![comments](https://i.imgur.com/WnJcZdx.png)
* "Edit" page with full update & delete capabilities

    ![Trip edit page](https://i.imgur.com/or9xqkl.png)

## Technologies Used: 

* HTML 
* Bootstrap 
* Javascript
* Google OAuth

## APIs implemented:
* Google Maps Javascript API
* Natureserve.org public data API
    * https://explorer.natureserve.org/ 

## Getting Started: 

Visit the live app at: https://outdoor-journal.herokuapp.com/

Depending on your device size, the landing page will look something like this: 

![Landing page](https://i.imgur.com/XBGyfY0.png)

Sign-in with your Google account, and you're ready to start making memories! 

Check out the Trello board used during planning: https://trello.com/b/BK0hkWaY/outdoor-journal

Clone this repo: 

```
$ git clone https://github.com/TCashion/outdoor-journal.git
```

## Next Steps: 

In the future I plan to implement the following: 

* Hiking Project API to allow users to identify trails 
* Ability to request, add, or remove friends
    * Make certain components only visible to friends, such as trip locations
* Ability to edit the trip location directly in the map
* Ability to edit your profile information 
* Scrollable list of active trips on user landing page
* Ability to search for trips 
* Ability to report errors 
* Ability to upload photos & videos 
* Cross-browser functionality 