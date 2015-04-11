(function ($) {
  module('jQuery.mday2015');

  test('is mday2015', function () {
    expect(2);
    strictEqual($.mday2015(), 'mday2015.', 'should be mday2015');
    strictEqual($.mday2015({punctuation: '!'}), 'mday2015!', 'should be thoroughly mday2015');
  });
  
}(jQuery));
