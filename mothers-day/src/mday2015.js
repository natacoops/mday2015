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

  mdayApp.quotes = [];
  mdayApp.quotes.push(["<span>As far as I'm concerned,</span><span>there's no job more</span><span>important</span><span>on the planet than</span><span>being a</span><span>Mom.</span>"," - Mark Wahlberg"]);
  mdayApp.quotes.push(["<span>Mama,</span><span>she has</span><span>taught me well</span><span>Told me when I was young</span><span>Son, your life’s an</span><span>open book</span><span>Don’t close it</span><span>’fore it’s done</span>"," - Metallica"]);
  mdayApp.quotes.push(["<span>I owe much to</span><span>mother.</span><span>She had an expert's</span><span>understanding,</span><span>but also approached</span><span>art emotionally.</span>"," - David Rockefeller"]);
  mdayApp.quotes.push(["<span>Mom</span><span>always</span><span>tells me to</span><span>celebrate everyone's</span><span>uniqueness.</span><span>I like the way</span><span>that sounds.</span>"," - Hilary Duff"]);
  mdayApp.quotes.push(["<span>Sometimes the</span><span>strength</span><span>of motherhood</span><span>is greater than</span><span>natural laws.</span>"," - Barbara Kingsolver"]);
  mdayApp.quotes.push(["<span>To describe my mother </span><span>would be to write about a</span><span>hurricane</span><span>in its perfect power.</span><span>Or the climbing,</span><span>falling colors of a</span><span>rainbow.</span>"," - Maya Angelou"]);
  mdayApp.quotes.push(["<span>I've learned that</span><span>every working</span><span>mom is a</span><span>superwoman.</span>"," - Uma Thurman"]);
  mdayApp.quotes.push(["<span>I am sure that if the</span><span>mothers</span><span>of various nations</span><span>could meet, there would</span><span>be no more wars.</span>"," - E. M. Forster"]);
  mdayApp.quotes.push(["<span>You may have tangible</span><span>wealth untold.</span><span>Caskets of jewels</span><span>and coffers of gold.</span><span>Richer than I</span><span>you can never be —</span><span>I had a mother who</span><span>read to me.</span>"," - Strickland Gillilan"]);
  mdayApp.quotes.push(["<span>Mama</span><span>was my</span><span>greatest teacher, a</span><span>teacher of compassion,</span><span>love and fearlessness.</span><span>If love is sweet</span><span>as a flower,</span><span>then my mother is that</span><span>sweet flower</span><span>of love.</span>"," - Stevie Wonder"]);

  mdayApp.data = [];
  mdayApp.data.push("&allowedIngredient[]=bacon&allowedIngredient[]=eggs&allowedIngredient[]=toast&excludedIngredient[]=avocado&flavor.sweet.min=0.3&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  mdayApp.data.push("&allowedIngredient[]=eggs&allowedIngredient[]=onions&excludedIngredient[]=avocado&excludedIngredient[]=hot%20sauce&excludedIngredient[]=tomatoes&flavor.piquant.min=0.8&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  mdayApp.data.push("&allowedIngredient[]=avocado&allowedIngredient[]=eggs&allowedIngredient[]=salsa&excludedIngredient[]=hummus&excludedIngredient[]=tortillas&excludedIngredient[]=wheat&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  mdayApp.data.push("&allowedIngredient[]=spinach&excludedIngredient[]=eggs&excludedIngredient[]=oats&allowedDiet[]=vegan&flavor.meaty.min=0.1&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  mdayApp.data.push("&allowedIngredient[]=bacon&allowedIngredient[]=eggs&allowedIngredient[]=potatoes&allowedIngredient[]=sausage&flavor.meaty.min=0.7&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  mdayApp.data.push("&allowedIngredient[]=fruit&allowedIngredient[]=kiwi&allowedIngredient[]=strawberries&excludedIngredient[]=avocado&excludedIngredient[]=lemon&excludedIngredient[]=lemon juice&excludedIngredient[]=nuts&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  mdayApp.data.push("&allowedIngredient[]=eggs&allowedIngredient[]=quinoa&excludedIngredient[]=bacon&excludedIngredient[]=cranberry%20sauce&excludedIngredient[]=spinach&flavor.meaty.min=0.7&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  mdayApp.data.push("&allowedIngredient[]=eggs&excludedCuisine[]=cuisine^cuisine-english&excludedCuisine[]=cuisine^cuisine-italian&excludedCuisine[]=cuisine^cuisine-kid-friendly&excludedCuisine[]=cuisine^cuisine-southern%20&%20soul%20food&excludedCuisine[]=cuisine^cuisine-american&allowedCuisine[]=cuisine^cuisine-greek&allowedCuisine[]=cuisine^cuisine-asian&allowedCuisine[]=cuisine^cuisine-german&allowedCuisine[]=cuisine^cuisine-indian&allowedCuisine[]=cuisine^cuisine-irish&allowedCuisine[]=cuisine^cuisine-japanese&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  mdayApp.data.push("&allowedIngredient[]=eggs&allowedIngredient[]=salmon&flavor.min.sweet=0.3&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  mdayApp.data.push("&allowedIngredient[]=strawberries&allowedIngredient[]=sugar&excludedIngredient[]=oats&flavor.min.meaty=0.6&flavor.sweet=0.9&maxResult=20&allowedCourse[]=course^course-Breakfast+and+Brunch&excludedCourse[]=course^course-Beverages");
  
  mdayApp.viewed = [];

  function populateSearchResults( results ) { 

    mdayApp.results = results.matches;
    mdayApp.urls = results
    mdayApp.quote = mdayApp.quotes[$('#momType').prop("selectedIndex")];

    $('#new').fadeIn().css("display","inline-block");

    cycleResult();
  }
  
  function cycleResult() {
    randomResult = Math.floor(Math.random() * (mdayApp.results.length-1) - 1);
    while ($.inArray( randomResult, mdayApp.viewed) !== -1) {
      randomResult = Math.floor(Math.random() * (mdayApp.results.length-1) - 1);
    }
    if (mdayApp.results[randomResult] === undefined) {
      randomResult = Math.floor(Math.random() * (mdayApp.results.length-1) - 1);

      mdayApp.viewed.push(randomResult);
      if (mdayApp.viewed.length === mdayApp.results.length) {
        mdayApp.viewed = [];
      }

      cycleResult();
    } else {
      if (mdayApp.results[randomResult].smallImageUrls === undefined) {
        randomResult = Math.floor(Math.random() * (mdayApp.results.length-1) - 1);

        mdayApp.viewed.push(randomResult);
        if (mdayApp.viewed.length === mdayApp.results.length) {
          mdayApp.viewed = [];
        }

        cycleResult();
      } else {
        $("#recipeImg").attr("src", mdayApp.results[randomResult].smallImageUrls[0].substring(0, mdayApp.results[randomResult].smallImageUrls[0].length-4));
        $("#recipeImg").attr("alt", mdayApp.results[randomResult].recipeName);
        $("#recipeTitle").text(mdayApp.results[randomResult].recipeName);
        $("#recipeUrl").attr("href", "http://www.yummly.com/recipe/" + mdayApp.results[randomResult].id);
        
        mdayApp.viewed.push(randomResult);
        if (mdayApp.viewed.length === mdayApp.results.length) {
          mdayApp.viewed = [];
        }
      }
    }
  }

  $(function () {
    
    $('#new').click(function(event) {
      cycleResult();
    });

    $('.dropdown').click(function(){
      $('#momType').slideToggle("slow");
      $('.triangle').toggleClass('triangleUp');
    });

    $('#clock').countdown("2015/05/10", function(event) {
      $(this).text(
        event.strftime('%D days')
      );
    });

    $('.mom').click(function(){
      $('.dropdown').css('left','0');
      $('.recipe').css('opacity','1');
      $('.theMoms div').css('display','none');
      $('.theMoms div:nth-child(' + ( $( "li" ).index( this ) + 1 ) + ')').fadeIn();
      // event.preventDefault();
      var yummlyAPI = "http://api.yummly.com/v1/api/recipes?_app_id=" + mdayApp.app_id + "&_app_key=" + mdayApp.app_key + mdayApp.data[$( "li" ).index( this )];

      $.ajax({
        url: yummlyAPI, 
        datatype: 'json',
        success: populateSearchResults
      });

      $('#quote').html(mdayApp.quotes[$( "li" ).index( this )][0]);
      $('#author').html(mdayApp.quotes[$( "li" ).index( this )][1]);
    });


     $('.mom').click(function(){
      var momIndex = ('0' + ($( "li" ).index( this ) + 1)).slice(-2)
      $('#quote').removeClass();
      $('#quote').addClass('quote' + momIndex );
      $('.card').attr('href','pdf/MDAY2015-nesseco-card' + momIndex + '.pdf');
    }); 


  });

  