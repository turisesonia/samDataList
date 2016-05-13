(function ($) {
    $.fn.samDataList = function(func) {
        if (samDropDataList[func]) {
            var data = arguments[1];
            return samDropDataList[func](this, data);
        }
    };

    var samDropDataList = {
        init: function(dom, inputId) {
            var wrap = $("<div>");
            wrap.addClass('dropdown').insertAfter(dom);
            wrap.css("position", "relative");
            // hide original select element
            dom.hide();
            this.createInput(dom, wrap, inputId);
        },
        createInput: function(dom, wrap, inputId) {
            var self = this;
            // create input, button element
            var input = $("<input>");
            var button = $("<button>");
            var ul = $("<ul datalist>");
            input[0].id = inputId;
            input[0].name = inputId;
            // add bootstrap class
            input.addClass("form-control").attr("autocomplete", "off");
            button.addClass("btn glyphicon glyphicon-chevron-down").attr("data-toggle", "dropdown");
            // style inner button
            button.css("position", "absolute");
            button.css("padding", "5px");
            button.css("right", "0");
            ul.addClass("dropdown-menu");
            wrap.append(input).append(ul).append(button);

            button.on('click', function () {
                self.generate(dom, input, "");
            })

            input.on('input', function () {
                self.generate(dom, input, this.value);
                $('.dropdown-toggle').dropdown();
                wrap.addClass("open");
            });
        },
        generate: function(dom, input, data) {
            // generate drop down list
            $("ul[datalist] > li").remove();
            var dataArray = dom[0].options;
            for (var i = 0; i < dataArray.length; i++) {
                if (dataArray[i].value.indexOf(data) > -1) {
                    var li = $("<li value='" + dataArray[i].value + "'><a>" + dataArray[i].text + "</a></li>");
                    li.click(function () {
                        // click li , set input value
                        input.val($(this).attr("value"));
                        input.trigger("input");
                    });
                    $("ul[datalist]").append(li);
                }
            }
        }
    };
})(jQuery);