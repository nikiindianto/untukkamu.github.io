let i = 0;
let n = 'Anastasya Maulidina';
let g = 'Good ';

let pagi = g + 'morning,' + n;
let siang = g + 'afternoon,' + n;
let malam = g + 'evening,' + n;
let malem = g + 'night,' + n;

//DOM elements
let showTeks = document.querySelector('.teks');
let showJam = document.querySelector('.jam');
let random = document.querySelector('.quo');
let element = document.querySelector("#background")
let showBg = document.body.style.backgroundColor;

//Quotes alay
const texts = [

    "Jika saatnya tiba, sedih akan menjadi tawa, perih akan menjadi cerita, kenangan akan menjadi guru, rindu akan menjadi temu, kau dan aku akan menjadi kita. - Fiersa Besari",
    "Cinta selalu saja misterius. Jangan diburu-buru, atau kau akan merusak jalan ceritanya sendiri. - Tere Liye",
    "Rindu tidak menuntut banyak hal. Ia hanya mengharapkan kabar dan pertemuan. - Alam Arifin",
    "Yang patah tumbuh, yang hilang berganti. - Haikal Art",
    "Bukankah hidup ini sebetulnya mudah? Jika rindu, datangi. Jika tidak senang, ungkapkan. Jika cemburu, tekankan. Jika lapar, makan. Jika mulas, buang air. Jika salah, betulkan. Jika suka, nyatakan. Jika sayang, tunjukkan. Manusianya yang sering kali mempersulit segala sesuatu. Ego mencegah seseorang mengucap \"Aku membutuhkanmu\". - Fiersa Besari",
    "Beberapa rindu memang harus sembunyi-sembunyi. Bukan untuk disampaikan, hanya untuk dikirimkan lewat doa. - Fiersa Besari",
    "Hujan dan kamu adalah rindu.Kita akan menikmatinya dalam senja-senja beranjak pulang. Dalam rasa sayang yang tak akan pernah hilang. Bahkan saat hujan telah berhenti. - Boy Candra",
    "Saat lantunan rindu adalah alasan setiap pertemuan. - Wira Nagara",
    "Sungguh rindu membuat kebodohan terasa begitu cerdas. - Wira Nagara",
    "Kesalahanku, menjadikanmu alasan segala rindu. - Wira Nagara",
    "Jika panas, keringkan lukamu. Jika hujan, nikmati rindu. Jika gelap, biarkan harapan menuntumu. Mentari akan selalu terbit, juga senyumanmu. - Fiersa Besari",
    "Mungkin seseorang masih tak tahu lirih perih dalam rintik rindu ini. Selamat malam, kamu yang berlalu dalam gerimis. - Helvy Tiana Rosa",
    "Jika nanti, semesta bercanda dan mempertemukan kita lagi. Segeralah menghindar, sebab bagiku kamu tidak lagi sesuatu yang menarik meski rindu tak sepenuhnya memudar. - Boy Candra",
    "Kalau sampai rindu, aku tidak akan bilang-bilang, aku akan datang. Tidak ada yang berat, selama hati kita masih erat. - Fiersa Besari",
    "Jika kau percaya hujan adalah satu persen air, sembilan puluh sembilan persen kenangan, ya silakan. Kalau aku percaya hujan seratus persen adalah rindu, itu urusanku. - Boy Candra",
    "Lucu, kita membentuk pola pikir anak kecil agar tumbuh menjadi seperti kita. Padahal, diam-diam kita rindu menjadi anak kecil lagi. - Fiersa Besari"
    
];

//Initialize
function init() {
    startTime();
    randQuo();
	jamS();
}

//Show clock
function startTime() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
	var s = today.getSeconds();
	
    m = checkTime(m);
	s = checkTime(s);
	
    showJam.innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
	
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
	return i;
	
  }

  //Show random quote
  function randQuo() {

    random.innerHTML = texts[Math.floor(Math.random()*texts.length)]

  }

  //Show clock
  function jamS() {
	
    var myDate = new Date();
	var hourNow = myDate.getHours();
	
    if (hourNow < 12) {
      showTeks.innerHTML = pagi;
      showBg = element.classList.add("pagi");
    } else if (hourNow >= 12 && hourNow <= 15) {
	  showTeks.innerHTML = siang;
	  showBg = element.classList.add("siang");
    } else if (hourNow > 15 && hourNow < 19) {
      showTeks.innerHTML = siang;
      showBg = element.classList.add("sore");
    } else if ( hourNow >= 19 && hourNow <= 24){
      showTeks.innerHTML = malam;
      showBg = element.classList.add("malam");
    } else {
	  showBg = element.classList.add("malam");
    }
  }

  var brd = document.createElement("DIV");
		document.body.insertBefore(brd, document.getElementById("board"));

		const duration = 3000;
		const speed = 0.5;
		const cursorXOffset = 0;
		const cursorYOffset = -5;

		var hearts = [];
        
    //Generate heart effect
	function generateHeart(x, y, xBound, xStart, scale) {
        
        var heart = document.createElement("DIV");
		heart.setAttribute('class', 'heart');
		brd.appendChild(heart);
		heart.time = duration;
		heart.x = x;
		heart.y = y;
		heart.bound = xBound;
		heart.direction = xStart;
		heart.style.left = heart.x + "px";
		heart.style.top = heart.y + "px";
		heart.scale = scale;
        heart.style.transform = "scale(" + scale + "," + scale + ")";
        
		if(hearts == null)
				hearts = [];
			hearts.push(heart);
			return heart;
		}

		var down = false;
		var event = null;

		document.onmousedown = function(e) {
			down = true;
			event = e;
		}

		document.onmouseup = function(e) {
			down = false;
		}

		document.onmousemove = function(e) {
			event = e;
		}

		document.ontouchstart = function(e) {
			down = true;
			event = e.touches[0];
		}

		document.ontouchend = function(e) {
			down = false;
		}

		document.ontouchmove = function(e) {
			event = e.touches[0];
		}

		var before = Date.now();
		var id = setInterval(frame, 5);
		var gr = setInterval(check, 100);

		function frame() {

			var current = Date.now();
			var deltaTime = current - before;
			before = current;
			for(i in hearts) {
				var heart = hearts[i];
				heart.time -= deltaTime;
				if(heart.time > 0)
				{
					heart.y -= speed;
					heart.style.top = heart.y + "px";
					heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 200 + "px";
				}
				else
				{
					heart.parentNode.removeChild(heart);
					hearts.splice(i, 1);
				}
			}
		}

		function check() {
            
            if(down) {
                
                var start = 1 - Math.round(Math.random()) * 2;
				var scale = Math.random() * Math.random() * 0.8 + 0.2;
                var bound = 30 + Math.random() * 20;
                generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);

			}
		}