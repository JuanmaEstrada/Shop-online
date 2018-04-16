$(document).ready(function(){

var Product = function(photo,name, price,description){
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
	html+=  <div class="row">
			<div class="col-md-9 mt-4 mb-4 ">
				<div class="row">
					<div class="col-md-3"> 
						<img src="https://www.lahiguera.net/musicalia/artistas/la_pegatina/disco/8934/portada-m.jpg" class="img-fluid" alt="">
						<h4> La pegatina</h4>
						<p>Ahora o nunca.</p>
						<h5>10€</h5>
						<button class="btn btn-primary"> Comprar</button>
						 </div>
					<div class="col-md-3 img-fluid">
					<img src="https://pre00.deviantart.net/dd35/th/pre/i/2013/351/2/b/ac_dc_thunderstruck_album_reimagined_by_jerle73-d6yb5kr.jpg" class="img-fluid" alt=""> 
						<h4> AC/DC</h4>
						<p> Thunderstruk </p>
						<h5>18€</h5>
						<button class="btn btn-primary"> Comprar</button>
					</div>
					<div class="col-md-3"> 
						<img src="https://gcdn.emol.cl/discos/files/2016/11/metallica-hardwired-to-self-destruct-768x768.jpg" class="img-fluid" alt="">
						<h4> Metallica</h4>
						<p>Hardwire, to self-destruct</p>
						<h5>17€</h5>
						<button class="btn btn-primary"> Comprar</button>
					</div>
					<div class="col-md-3"> 
						<img src="https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201607/05/00105110274692____2__600x600.jpg" alt="" class="img-fluid">
						<h4> Extremoduro</h4>
						<p>Iros todos a ..</p>
						<h5>20€</h5>
						<button class="btn btn-primary"> Comprar</button>
					</div>

				</div>				
			</div>
}



})


