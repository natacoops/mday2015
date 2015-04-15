/*
 * 
 * 
 *
 * Copyright (c) 2015 Nat Cooper + Jesse Abramson
 * Licensed under the MIT license.
 */

  var mdayApp = {};

  mdayApp.app_id = '81698a1c';
  mdayApp.app_key = '1e278291b92745ce12da510abe507606';

  mdayApp.data = []
  mdayApp.data.push("&q=&allowedIngredient[]=bacon&allowedIngredient[]=eggs&allowedIngredient[]=toast&excludedIngredient[]=avocado&flavor.sweet=0.3");
  mdayApp.data.push("&q=&allowedIngredient[]=eggs&allowedIngredient[]=onions&excludedIngredient[]=avocado&excludedIngredient[]=hot%20sauce&excludedIngredient[]=tomatoes&flavor.piquant=1");
  mdayApp.data.push("&q=&allowedIngredient[]=avocado&allowedIngredient[]=eggs&allowedIngredient[]=salsa&excludedIngredient[]=hummus&excludedIngredient[]=tortillas&excludedIngredient[]=wheat");
  mdayApp.data.push("&q=&allowedIngredient[]=spinach&excludedIngredient[]=eggs&excludedIngredient[]=oats&allowedDiet[]=vegan&flavor.meaty=0.1");
  mdayApp.data.push("&q=&allowedIngredient[]=bacon&allowedIngredient[]=eggs&allowedIngredient[]=potatoes&allowedIngredient[]=sausage&flavor.meaty=0.7");
  mdayApp.data.push("&q=&allowedIngredient[]=fruit&allowedIngredient[]=kiwi&allowedIngredient[]=strawberries&excludedIngredient[]=avocado&excludedIngredient[]=lemon&excludedIngredient[]=lemon juice&excludedIngredient[]=nuts");
  mdayApp.data.push("&q=&allowedIngredient[]=eggs&allowedIngredient[]=quinoa&excludedIngredient[]=bacon&excludedIngredient[]=cranberry%20sauce&excludedIngredient[]=spinach&flavor.meaty=0.7");
  mdayApp.data.push("&q=&allowedIngredient[]=eggs excludedCuisine[]=english excludedCuisine[]=italian excludedCuisine[]=kid-friendly excludedCuisine[]=southern%20&%20soul%20food excludedCuisine[]=american allowedCuisine[]=greek allowedCuisine[]=asian allowedCuisine[]=german allowedCuisine[]=indian allowedCuisine[]=irish allowedCuisine[]=japanese");
  mdayApp.data.push("&q=&allowedIngredient[]=eggs&allowedIngredient[]=salmon&flavor.sweet=0.3");
  mdayApp.data.push("&q=&allowedIngredient[]=strawberries&allowedIngredient[]=sugar&excludedIngredient[]=oats&flavor.meaty=0.6&flavor.sweet=0.9");
  var yummlyAPI = "http://api.yummly.com/v1/api/recipes?_app_id=" + mdayApp.app_id + "&_app_key=" + mdayApp.app_key + mdayApp.data[0];
  
  $.ajax({
    url: yummlyAPI + '&callback=?', 
    datatype: 'json',
    success: populateSearchResults
  });

  function populateSearchResults( results ) {
      console.log( results );
  }