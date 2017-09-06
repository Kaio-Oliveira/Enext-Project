$(document).ready(function() {
	//Mobile Menu		
	$('.menu-toggle').click(function() {  
  		$(this).toggleClass('open');   		
  		$(".logo").toggleClass('hidden'); 
  		$("#searchForm").toggleClass('show');   	  		  		
  		$("#cart").toggleClass('hidden'); 
  		$('.site-nav').toggleClass('site-nav--open');
	})

	//	Lightbox pure JavaScript
	let figure = document.getElementsByClassName("boxContent");	
	let closeIcon = document.getElementsByClassName("fa-times");	

	function idToIndex(i) {
		switch (i) {
		    case "potion01":
		        return 1
		        break;
		    case "potion02":
		        return 2
		        break;
		    case "potion03":
		        return 3
		        break;
		    case "potion04":
		        return 4
		        break;
		    case "potion05":
		        return 5
		        break;
		    case "potion06":
		        return 6
		        break;		    
		}
	}

	function buildlightboxContent(array,index) {
		var potionName = document.getElementById('productName');
		var potionEffect = document.getElementById('effect');
		var potionIngredient = document.getElementById('ingredient');
		var potionPrice = document.getElementById('lightboxPrice');
		var potionsArray = array[index];

		potionName.innerHTML = potionsArray.name;
		potionEffect.innerHTML = potionsArray.effect;
		potionPrice.innerHTML = "$" + potionsArray.price;		

		var output = "";		
		for (var i = 0; i < potionsArray.ingredients.length; i++) {
			output += "<li>" + potionsArray.ingredients[i] + "</li>";
		}
		
		potionIngredient.innerHTML = output;			
	}

	function getFromJson(index) {
		let myRequest = new XMLHttpRequest();
		let url = "assets/potions.json";
		myRequest.open("GET", url);
		myRequest.onload = function () {
			let myData = (JSON.parse(myRequest.responseText)).potions;			
			buildlightboxContent(myData,index);
		}; 
		myRequest.send();
	}		

	function Open() {				
		productId = this.parentNode.id; // store the id of the figure's parent  (Ex.:potion01,potion02...)
		index = idToIndex(productId);		
		getFromJson(index);							
		lightBoxBg.style.display = "flex"; // how to display after de content is build?
	}

	function Close() {
		lightBoxBg.style.display = "none";
	}

	for (var i = 0; i < figure.length; i++) {
		figure[i].addEventListener("click",Open);
	}
	closeIcon[0].addEventListener("click",Close);
})





