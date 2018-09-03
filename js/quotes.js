//JavaScript for Random Quote Generator authored and/or amended by Brian Kidd
//Array of quote objects 
var quotes = [

	{
		quote:	"Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",
		source:	"Abraham Lincoln",
		citation: "The Gettysburg Address",
		date:	"November 19, 1863",
		imgsrc:	"images/abraham-lincoln.jpg" 
	},
	{
		quote:	"Observe good faith and justice toward all nations. Cultivate peace and harmony with all.",
		source:	"George Washington",
		citation: "Farewell Address",
		date: "September 17, 1796",
		imgsrc:	"images/george-washington.jpg"
	},
	{
		quote:	"Nobody will ever deprive the American people of the right to vote except the American people themselves and the only way they could do this is by not voting.",
		source:	"Franklin D. Roosevelt",
		citation: "Radio Address from the White House",
		date:	"October 5, 1944",
		imgsrc: "images/franklin-d-roosevelt.jpg"
	},
	{
		quote:	"Be practical as well as generous in your ideals. Keep your eyes on the stars and your feet on the ground.",
		source: "Theodore Roosevelt",
		citation:"Address at Prize Day Exercises at Groton School",
		date:	"May 24, 1904",
		imgsrc: "images/theodore-roosevelt.jpg"
	},
	{
		quote:	"Every gun that is made, every warship launched, every rocket fired signifies in the final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed. This world in arms is not spending money alone. It is spending the sweat of its laborers, the genius of its scientists, the hopes of its children. This is not a way of life at all in any true sense. Under the clouds of war, it is humanity hanging on a cross of iron.",
		source:	"Dwight D. Eisenhower",
		citation: "The Chance for Peace speech",
		date: "April 16, 1953",
		imgsrc:	"images/dwight-d-eisenhower.jpg"
	},
	{
		quote:	"In reading the lives of great men, I found that the first victory they won was over themselves... self-discipline with all of them came first.",
		source:	"Hary S. Truman",
		citation: "longand authored on",
		date: "May 14, 1934",
		imgsrc:	"images/harry-s-truman.jpg"
	},
	{
		quote: "Leave all the afternoon for exercise and recreation, which are as necessary as reading. I will rather say more necessary because health is worth more than learning.",
		source: "Thomas Jefferson",
		date: "August 19, 1785",
		imgsrc:	"images/thomas-jefferson.jpg"
	},
	{
		quote: "Let us not seek the Republican answer or the Democratic answer, but the right answer. Let us not seek to fix the blame for the past. Let us accept our own responsibility for the future.",
		source: "John F. Kennedy",
		citation: "Loyola College Alumni Banquet speech as senator",
		date: "February 18, 1958",
		imgsrc:	"images/john-f-kennedy.jpg"
	},
	{
		quote:  "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
		source: "Ronald Reagan",
		citation: "Interview with Mike Wallace, as Governor of California",
		date: "December, 14 1975",
		imgsrc:	"images/ronald-reagan.jpg"
	},
	{
		quote: "Books and ideas are the most effective weapons against intolerance and ignorance.",
		source: "Lyndon Baines Johnson",
		citation: "Upon amending the Library Services Act",
		date: "February 11, 1964",
		imgsrc: "images/lyndon-b-johnson.jpg"
	},
	{
		quote: "I have found one can never get anything in life that is worth while without fighting for it.",
		source: "Woodrow Wilson",
		citation: "After signing the Treaty of Versailles",
		date: "June 28, 1919",
		imgsrc:	"images/woodrow-wilson.jpg"
	},
	{
		quote: "The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope.",
		source: "Barack Obama",
		citation: "2008 Primaries",
		imgsrc:	"images/barack-obama.jpg"
	},
	{
		quote:  "It is only when the people become ignorant and corrupt, when they degenerate into a populace, that they are incapable of exercising their sovereignty. Usurpation is then an easy attainment, and an usurper soon found. The people themselves become the willing instruments of their own debasement and ruin. Let us, then, look to the great cause, and endeavor to preserve it in full force. Let us by all wise and constitutional measures promote intelligence among the people as the best means of preserving our liberties.",
		source: "James Monroe",
		citation: "First Inaugural Address",
		date: "March 14, 1817",
		imgsrc:'images/james-monroe.jpg'
	},
	{
		quote: "One great object of the Constitution was to restrain majorities from oppressing minorities or encroaching upon their just rights.",
		source: "James K. Polk",
		citation: "Inaugural Address",
		date: "March 4, 1845",
		imgsrc:	"images/james-k-polk.jpg"
	},
	{
		quote: "There is nothing wrong in America that can't be fixed with what is right in America.",
		source: "Bill Clinton",
		citation: "First Inaugural Address",
		date: "January 20, 1993",
		imgsrc:	"images/bill-clinton.jpg"
	},
	{
		quote: "That's all a man can hope for during his lifetime - to set an example - and when he is dead, to be an inspiration for history.",
		source: "William McKinley Jr.",
		imgsrc:	"images/william-mckinley.jpg"
	},
	{
		quote: "The purpose of separation of church and state is to keep forever from these shores the ceaseless strife that has soaked the soil of Europe in blood for centuries.", 
		source: "James Madison",
		imgsrc: "images/james-madison.jpg"
	},
	{
		quote: "It is to be regretted that the rich and powerful too often bend the acts of government to their own selfish purposes.",
		source: "Andrew Jackson",
		citation: "Veto Meesage Regarding the Bank of the United States",
		date: "July 10, 1832",
		imgsrc:	"images/andrew-jackson.jpg"
	},
	{
		quote: "Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passions, they cannot alter the state of facts and evidence.",
		source: "John Adams",
		date: "1770",
		imgsrc:	"images/john-adams.jpg"
	},
	{
		quote: "We don't want an America that is closed to the world. What we want is a world that is open to America.",
		source: "George H.W. Bush",
		citation: "Carla Hills, U.S. Trade Reprentative swearing in ceremony",
		date: "February 6, 1989",
		imgsrc:	"images/george-hw-bush.jpg"
	},
	{
		quote: "It's freezing and snowing in New York - we need global warming!",
		source: "Donald Trump",
		citation: "Twitter",
		date: "November 7, 2012",
		imgsrc:	"images/donald-trump.jpg"
	}
	
];
//Array of border color objects
var borderColors = [
	{
		color: "#ff0000"//red
	
	},
	{
		color: "#ffffff"//white
	
	},
	{
		color: "#0000ff"//blue
	
	}

];
/*function creates a random number between 0 and the length of the array of quote objects (the quotes object array) and then accesses the array of quote objects 
by using the random number contained in the randomQuote variable */
function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}

