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
				list.innerHTML += '<img href=".href" class="pic" style="background: url(\'' + feed.data.pins[i].images["237x"].url + '\') 50% no-repeat; background-size: cover;"></img>'; 
			}

		}

	};
	xhr.open('GET', 'https://api.pinterest.com/v3/pidgets/boards/baybae_/couple/pins/?access_token=AQnH60vIsJtYcssWyfWyCVBVudGQFO8NbCXJxehEaEqbdgArzAAAAAA&fields=id%2Clink%2Cnote%2Curl');
	xhr.send();
}

const header = document.createElement('header');
const list = document.querySelector('#pinterest');



const picCount = document.createElement('href');



picCount.setAttribute('style','max-width:100%; max-height:100%;');
picCount.prepend('Pictures: ');


document.body.appendChild(list);

header.appendChild(picCount);

viewJSON();

function downloadImage(list, name){
      fetch(list)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('An error sorry'));
}