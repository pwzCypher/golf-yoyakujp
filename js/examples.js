
(function($) {

    "use strict";

    $(function() {

        $.extend( $.ui.slider.prototype.options, { 

            animate: "fast",

            stop: function() {

                var ident = this.id || this.className;
                ga("send", "event", "slider", "interact", ident );

            }

        });


        $("#example-slider")
            .slider({ max: 20, value: 0 });

        $("#example-slider-pips")
            .slider({ max: 1, value: 6 })
            .slider("pips")
            .slider("float");





        $("#example-pips")
            .slider({ max: 50, value: 10 })
            .slider("pips");

        $("#example-float")
            .slider({ max: 50, value: 10 })
            .slider("float");





        $("#styling-before-slider")
            .slider({ max: 20, value: 10 })
            .slider("pips");

        $("#styling-after-slider")
            .slider({ max: 20, value: 10 })
            .slider("pips");





        $("#show-rest-slider")
            .slider({ max: 12, value: 6 })
            .slider("pips", {
                rest: "label"
            });





        $("#hide-rest-slider")
            .slider({ max: 12, range: true, values: [3, 9] })
            .slider("pips", {
                rest: false
            });





        $("#show-only-pips-slider")
            .slider({ max: 30, value: 20 })
            .slider("pips", {
                first: "pip",
                last: "pip"
            });





        $("#prefix-suffix-slider")
            .slider({ min: 0, max: 100, value: 50, step: 10 })
            .slider("pips", {
                rest: "label",
                prefix: "&dollar;",
                suffix: ".00&cent;"
            });




        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var activeMonth = new Date().getMonth();

        $("#custom-labels-output").text( "The current month is: " + months[activeMonth] );

        $("#custom-labels-slider")
            .slider({ min: 0, max: months.length-1, value: activeMonth })
            .slider("pips", {
                rest: "label",
                labels: months
            })
            .on("slidechange", function(e,ui) {
                $("#custom-labels-output").text( "You selected " + months[ui.value] + " (" + ui.value + ")");
            });
            //.trigger("slidechange");




        var hanzi= ["指定", "6時", "7時", "8時", "9時", "10時", "11時", "12時", "午後時"];
		var hanzi2= ["指定", "6", "7", "8", "9", "10", "11", "12", "午後"];

        $("#hanzi-labels-slider")
            .slider({ min: 0, max: hanzi.length-1, value: 0 })
            .slider("pips", {
                rest: "label",
                labels: hanzi
				
            })
            .slider("float", {
				 
                labels: hanzi2
            });





        $("#steps-default-slider")
            .slider({ min: 0, max: 100, step: 20 })
            .slider("pips", {
                rest: "label"
				
            });




			$("#steps-fivepercent-slider")
  .slider({
      max: 28000,
	  min: 0,
      
	  step: 2000,
      values: [0, 28000],
	  range: true
  })
  .slider("pips", {
      step: 2000,
      rest: "label",
	   step: 1,
      labels: { first: "以下", last: "以上" }
  })
  .slider("float");
			
			
/* 
        $("#steps-fivepercent-slider")
            .slider({ min: 0, max: 26000, range: true, values: [0, 2000] })
            .slider("pips", {
                rest: "label"
            })
            .slider("float"); */





        $("#steps-stacking-slider")
            .slider({ min: 0, max: 1000, step: 100 })
            .slider("pips", {
                rest: "label",
                step: 2
            })
            .slider("float");






        var stepmin = 0;
        var stepmax = 20;


        $(".step-table-slider-11")
            .slider({ min: stepmin, max: stepmax })
            .slider("pips", { rest: "label" });

        $(".step-table-slider-21")
            .slider({ min: stepmin, max: stepmax, step: 2 })
            .slider("pips", { rest: "label" });

        $(".step-table-slider-51")
            .slider({ min: stepmin, max: stepmax, step: 5 })
            .slider("pips", { rest: "label" });



        $(".step-table-slider-12")
            .slider({ min: stepmin, max: stepmax })
            .slider("pips", { step: 2, rest: "label" });

        $(".step-table-slider-2-52")
            .slider({ min: stepmin, max: stepmax, step: 2.5 })
            .slider("pips", { step: 2, rest: "label" });

        $(".step-table-slider-52")
            .slider({ min: stepmin, max: stepmax, step: 5 })
            .slider("pips", { step: 2, rest: "label" });



        $(".step-table-slider-15")
            .slider({ min: stepmin, max: stepmax })
            .slider("pips", { step: 5, rest: "label" });

        $(".step-table-slider-0-55")
            .slider({ min: stepmin, max: stepmax, step: 0.5 })
            .slider("pips", { step: 5, rest: "label" });

        $(".step-table-slider-35")
            .slider({ min: stepmin, max: stepmax, step: 3 })
            .slider("pips", { step: 5, rest: "label" });



        $(".step-table-slider-32")
            .slider({ min: stepmin, max: stepmax, step: 3 })
            .slider("pips", { step: 2, rest: "label" });

        $(".step-table-slider-2-53")
            .slider({ min: stepmin, max: stepmax, step: 2.5 })
            .slider("pips", { step: 3, rest: "label" });


        $("[class^=step-table-slider-]").slider("float");




        $("#vertical-slider")
            .slider({ min: 0, max: 20, orientation: "vertical" })
            .slider("pips", {
                rest: "label",
                step: "5"
            });

    });

}(jQuery));