"use strict";

var myWindow;

$(document).ready(function() {
  if (annyang) {
    var clearInput = function() {
      if ( $("input").is(":focus") ) {
        $("input:focus").val("");
      } else if ( $("textarea").is(":focus") ) {
        $("textarea:focus").val("");
      }
    };

    var addText = function(txt) {
      if ( $("input").is(":focus") ) {
        $("input:focus").val(function(_, oldVal) {
           return oldVal + txt;
        });
      } else if ( $("textarea").is(":focus") ) {
        $("textarea:focus").val(function(_, oldVal) {
           return oldVal + txt;
        });
      }
    };


//click button function takes in txt paratmeter and matches it to element in the dom and clicks on the button
    var clickButton = function(txt) {
       let tempStr=txt.charAt(0).toUpperCase() + txt.slice(1);
       console.log(typeof tempStr);
       var query = "[value=" + tempStr + "]";
        $(query).click();
    };

    var scrollUp = function() {
    window.scrollBy(0, 200);
    };

    var scrollDown = function() {
    window.scrollBy(0, -200);
    };


    var reloadPage = function() {
         location.reload();
    };

    var openWindow = function () {
      myWindow=window.open("https://www.ingenius.com/", "_blank", "width=500, height=500");
    }

    var closeWindow=function(){
      myWindow.close();
    }


    var highlight=function (txt) {
      var rgxp = new RegExp(txt, 'g');
      var repl = '<b style="background-color:#ff0">' + txt + '</b>';
      document.body.innerHTML = document.body.innerHTML.replace(rgxp, repl);
    }

    var commands = {
      "erase": clearInput,
      "enter input *search": addText,
        "click *search": clickButton,
        "highlight *tag":highlight,
       "reload":reloadPage,
       "open":openWindow,
       "close":closeWindow,
       "up":scrollUp,
       "down": scrollDown,
    };


    annyang.addCommands(commands);
    annyang.start();

    $("input, textarea").on("focus", function() {
      annyang.resume();
    }).on("blur", function() {
      annyang.pause();
    });
  }
});
