$(document).ready(function(){

var Product = function(photo,name,price,description){
	this.photo=photo;
	this.name=name;
	this.price=price;
	this.description=description;
	

}

var product0 = new Product('https://www.lahiguera.net/musicalia/artistas/la_pegatina/disco/8934/portada-m.jpg','Pegatina','10€','Ahora o nunca');
var product1 = new Product('https://pre00.deviantart.net/dd35/th/pre/i/2013/351/2/b/ac_dc_thunderstruck_album_reimagined_by_jerle73-d6yb5kr.jpg','Ac Dc','18€','Thundertruck');
var product2 = new Product('https://gcdn.emol.cl/discos/files/2016/11/metallica-hardwired-to-self-destruct-768x768.jpg','Metallica','17€','Hardwire self-destruct');
var product3 = new Product('https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201607/05/00105110274692____2__600x600.jpg','Extremoduro','20€','Iros todos a tomar porculo');


var html="";
productShop={product0, product1, product2, product3};
for(k in productShop){
	html+=  '<section class=" top container ">'+
			'<div class="row">'+
			'<div class="col-md-9 mt-4 mb-4 ">'+
				'<div class="row">'+
					'<div class="col-md-3">'+
						'<img class ="photo1 img-fluid" src='+productShop[k].photo+'alt="Imagen descriptiva del producto">'+
						'<h4>'+productShop[k].name+'</h4>'+
						'<p>'+productShop[k].description+'</p>'+
						'<h5>'+productShop[k].price+'</h5>'+
						'<button class="btn btn-primary"> Comprar</button>'+
						 '</div>'
			
}

$('.top').append(html)

})


