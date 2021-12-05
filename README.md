# Internet and Applications
 Final Project for Appathon@NTUA 2020  
 Name: Christina Ntourma
 
 The greek README file can be found [here](README_greek_version.md).  
 
# City Travel
 The id and the name of the bus lines at the beginning of which it is not currently raining, as well as the name of the terminal station someone can reach using these lines, is returned from the data acquired using API: https://openweathermap.org/api. Moreover the time duration for travelling from the beginning of the route to the terminal station as well as the temperature, the real-feel temperature and an icon showing the current weather at the beginning of these routes is also displayed. Data not relative to the weather are obtained through API http://feed.opendata.imet.gr:23577/itravel.
 Furthermore, the users can provide as input the maximum amount of time they want to devote in order to reach a terminal station, and the routes with a duration less than or equal to the given one are returned, using once more the API http://feed.opendata.imet.gr:23577/itravel. 
 
 Javascript is used for the implementation of both the backend and the frontend. More specifically, Node js is used for the backend and React js for the frontend. Express module is used for connecting the backend and the frontend. Finally, the presentation of the data is achieved using HTML and CSS.

# Instructions for installing and running the project

Running the app requires the installation of `Node js` along with which, `npm` is also installed. The installation can be done through [this link] (<https://nodejs.org/en/download/>). 

The steps that need to be followed for installing the project are the following:
1. Run command `git clone https://github.com/christine98/Internet-and-Applications.git` in order for the project to be downloaded.
2. Run the commands `npm install` and `npm start`, sequentially, in a command line in the directory of the project, in `api` folder.
3. Run the commands `npm install` and `npm start`, sequentially, in a command line in the directory of the project, in `client` folder.
4. The project can be found in a browser at the url <http://localhost:3000/>. The use of Google Chrome browser is suggested. 

# App presentation
The video with the presentation of the app in greek can be found [here](<https://www.youtube.com/watch?v=ad0WYS_qlyY&feature=youtu.be>). 
