/*
 * Copyright (c) 2015 Nat Cooper + Jesse Abramson
 * Licensed under the MIT license.
 */
 $(function () {
	$('.nat').mouseenter(function(){
		$('.n').css('opacity','1');
	});
	$('.nat').mouseleave(function(){
		$('.n').css('opacity','0');
	});

	$('.jesse').mouseenter(function(){
		$('.j').css('opacity','1');
	});
	$('.jesse').mouseleave(function(){
		$('.j').css('opacity','0');
	});
	$('.jesse').click(function(){
		window.location.href = 'http://jesseabramson.com';
	});
	$('.nat').click(function(){
		window.location.href = 'http://natcooper.com';
	});
	cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
	  $('#cheat').fadeIn();
	});
});
  