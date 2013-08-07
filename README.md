# jQuery.SVGStyle plugin

SVG Style - plugin to manipulate runtime with styles of SVG and and it's magic.

This is a simple way to manipulate with SVG-styles of "inline" data like `url("data:image/svg+xml;base64,… ")`!

### Why you need use SVG at all?
SVG is an image format for vector graphics. It literally means Scalable Vector Graphics. Basically, what you work with in Adobe Illustrator. You can use SVG on the web pretty easily.

- Small file sizes that compress well
- Scales to any size without losing clarity (except very tiny)
- Looks great on *retina displays* (Macbook Pro Retina, iPhone, iPad, etc)
- Design control like CSS
- Using SVG as an `<img>`

Many CSS-frameworks like `Modernizr` can help us detect the `background-image` with a supported format. One HTTP request will be made instead of two. `Modernizr` adds a class name of "no-svg" to the html element if it doesn't support SVG.


## Demo

[How it works, you can find here](http://xvoland.github.io/jquery-plugin-svg-style/)

### Requirements

`jQuery` 1.7.x or later.


## Browser support

- Internet Explorer >= 9.0
- FireFox >= 4.0
- Google Chrome >= 4.0
- Safari >= 3.2
- Opera > 9.00

### Mobile browsers
- Android Browser >= 3.0
- Blackberry Browser >= 7.0
- FireFox for Android >= 22.0
- Google Chrome for Android >= 27.0
- iOS Safari >= 3.2
- Opera Mini >= 5.0
- Opera Mobile >= 10.0

SVG support 84.39% todays browsers

# How it works
Here is a simple SVGStyle usage:

HEAD:

```
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="jquery.svgstyle.js"></script>
    <script>
        $(document).ready(function(){
            $('[data-svg-style]').svgStyle();
        });
    </script>
```

CSS:

```
    .icon-github {
        display: inline-block;
        width: 32px;
        height: 32px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj…vc3ZnPg==");
        margin: 15px;
    }
```

HTML:

```
    <i class="icon-github" data-svg-style="fill:#bbb"></i>

```

Also you can use the dynamic change of style like `$('#id').svgStyle('fill:#333')` or `$('.class').svgStyle('stroke: #b3b3b3; stroke-width: 5')` or set it by default in tag `data-svg-style="fill:#bbb"`.

And now you can set the color like `data-svg-style="#xxx|#xxxxxx|rgb(x,x,x)"` or `.svgStyle('#xxx|#xxxxxx|rgb(x,x,x)')`

Also allowed to use in styles like

- `rgb(x, x, x)`
- `#bbb`
- `#b3c3d3`
- `1.25em`
- `12px`
- and etc…

More information can be found [here](http://www.w3.org/TR/SVG/styling.html)

# Installation
You can install jquery-placeholder by using [Bower](http://bower.io/).


# Contributing

If you'd like to contribute to this project, create a branch and send a pull request for that branch. Lint and test your code.

# License

Copyright © 2013 Vitalii Tereshchuk. Licensed under the MIT and GPL licenses.

#### About me and welcome
I'm an independent developer and researcher in web development. Many of you I'll be happy to see on [my website](http://dotoca.net)
