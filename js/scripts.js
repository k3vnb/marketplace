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
  myCart.cost = "";

  $("a#cart-tab").click(function() {
    $("a#shop-tab").removeClass("active");
    $("a#cart-tab").addClass("active");
    $("#shop-body").hide();
    $("#cart-body").show();
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
    $("#output-bag").prepend(" bag ");
    alert("bag");
  });
  $("a#shoe").click(function(event) {
    event.preventDefault();
    myCart.shoe += this.id;
    myCart.shoePrice();
    $("#output-shoe").prepend(" shoe ");
    alert("shoe");
  });
  $("a#sweater").click(function(event) {
    event.preventDefault();
    myCart.sweater += this.id;
    myCart.sweaterPrice();
    $("#output-sweater").prepend(" sweater ");
    alert("sweater");
  });


});
