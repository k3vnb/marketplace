$(function() {
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
});
