"use strict";

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

// //click button function takes in txt paratmeter and matches it to element in the dom and clicks on the button
    // var clickButton = function(txt) {
    //   document.getElementById(txt).click();
    // };
//
//     var scrollUp = function(txt) {
//       document.getElementById(txt).click();
//     };
//
//     var clickButton = function(txt) {
//       document.getElementById(txt).click();
//     };

//click button function takes in txt paratmeter and matches it to element in the dom and clicks on the button
    var clickButton = function(txt) {

       let tempStr=txt.charAt(0).toUpperCase() + txt.slice(1);
       // alert(tempStr);
       console.log(typeof tempStr);
       var query = "[value=" + tempStr + "]";
// document.querySelectorAll("input[value=String(txt)]")[0].click();
        $(query).click();

      // document.getElementById(txt).click();
    };
    //
    // var scrollUp = function() {
    //
    // };
    //
    // var scrollDown = function() {
    //
    // };
    var reloadPage = function() {
         location.reload();
        };
    // var findText = function(txt) {
    //   str.search(txt);
    // };
    var openTab = function () {
       window.open("https://www.google.ca", "_blank", "width=500, height=500");
    }
    var commands = {
      "erase": clearInput,
      "enter input *search": addText,
        "click *search": clickButton,
       // "click *search": clickButton,
       "reload":reloadPage,
       "open":openTab,

      // "scroll up": scrollUp,
      // "scroll down": scrollDown;

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
