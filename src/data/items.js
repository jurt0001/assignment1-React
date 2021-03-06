/*****************************************************************
File: Main.js
Author: Christian Josef Jurt

Description: This is React Application displays a list on the Main page.
it also allows you to add a new item to the list.

Version: 0.0.1
Updated: Oct 1, 2017

*****************************************************************/


let items = [
	{key: 1, id: 1, name: 'Camino de Santiago', year: '2017', description: 'At the tail end of 2016, my 3 siblings and I decided to walk to Camino de Santiago in Spain. This is not anything I ever thought to do but all my siblings at one time or another had brought it up. They each are convinced that they were the ones to first come up with the idea. This was the first time we actually put our intention into making the trip. April 22, 2017 came around and we were all on a flight to Porto and then 2 France where our journey would begin. We walked from St. Jean Pied du Port, France and across the border to Spain until we hit Burgos, Spain. From here he buses ahead to Sarria and again walked to Santiago de Compestella from there. We only skipped ahead due to time constraints. We walked over 350km in 17 days. The whole hike normally would take approximately 40 days and 800km. My feet still hurt to this day.', image: 'images/camino.jpg'},
	{key: 2, id: 2, name: 'Perform at Pouzza Festival in Montreal', year: '2017', description: 'I\'m in a band called \'Hellbros\'. We\'ve always wanted to get into one of our favorite festivals in the area. In 2016 we entered into a competition where we would raie money for local charities. The band that raised the most got to play the festival. Maybe it was fate but we won the comp by raising about 10 more dollars than the next band.', image: 'images/pouzza.jpg'},
	{key: 3, id: 3, name: 'Release Feed It Music Video', year: '2017', description: 'in June 2016 Hellbros recorded a music video in a cornfield and a bunch of prop laser guns. Our good friend and local film maker directed the videoa and let us use custom laser guns that he made from a bunch of scrap metal. The video took so long to complete because when you get your friends to work for free, they have no motivation to get things done on your schedule. The end result was worth it. After 4 days the video already has over 2000 views and there has been alot of positive reaction so far.', image: 'images/feed_it.jpg'},
	{key: 4, id: 4, name: 'European Tour', year: '2016', description: 'In 2016, the band acheived one of their dreams. To play in Europe. I, along with me brother Peter, the lead singer was born in Switzerland and it was nice to finally get to play in our homeland. We ended up touring for 30 days and performed in 6 different countries. The people were very kind and accomodating everywhere we went. I would go back in a heartbeat.', image: 'images/euro_tour.jpg'},
	{key: 5, id: 5, name: 'Volunteer Coordination', year: '2017', description: 'In a year where I didn\'t have alot going on I decided to vollunteer at some local festivals. Not before long the coordinator was enlisting my services for everything that cam up, including in 2017 when I was asked to do her job and coordinate the Cornwall beer fest. It was a very postive and a little stressful experience. The most interesting thing that happened was that a watermain broke and flooded the whole festival. What are the odds.', image: 'images/volunteer.jpg'}
]