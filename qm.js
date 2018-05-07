reset();
var flag=0;

var gradients=[ {
        //"name": "Berimbolo",
        colors: ["#02111D", "#037BB5", "#02111D"]
    },
    {
        //"name": "Mango",
        colors: ["#ffe259", "#ffa751"]
    },
    {
        //"name": "Windy",
        colors: ["#acb6e5", "#86fde8"]
    },
    {
        //"name": "Royal Blue",
        colors: ["#536976", "#292E49"]
    },
    {
        //"name": "Royal Blue + Petrol",
        colors: ["#BBD2C5", "#536976", "#292E49"]
    },
    {
        //"name": "Copper",
        colors: ["#B79891", "#94716B"]
    },
    {
        //"name": "Petrol",
        colors: ["#BBD2C5", "#536976"]
    },
    {
        //"name": "Sky",
        colors: ["#076585", "#fff"]
    },
    {
        //"name": "Sel",
        colors: ["#00467F", "#A5CC82"]
    },
    {
        //"name": "Skyline",
        colors: ["#1488CC", "#2B32B2"]
    },
    {
        //"name": "DIMIGO",
        colors: ["#ec008c", "#fc6767"]
    },
    {
        //"name": "Purple Love",
        colors: ["#cc2b5e", "#753a88"]
    },
    {
        //"name": "Sexy Blue",
        colors: ["#2193b0", "#6dd5ed"]
    },
     {
        //"name": "Blooker20",
        colors: ["#e65c00", "#F9D423"]
    },
    {
        //"name": "Sea Blue",
        colors: ["#2b5876", "#4e4376"]
    },
    {
        //"name": "Nimvelo",
        colors: ["#314755", "#26a0da"]
    },
    {
        //"name": "Hazel",
        colors: ["#77A1D3", "#79CBCA", "#E684AE"]
    },
    {
        //"name": "Noon to Dusk",
        colors: ["#ff6e7f", "#bfe9ff"]
    },
    {
        //"name": "YouTube",
        colors: ["#e52d27", "#b31217"]
    },
    {
        //"name": "Cool Brown",
        colors: ["#603813", "#b29f94"]
    },
    {
        //"name": "Harmonic Energy",
        colors: ["#16A085", "#F4D03F"]
    },
    {
        //"name": "Playing with Reds",
        colors: ["#D31027", "#EA384D"]
    },
    {
        //"name": "Sunny Days",
        colors: ["#EDE574", "#E1F5C4"]
    },
    {
        //"name": "Green Beach",
        colors: ["#02AAB0", "#00CDAC"]
    },
    {
        //"name": "Intuitive Purple",
        colors: ["#DA22FF", "#9733EE"]
    },
     {
        //"name": "Orca",
        colors: ["#44A08D", "#093637"]
    },
    {
        //"name": "Venice",
        colors: ["#6190E8", "#A7BFE8"]
    },
    {
        //"name": "Pacific Dream",
        colors: ["#34e89e", "#0f3443"]
    },
    {
        //"name": "Learning and Leading",
        colors: ["#F7971E", "#FFD200"]
    },
    {
        //"name": "Celestial",
        colors: ["#C33764", "#1D2671"]
    },
    {
        //"name": "Sha la la",
        colors: ["#D66D75", "#E29587"]
    },
    {
        //"name": "Mini",
        colors: ["#30E8BF", "#FF8235"]
    },
    {
        //"name": "Maldives",
        colors: ["#B2FEFA", "#0ED2F7"]
    },
    {
        //"name": "Cinnamint",
        colors: ["#4AC29A", "#BDFFF3"]
    },
    {
        //"name": "Html",
        colors: ["#E44D26", "#F16529"]
    },
    {
        //"name": "Sunkist",
        colors: ["#F2994A", "#F2C94C"]
    },
    {
        //"name": "Blue Skies",
        colors: ["#56CCF2", "#2F80ED"]
    },
    {
        //"name": "Chitty Chitty Bang Bang",
        colors: ["#007991", "#78ffd6"]
    },
    {
        //"name": "Crystal Clear",
        colors: ["#159957", "#155799"]
    },
    {
        //"name": "Mello",
        colors: ["#c0392b", "#8e44ad"]
    },
    {
        //"name": "Compare Now",
        colors: ["#EF3B36", "#FFFFFF"]
    },
    {
        //"name": "Meridian",
        colors: ["#283c86", "#45a247"]
    },
    {
        //"name": "Relay",
        colors: ["#3A1C71", "#D76D77", "#FFAF7B"]
    },
    {
        //"name": "Alive",
        colors: ["#CB356B", "#BD3F32"]
    },
    {
        //"name": "Scooter",
        colors: ["#36D1DC", "#5B86E5"]
    }];

randomGradient();

	$("#copy").on("click",function()
	{
		copy('#quote');
	});

	$("#new").on('click',function()
	{
		randomGradient();
		reset();

	});

	$("#search").on('click',function()
	{
		searchAuthor('#author');
	});

	$("#share").on('click',function()
	{
		$(".details").toggleClass('mg');
		share('#quote');
	});


function reset()
{
	var ourrequest = new XMLHttpRequest();
	ourrequest.open('get','https://talaikis.com/api/quotes/random/');
	ourrequest.onload=function()
		{
			var ourdata=JSON.parse(ourrequest.responseText)
			//console.log(ourdata);
			$('#quote').html(`<h2><i class="quote left icon"></i> ${ourdata.quote} <i class="quote right icon"></i></h2> 
				<h4> - <span id='author'> ${ourdata.author} </span> </h4>` );

		}
	ourrequest.send();
}

function copy(element)
{
  	var $temp = $("<input>");
    $(element).append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  	alert("Copied the quote");
}

function searchAuthor(element)
{
	 var authorname=$(element).text();
	 $('#search').attr('href','https://en.wikipedia.org/wiki/'+authorname);

}

function share(element)
{	
	var content=$(element).text();

	$('#send').on('click',function()
	{
		
		var pno=$('.phone').val();
		//console.log(pno);
		$('#send').attr('href','https://api.whatsapp.com/send?phone='+pno+'&text='+content);
	});
}

function randomGradient()
{
	var l=Math.floor((Math.random()*gradients.length));
	color1=gradients[l].colors[0];
	color2=gradients[l].colors[1];
	color3=gradients[l].colors[2];
	//console.log(color1, color2,color3);
	if(color3)
	{
		var foo="linear-gradient(to right,"+color1+","+color2+","+color3+")"
		console.log(foo);
		$('body').css({
		background:"linear-gradient(to right,"+color1+","+color2+","+color3+")"
		});
		
	}

	else
	{
		$('body').css({
		background:"linear-gradient(to right,"+color1+","+color2+")"
		});
	}
	
}