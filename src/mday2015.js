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

  mdayApp.quotes = []
  mdayApp.quotes.push('"As far as I\'m concerned, there\'s no job more important on the planet than being a mom." - Mark Wahlberg');
  mdayApp.quotes.push('"My mom is definitely my rock." - Alicia Keys');
  mdayApp.quotes.push('"I owe much to mother. She had an expert\'s understanding, but also approached art emotionally." - David Rockefeller');
  mdayApp.quotes.push('"Mom always tells me to celebrate everyone\'s uniqueness. I like the way that sounds." - Hilary Duff');
  mdayApp.quotes.push('"Sometimes the strength of motherhood is greater than natural laws." - Barbara Kingsolver');
  mdayApp.quotes.push('"My mom\'s hot. I mean she\'s old, but my mom\'s out of control." - Paul Walker');
  mdayApp.quotes.push('"I\'ve learned that every working mom is a superwoman." - Uma Thurman');
  mdayApp.quotes.push('"I am sure that if the mothers of various nations could meet, there would be no more wars." - E. M. Forster');
  mdayApp.quotes.push('"You may have tangible wealth untold. Caskets of jewels and coffers of gold. Richer than I you can never be — I had a mother who read to me." — Strickland Gillilan');
  mdayApp.quotes.push('"Mama was my greatest teacher, a teacher of compassion, love and fearlessness. If love is sweet as a flower, then my mother is that sweet flower of love." - Stevie Wonder');

  mdayApp.data = []
  mdayApp.data.push("&allowedIngredient[]=bacon&allowedIngredient[]=eggs&allowedIngredient[]=toast&excludedIngredient[]=avocado&flavor.sweet=0.3&maxResult=20&imagesOnly=true");
  mdayApp.data.push("&allowedIngredient[]=eggs&allowedIngredient[]=onions&excludedIngredient[]=avocado&excludedIngredient[]=hot%20sauce&excludedIngredient[]=tomatoes&flavor.piquant=1&maxResult=20&imagesOnly=true");
  mdayApp.data.push("&allowedIngredient[]=avocado&allowedIngredient[]=eggs&allowedIngredient[]=salsa&excludedIngredient[]=hummus&excludedIngredient[]=tortillas&excludedIngredient[]=wheat&maxResult=20&imagesOnly=true");
  mdayApp.data.push("&allowedIngredient[]=spinach&excludedIngredient[]=eggs&excludedIngredient[]=oats&allowedDiet[]=vegan&flavor.meaty=0.1&maxResult=20&imagesOnly=true");
  mdayApp.data.push("&allowedIngredient[]=bacon&allowedIngredient[]=eggs&allowedIngredient[]=potatoes&allowedIngredient[]=sausage&flavor.meaty=0.7&maxResult=20&imagesOnly=true");
  mdayApp.data.push("&allowedIngredient[]=fruit&allowedIngredient[]=kiwi&allowedIngredient[]=strawberries&excludedIngredient[]=avocado&excludedIngredient[]=lemon&excludedIngredient[]=lemon juice&excludedIngredient[]=nuts&maxResult=20&imagesOnly=true");
  mdayApp.data.push("&allowedIngredient[]=eggs&allowedIngredient[]=quinoa&excludedIngredient[]=bacon&excludedIngredient[]=cranberry%20sauce&excludedIngredient[]=spinach&flavor.meaty=0.7&maxResult=20&imagesOnly=true");
  mdayApp.data.push("&allowedIngredient[]=eggs&excludedCuisine[]=english excludedCuisine[]=italian&excludedCuisine[]=kid-friendly excludedCuisine[]=southern%20&%20soul%20food&excludedCuisine[]=american allowedCuisine[]=greek&allowedCuisine[]=asian&allowedCuisine[]=german allowedCuisine[]=indian&allowedCuisine[]=irish&allowedCuisine[]=japanese&maxResult=20&imagesOnly=true");
  mdayApp.data.push("&allowedIngredient[]=eggs&allowedIngredient[]=salmon&flavor.sweet=0.3&maxResult=20&imagesOnly=true");
  mdayApp.data.push("&allowedIngredient[]=strawberries&allowedIngredient[]=sugar&excludedIngredient[]=oats&flavor.meaty=0.6&flavor.sweet=0.9&maxResult=20&imagesOnly=true");
  
  function populateSearchResults( results ) { 

    mdayApp.results = results.matches;
    mdayApp.quote = mdayApp.quotes[$('#momType').prop("selectedIndex")];
      console.log(mdayApp.results);
      console.log(mdayApp.quote);
      console.log($('#momType').prop("selectedIndex"));

    randomResult = Math.floor(Math.random() * (mdayApp.results.length-1) - 1);
    while (!('smallImageUrls' in mdayApp.results[randomResult])) {
      randomResult = Math.floor(Math.random() * (mdayApp.results.length-1) - 1);
      console.log("bad index");
    }


    $("#recipeImg").attr("src", mdayApp.results[randomResult].smallImageUrls[0].substring(0, mdayApp.results[randomResult].smallImageUrls[0].length-4));
    $("#recipeImg").attr("alt", mdayApp.results[randomResult].recipeName);
    $("#recipeTitle").text(mdayApp.results[randomResult].recipeName);

  }
  
  $(function () {
    
    $('#getResults').on('click', function(event) {
      
      event.preventDefault();
       var yummlyAPI = "http://api.yummly.com/v1/api/recipes?_app_id=" + mdayApp.app_id + "&_app_key=" + mdayApp.app_key + mdayApp.data[$('#momType').prop("selectedIndex")];

      $.ajax({
        url: yummlyAPI, 
        datatype: 'json',
        success: populateSearchResults
      });

    });
      
  });

  