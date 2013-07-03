/*
 * SVG Style - jQuery plugin for change SVG styles
 *
 * Copyright (c) 2013 Vitalii Tereshchuk
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://dotoca.net/jquery-plugin-svg-style/
 *
 * Version:  1.0.0
 *
 */

/*
  How to use:
    <HTML>
      ...
      <i id="check" class="icon-user" data-svg-style="fill:red"></i>

      <script src="js/jquery-1.9.1.min.js"></script>
      <script src="js/jquery.svgfiller.js"></script>
    </HTML>

    <CSS>
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWx....
    </CSS>
 */


(function($) {
    $.fn.svgStyle = function(params) {
        return this.each(function(){
            var $self = $(this);

            if( $self.data('svgStyle') ) {
                var url = $self.css('background-image');

                if(!url.length || url !== "none") {
                    var data = url.match(/.+base64,(.*)\)/)[1];
                    var xml = window.atob(data);
                    style = params === undefined ? $self.data('svgStyle') : params;

                    // paint xml
                    if( xml.match(/style="/) ) {
                        xml = xml.replace(/style="(.*?)"/g, 'style="' + style + '"');
                    } else {
                        xml = xml.replace(/<(line|rect|circle|ellipse|path|polyline|polygon)/g, '$& style="' + style + '"');
                    }

                    // console.log("debug XML: " + xml);

                    xml = window.btoa(xml);   // convert -> base64

                    $self.css('background-image', "url('data:image/svg+xml;base64," + xml + "')");

                } else {
                    console.error(($self.attr('id') ? $self.attr('id') : $self.attr('class')) + ' URL-data is set to "none"' );
                }
            }
        });
    };
})(jQuery);

// $(document).ready(function(){
//   $('[data-svg-style]').svgFiller();
// });
