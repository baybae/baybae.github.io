let feed = [];

// Pull and apply JSON data
function viewJSON() {

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4) {
			feed = JSON.parse(xhr.responseText);

			console.log(feed);
			console.log(feed.data.pins.length); 
			
			picCount.append(feed.data.pins.length);
			
			for (let i=0; i < feed.data.pins.length; i++) {
				list.innerHTML += '<div class="pic" style="background: url(\'' + feed.data.pins[i].images["237x"].url + '\') 50% no-repeat; background-size: cover;"></div>'; 
			}

		}

	};
	xhr.open('GET', 'https://api.pinterest.com/v3/pidgets/boards/steven_ventimiglia/guinea-pigs/pins/?access_token=AQnH60vIsJtYcssWyfWyCVBVudGQFO8NbCXJxehEaEqbdgArzAAAAAA&fields=id%2Clink%2Cnote%2Curl');
	xhr.send();
}

const header = document.createElement('header');
const list = document.querySelector('#pinterest');
const footer = document.createElement('footer');

const heading = document.createElement('h1');
const picCount = document.createElement('div');

header.setAttribute('class', 'group');
header.setAttribute('style', 'position: relative; padding: 0 20px 10px;');

footer.setAttribute('style', 'color: #666; text-align: center; padding: 0 20px 20px');
footer.innerHTML = '&copy; 2017';

heading.setAttribute('style', 'float: left; font-size: 2.5em;padding-top: 20px;')
heading.append("Guinea Pigs");

picCount.setAttribute('style','float:right;font-size: 1.5em;padding-top: 30px;');
picCount.prepend('Pictures: ');

document.body.appendChild(header);
document.body.appendChild(list);
document.body.appendChild(footer);

header.appendChild(heading);
header.appendChild(picCount);

viewJSON();