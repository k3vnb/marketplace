function cart(bag, shoe, sweater) {
  this.bag = bag;
  this.shoe = shoe;
  this.sweater = sweater;
  this.cost = 0;
}

cart.prototype.bagPrice = function() {
  this.cost += 30;
}

cart.prototype.shoePrice = function() {
  this.cost += 19.99;
}

cart.prototype.sweaterPrice = function() {
  this.cost += 25;
}

$(function() {
  var myCart = new cart();
  myCart.bag = "";
  myCart.shoe = "";
  myCart.sweater = "";
  myCart.cost = 0;

  $("a#cart-tab").click(function() {
    $("a#shop-tab").removeClass("active");
    $("a#cart-tab").addClass("active");
    $("#shop-body").hide();
    $("#cart-body").show();
    $("#output-cost").text("Cart Total $" + myCart.cost);
  });
  $("a#shop-tab").click(function() {
    $("a#shop-tab").addClass("active");
    $("a#cart-tab").removeClass("active");
    $("#shop-body").show();
    $("#cart-body").hide();
  });

  $("a#bag").click(function(event) {
    event.preventDefault();
    myCart.bag += this.id;
    myCart.bagPrice();
    $(".cart-empty").remove();
    $("#output-bag").prepend('<br><p class="cart-item"><img src="img/bag.jpg" alt="orange bag">Orange bag in your cart</p>');
  });
  $("a#shoe").click(function(event) {
    event.preventDefault();
    myCart.shoe += this.id;
    myCart.shoePrice();
    $(".cart-empty").remove();
    $("#output-shoe").prepend('<br><p class="cart-item"><img src="img/shoe.jpeg" alt="shoe">Bad shoe in your cart</p>');
  });
  $("a#sweater").click(function(event) {
    event.preventDefault();
    myCart.sweater += this.id;
    myCart.sweaterPrice();
    $(".cart-empty").remove();
    $("#output-sweater").prepend('<br><p class="cart-item"><img src="img/sweater.jpg" alt="ugly sweater">Ugly sweater in your cart</p>');
  });


});
