# Internet and Applications
 Final Project for Appathon@NTUA 2020  
 Name: Christina Ntourma
 
 The greek README file can be found [here](README-greek version.md).  
 
# City Travel
 The id and the name of the bus lines at the beginning of which it is not currently raining, as well as the name of the terminal station someone can reach using these lines, is returned from the data acquired using API: https://openweathermap.org/api. Moreover the time duration for travelling from the beginning of the line to the terminal station as well as the temperature, the real-feel temperature and an icon showing the current weather at the beginning of these routes is also displayed. Data not relative to the weather are obtained through API http://feed.opendata.imet.gr:23577/itravel.
 Furthermore, the users can provide as input the maximum amount of time they want to devote in order to reach a terminal station, and the routes with a duration less than or equal to the given one are returned, using once more the API http://feed.opendata.imet.gr:23577/itravel. 
 
 Javascript is used for the implementation of both the backend and the frontend. More specifically, Node js is used for the backend and React js for the frontend. Express module is used for connecting the backend and the frontend. Finally, the presentation of the data is achieved using HTML and CSS.

 Από τα δεδομένα του καιρού που λαμβάνονται μέσω του API https://openweathermap.org/api, επιστρέφεται το id και το όνομα των λεωφορειακών γραμμών στην αφετηρία των οποίων δε βρέχει αυτή τη στιγμή καθώς και το όνομα των τερματικών σταθμών που μπορεί να φτάσει κάποιος χρησιμοποιώντας αυτές τις γραμμές. Ακόμη, επιστρέφεται η χρονική διάρκεια που απαιτείται για να φτάσει κάποιος από την αφετηρία των παραπάνω γραμμών στον τερματικό σταθμό, καθώς και η τρέχουσα θερμοκρασία (πραγματική και αισθητή) στην αφετηρία των παραπάνω διαδρομών και ένα εικονίδιο που δείχνει τον καιρό τη συγκεκριμένη χρονική στιγμή στην εκάστοτε αφετηρία. Όσα δεδομένα δε σχετίζονται με τον καιρό, λαμνβάνονται μέσω του API http://feed.opendata.imet.gr:23577/itravel.
 Επιπλέον, ο χρήστης έχει τη δυνατότητα να δώσει σαν input τη μέγιστη χρονική διάρκεια που θέλει να διαθέσει για να φτάσει σε κάποιο τερματικό σταθμό και του επιστρέφονται οι διαδρομές με χρονική διάρκεια μικρότερη ή ίση με τη δοθείσα, χρησιμοποιώντας και πάλι το API http://feed.opendata.imet.gr:23577/itravel. Προτιμήθηκε η απόκτηση των δεδομένων κατευθείαν από τα δύο APIs, χωρίς τη χρήση των δοθέντων Web Services.

 Η υλοποίηση τόσο του backend όσο και του frontend έγινε σε JavaScript. Πιο συγκεκριμένα, για την υλοποίηση του backend χρησιμοποιήθηκε Node js και για την υλοποίηση του frontend χρησιμοποιήθηκε React js. Επιπλέον, χρησιμοποιήθηκε το module Express για τη σύνδεση του backend και του frontend. Τέλος, για την παρουσίαση των δεδομένων χρησιμοποιήθηκε HTML και CSS.


# Οδηγίες εγκατάστασης και εκτέλεσης

Running the app requires the installation of Node js along with which, npm is also installed. The installation can be done through [this link] (<https://nodejs.org/en/download/>). 
Για την εκτέλεση της εφαρμογής θα πρέπει να υπάρχει εγκατεστημένο στον υπολογιστή το Node js μαζί με το οποίο εγκαθίσταται και το npm, το οποίο μπορεί να εγκατασταθεί από τον σύνδεσμο που ακολουθεί: <https://nodejs.org/en/download/>.

The steps that need to be followed for installing the project are the following:
1. Run command `git clone https://github.com/christine98/Internet-and-Applications.git` in order for the project to be downloaded.
2. Run the commands `npm install` and `npm start`, sequentially, in a command line in the directory of the project, in `api` folder.
3. Run the commands `npm install` and `npm start`, sequentially, in a command line in the directory of the project, in `client` folder.
4. The project can be found in a browser at the url <http://localhost:3000/>. The use of Google Chrome browser is suggested. 

Τα βήματα που πρέπει να ακολουθηθούν για την εγκατάσταση του project είναι τα ακόλουθα:
1. Εκτέλεση της εντολής `git clone https://github.com/christine98/Internet-and-Applications.git` για να κατέβει το project στον υπολογιστή.

2. Εκτέλεση διαδοχικά των εντολών `npm install` και `npm start` σε μία γραμμή εντολών στο directory του project, στο φάκελο api.

3. Εκτέλεση διαδοχικά των εντολών `npm install` και `npm start` σε μία γραμμή εντολών στο directory του project, στο φάκελο client.

4. Το project μπορεί να βρεθεί σε έναν browser στη διεύθυνση <http://localhost:3000/>. Προτείνεται η χρήση του browser Google Chrome.


# Παρουσίαση εφαρμογής
Το βίντεο με την παρουσίαση της εφαρμογής βρίσκεται στον ακόλουθο σύνδεσμο: <https://www.youtube.com/watch?v=ad0WYS_qlyY&feature=youtu.be>.

# App presentation
The video with the presentation of the app in greek can be found [here](<https://www.youtube.com/watch?v=ad0WYS_qlyY&feature=youtu.be>). 
