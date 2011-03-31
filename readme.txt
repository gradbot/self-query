The idea of self query is to remove some of the extranious function definitions while using jQuery.

e.g.

Intead of writing this.

$(".button").click(function() {
  $(".icon", this).toggle();
});

You can write this.

$(".button").click($$(".icon").toggle());


MIT License
Copyright (c) 2011 Erik Schulz