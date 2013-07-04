# jQuery.SVGStyle plugin

SVG Style - jQuery plugin to manipulate with styles of SVG in runtime.
This is a simple way to manipulate with SVG-styles of `url("data:image/svg+xml;base64,… ")`!


## Demo

[How it works, you can find here](http://xvoland.github.io/jquery-plugin-svg-style/)

## Requirements

`jQuery` 1.9.x or later.

# How it works
Here is a simple SVGStyle usage:
```

    ...
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="jquery.svgstyle.js"></script>
    <script>
        $(document).ready(function(){
            $('[data-svg-style]').svgStyle();
        });
    </script>
    …
    <style>
    .icon-github {
        display: inline-block;
        width: 32px;
        height: 32px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj…vc3ZnPg==");
        margin: 15px;
}
    </style>
    …
    <body>
    <i class="icon-github" data-svg-style="fill:#bbb"></i>
    ...

```

Also you can use the dynamic change of style like `$('#id').svgStyle('fill:#333')` or `$('.class').svgStyle('stroke: #b3b3b3; stroke-width: 5')`

Also allowed to use in styles like

- `rgb(x, x, x)`
- `#bbb`
- `#b3c3d3`
- `1.25em`
- `12px`
- and etc…

More information can be found [here](http://www.w3.org/TR/SVG/styling.html)


# License

Copyright © 2013 Vitalii Tereshchuk. Licensed under the MIT license.

#### About me and welcome
I'm an independent developer and researcher in web development. Many of you'll be happy to see on [my website](http://dotoca.net)
