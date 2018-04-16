// Desarrolla una tienda!

// Una interfaz de una sola vista
// Tiene que tener 5-10 productos. Escribe un JSON (local) para esos productos
// (Nombre, foto, descripción precio!)
// En la interfaz tiene que haber un carrito de la compra (te acuerdas del que hiciste?? o no)

// Cuando alguien seleccione en el botón de añadir en un producto, 
// debe aparecer reflejado en el carrito. 

// El carrito debe tener botón de añadir y quitar cantidades

// El carrito debe darme el precio de cada cosa, así como multiplicado por sus unidades
// y finalmente el precio total.



// Y bonus:

// Ofertas: IVA; Añadir nuevos productos según categoría a la interfaz...

// Buscador

var Product = function(name,price,description,photo){

	this.name=name;
	this.price=price;
	this.description=description;
	this.photo=photo;

}

var product0 = new Product('Pegatina','10€','Ahora o nunca');
var product1 = new Product('Ac Dc','18€','Thundertruck');
var product3 = new Product('Metallica','17€','Hardwire self-destruct');
var product4 = new Product('Extremoduro','20€','Iros todos a tomar porculo');