/*function creates a random number between 0 and the length of the array of borderColor objects and then accesses the array of borderColor objects 
by using the random number contained in the randomBorderColor variable */

function getRandomBorderColor(){
	let randomBorderColor = Math.floor(Math.random() * borderColors.length);
	
	return borderColors[randomBorderColor];
}

let screenTimer;//variable to hold the built-in JavaScript function setInterval();

function startTimer() {//sets the setInterval() timer to exectute the printQuote() function every 15 seconds
    screenTimer = setInterval(printQuote, 15000);
}

// clears the setInterval method from the timer variable
function clearTimer() {//stops the setInterval() function
    clearInterval(screenTimer);
}

//function prints the quote to the DOM by inserting elements and attributes into the HTML
function printQuote() {
    let currentQuote = getRandomQuote();//This variable contains the value that is returned by the getRandomQuote() function
	let currentBorderColor = getRandomBorderColor();//This variable contains the value that is returned by the getRandomBorderColor() function
    let html = "<p class='quote'> " + currentQuote.quote + "</p>";//the html variable contains the value of paragraph class "quote" and accesses the specific current quote with dot notation
	let presidentImage = '<img class = "image" id="image" src="' + currentQuote.imgsrc+'">';//variable enables the image contained in the randomly generated object associated with the currentQuote variable to display in the DOM
    html += "<p class='source'> " + currentQuote.source;//This concatenates the html variable to add the source to the html
	//this conditional will print out a citation to the html if it is contained in currentQuote of the quotes array
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
    }
	//this conditional will print out a date to the html if it is contained in the currentQuote of the quotes array
    if ("date" in currentQuote) {
        html += "<span class='year'> " + currentQuote.date + "</span>";
    }
    document.getElementById("quoteBox").innerHTML = html;//This will ultimately print out the information contained in the html variable to the DOM where the quoteBox id is located
	document.getElementById("presidentImage").innerHTML = presidentImage;//places the html and the currentQuote image source into the DOM
	document.getElementById("image").style.borderColor = currentBorderColor.color; //places a randomly selected border color accessed from the borderColors object with dot notation around the presidentImage
	
	clearTimer();//clears the setInterval() 
	startTimer();//starts the setInterval()

}

printQuote();//generates an object from the quotes object array, including a quote, source, image and conditionally a citation and date


document.getElementById('loadQuote').addEventListener("click", printQuote, false);/*adds a click event listener to the button with a 
loadQuote id. When the button in the HTML is clicked, the printQuote() function executes */
document.getElementById('stopQuotes').addEventListener("click", clearTimer, false);//this button stops the setInterval() function
