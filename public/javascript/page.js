

$(document).ready(function() {

		function changeICaddy() {
					$('#portfolioImg').attr('src', '/static/images/iCaddy.png');
					$('#clickImg').attr('href', 'https://gentle-basin-8593.herokuapp.com/');
					$('#projectTitle').text('iCaddy');
					$('#projectContent').text('An application born out of my love for the game of golf. iCaddy is a free platform that provides recreational golfers with a score tracking platform that automatically runs analytics on their performances, providing a base from which to improve their game.');
					$('#gitHub').text('darraghmonaghan/icaddy2');
					$('#gitHub').attr('href', 'https://github.com/darraghmonaghan/icaddy2');			
					$('#heroku').text('gentle-basin-8593');
					$('#heroku').attr('href', 'https://gentle-basin-8593.herokuapp.com/');					
					$('#techStack').text('JavaScript, HTML5, CSS3, Node.js, Express, Query, PostgreSQL, BootStrap, Chart.js');	
		}

		function changeEncore() {
					$('#portfolioImg').attr('src', '/static/images/Encore.png');
					$('#clickImg').attr('href', 'https://whispering-ridge-5278.herokuapp.com/');
					$('#projectTitle').text('Encore');
					$('#projectContent').text('Encore was created with 4 friends, with the purpose of making hosting an event easier, by providing a single destination from which to browse all the musical and artistic performers available for hire in their local area.');
					$('#gitHub').text('darraghmonaghan/rebuild');
					$('#gitHub').attr('href', 'https://github.com/darraghmonaghan/rebuild');					
					$('#heroku').text('whispering-ridge-5278');
					$('#heroku').attr('href', 'https://whispering-ridge-5278.herokuapp.com/');					
					$('#techStack').text('Ruby on Rails, HTML5, CSS3, JQuery, PostgreSQL, BootStrap');	
		}

		function changeQuora() {
				$('#portfolioImg').attr('src', '/static/images/quoraForDummies.png');
				$('#clickImg').attr('href', 'https://calm-reef-1444.herokuapp.com/');
				$('#projectTitle').text('Quora For Dummies');
				$('#projectContent').text('Initially inspired by the hit Q&A platform, Quora, Quora For Dummies was created in order to provide a platform for questions that only require a more simplistic answer. Through providing respondents with a finite number of options on which they can vote, Quora For Dummies provides a great pulse check on whatever is on your mind!');
				$('#gitHub').text('darraghmonaghan/polling');
				$('#gitHub').attr('href', 'https://github.com/darraghmonaghan/polling');
				$('#heroku').text('calm-reef-1444');
				$('#heroku').attr('href', 'https://calm-reef-1444.herokuapp.com/');				
				$('#techStack').text('Ruby on Rails, HTML5, CSS3, PostgreSQL, BootStrap, Chartkick.js');
		}

		function changeRentalFind() {
				$('#portfolioImg').attr('src', '/static/images/rentalFind.png');
				$('#clickImg').attr('href', '');
				$('#projectTitle').text('Rental Find');
				$('#projectContent').text('Rental Find was developed as part of a 4 person team, over a 36 hour period, during a hackathon hosted by The Zillow Group; which granted access to their New Listing and Public Records API. Rental Find was created in order to help streamline the process of finding investment properties, helping to tune out the noise during the search process, and help individuals find cashflow positive properties.');
				$('#gitHub').text('N/A');
				$('#gitHub').attr('href', '');
				$('#heroku').text('N/A');
				$('#heroku').attr('href', '');
				$('#techStack').text('Ruby on Rails, JavaScript, HTML5, CSS3, JQuery, BootStrap, Zillow API, Retsly API');		
		}

		function changeWeatherApp() {
				$('#portfolioImg').attr('src', '/static/images/weatherApp.png');
				$('#clickImg').attr('href', 'https://shielded-plateau-3141.herokuapp.com/');
				$('#projectTitle').text('weatherApp');
				$('#projectContent').text('An app that takes advantage of the free OpenWeatherMap API in order to provide a city specific weather search.');
				$('#gitHub').text('darraghmonaghan/weatherApp');
				$('#gitHub').attr('href', 'https://github.com/darraghmonaghan/weatherApp');
				$('#heroku').text('shielded-plateau-3141');
				$('#heroku').attr('href', 'https://shielded-plateau-3141.herokuapp.com/');
				$('#techStack').text('Ruby on Rails, Twitter Bootstrap, HTTParty Gem and the Openweathermap.org API');		
		}

		function changeElection2016() {
				$('#portfolioImg').attr('src', '/static/images/election2016.png');
				$('#clickImg').attr('href', 'http://guarded-beach-51356.herokuapp.com/');
				$('#projectTitle').text('#Election2016');
				$('#projectContent').text('The platform allows users to browse what the USA is tweeting about in the run up to the 2016 election, through filtering election related tweets via geographical origin, and displaying them grouped by major city.');
				$('#gitHub').text('darraghmonaghan/twitterAPI');
				$('#gitHub').attr('href', 'https://github.com/darraghmonaghan/twitterAPI');
				$('#heroku').text('guarded-beach-51356');
				$('#heroku').attr('href', 'https://guarded-beach-51356.herokuapp.com/');
				$('#techStack').text('Developed using JavaScript, Node.js, with data obtained from the Twitter Search API');		
		}


		console.log('JQuery ready....');

		// project 1 - iCaddy //						
		$('#portfolio1').hover(changeICaddy);

		// project 2 - ENCORE //
		$('#portfolio2').hover(changeEncore);

		// project 3 - Quora for Dummies //
		$('#portfolio3').hover(changeQuora);	

		// project 4 - Rental Find //
		$('#portfolio4').hover(changeRentalFind);

		// project 5 - weatherApp //
		$('#portfolio5').hover(changeWeatherApp);

		// project 6 - #Election2016 //
		$('#portfolio5').hover(changeElection2016);

});


    
