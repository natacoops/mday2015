/*
 * 
 * 
 *
 * Copyright (c) 2015 Nat Cooper + Jesse Abramson
 * Licensed under the MIT license.
 */
(function ($) {
  $.mday2015 = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.mday2015.options, options);
    // Return the name of your plugin plus a punctuation character.
    return 'mday2015' + options.punctuation;
  };

  // Default options.
  $.mday2015.options = {
    punctuation: '.'
  };
}(jQuery));
