(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* .bs-datepicker */\n.bs-datepicker {\n  display: flex;\n  align-items: stretch;\n  flex-flow: row wrap;\n  background: #fff;\n  box-shadow: 0 0 10px 0 #aaa;\n  position: relative;\n  z-index: 1;\n  /* button */\n  /* .bs-datepicker-head */\n  /* .bs-datepicker-body */\n  /* .current-timedate */\n  /* .bs-datepicker-multiple */\n  /* .bs-datepicker-btns */\n  /*.bs-datepicker-custom-range */\n  /* .bs-datepicker-predefined-btns */\n  /* .is-other-month */\n  /* .bs-datepicker-buttons */ }\n.bs-datepicker:after {\n    clear: both;\n    content: '';\n    display: block; }\n.bs-datepicker bs-day-picker {\n    float: left; }\n.bs-datepicker button:hover,\n  .bs-datepicker button:focus,\n  .bs-datepicker button:active,\n  .bs-datepicker input:hover,\n  .bs-datepicker input:focus,\n  .bs-datepicker input:active,\n  .bs-datepicker-btns button:hover,\n  .bs-datepicker-btns button:focus,\n  .bs-datepicker-btns button:active,\n  .bs-datepicker-predefined-btns button:active,\n  .bs-datepicker-predefined-btns button:focus {\n    outline: none; }\n.bs-datepicker-head {\n    min-width: 270px;\n    height: 50px;\n    padding: 10px;\n    border-radius: 3px 3px 0 0;\n    text-align: justify;\n    /* .bs-datepicker-head button */ }\n.bs-datepicker-head:after {\n      content: \"\";\n      display: inline-block;\n      vertical-align: top;\n      width: 100%; }\n.bs-datepicker-head button {\n      display: inline-block;\n      vertical-align: top;\n      padding: 0;\n      height: 30px;\n      line-height: 30px;\n      border: 0;\n      background: transparent;\n      text-align: center;\n      cursor: pointer;\n      color: #fff;\n      transition: 0.3s; }\n.bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:hover, .bs-datepicker-head button[disabled]:active {\n        background: rgba(221, 221, 221, 0.3);\n        color: #f5f5f5;\n        cursor: not-allowed; }\n.bs-datepicker-head button.next, .bs-datepicker-head button.previous {\n        border-radius: 50%;\n        width: 30px;\n        height: 30px; }\n.bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\n          font-size: 28px;\n          line-height: 1;\n          display: inline-block;\n          position: relative;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%; }\n.bs-datepicker-head button.current {\n        border-radius: 15px;\n        max-width: 155px;\n        padding: 0 13px; }\n.bs-datepicker-head button:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.bs-datepicker-head button:active {\n    background-color: rgba(0, 0, 0, 0.2); }\n.bs-datepicker-body {\n    padding: 10px;\n    border-radius: 0 0 3px 3px;\n    min-height: 232px;\n    min-width: 278px;\n    border: 1px solid #e9edf0;\n    /* .bs-datepicker-body table */ }\n.bs-datepicker-body .days.weeks {\n      position: relative;\n      z-index: 1; }\n.bs-datepicker-body table {\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n      /* .bs-datepicker-body table.days */\n      /* .bs-datepicker-body table.weeks */ }\n.bs-datepicker-body table th {\n        font-size: 13px;\n        color: #9aaec1;\n        font-weight: 400;\n        text-align: center; }\n.bs-datepicker-body table td {\n        color: #54708b;\n        text-align: center;\n        position: relative;\n        padding: 0; }\n.bs-datepicker-body table td span {\n          display: block;\n          margin: 0 auto;\n          font-size: 13px;\n          border-radius: 50%;\n          position: relative;\n          /*z-index: 1;*/\n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none; }\n.bs-datepicker-body table td:not(.disabled) span {\n          cursor: pointer; }\n.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          transition: 0s; }\n.bs-datepicker-body table td span.disabled,\n        .bs-datepicker-body table td.disabled span {\n          color: #9aaec1; }\n.bs-datepicker-body table td span.selected,\n        .bs-datepicker-body table td.selected span {\n          color: #fff; }\n.bs-datepicker-body table td.active {\n          position: relative; }\n.bs-datepicker-body table td.active.select-start:before {\n            left: 35%; }\n.bs-datepicker-body table td.active.select-end:before {\n            left: -85%; }\n.bs-datepicker-body table td span.active.select-start:after,\n        .bs-datepicker-body table td span.active.select-end:after,\n        .bs-datepicker-body table td.active.select-start span:after,\n        .bs-datepicker-body table td.active.select-end span:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          width: 100%;\n          height: 100%;\n          transition: 0.3s;\n          top: 0;\n          border-radius: 50%; }\n.bs-datepicker-body table td:before,\n        .bs-datepicker-body table td span:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          top: 6px;\n          bottom: 6px;\n          left: -2px;\n          right: -2px;\n          box-sizing: content-box;\n          background: transparent; }\n.bs-datepicker-body table td.active.select-start + td.active:before {\n          left: -20%; }\n.bs-datepicker-body table td:last-child.active:before {\n          border-radius: 0 3px 3px 0;\n          width: 125%;\n          left: -25%; }\n.bs-datepicker-body table td span[class*=\"select-\"],\n        .bs-datepicker-body table td[class*=\"select-\"] span {\n          border-radius: 50%;\n          color: #fff; }\n.bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before,\n      .bs-datepicker-body table.days span.active:not(.select-start):before,\n      .bs-datepicker-body table.days span.in-range:not(.select-start):before {\n        background: #e9edf0; }\n.bs-datepicker-body table.days span {\n        width: 32px;\n        height: 32px;\n        line-height: 32px; }\n.bs-datepicker-body table.days span.select-start {\n          z-index: 2; }\n.bs-datepicker-body table.days span.is-highlighted.in-range:before, .bs-datepicker-body table.days span.in-range.select-end:before {\n          background: none;\n          right: 0;\n          left: 0; }\n.bs-datepicker-body table.days td.select-start + td.select-end:before,\n      .bs-datepicker-body table.days td.select-start + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.select-end:before,\n      .bs-datepicker-body table.days td.in-range + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.in-range + td.select-end:before {\n        background: #e9edf0;\n        width: 100%; }\n.bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\n        border-radius: 3px 0 0 3px;\n        left: 0;\n        width: 100%; }\n.bs-datepicker-body table:not(.weeks) tr td:first-child:before {\n        border-radius: 3px 0 0 3px; }\n.bs-datepicker-body table.years td span {\n        width: 46px;\n        height: 46px;\n        line-height: 45px;\n        margin: 0 auto; }\n.bs-datepicker-body table.years tr:not(:last-child) td span {\n        margin-bottom: 8px; }\n.bs-datepicker-body table.months td {\n        height: 52px; }\n.bs-datepicker-body table.months td span {\n          padding: 6px;\n          border-radius: 15px; }\n.bs-datepicker .current-timedate {\n    color: #54708b;\n    font-size: 15px;\n    text-align: center;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 20px;\n    border: 1px solid #e9edf0;\n    margin-bottom: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n.bs-datepicker .current-timedate span:not(:empty):before {\n      content: \"\";\n      width: 15px;\n      height: 16px;\n      display: inline-block;\n      margin-right: 4px;\n      vertical-align: text-bottom;\n      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC); }\n.bs-datepicker-multiple {\n    display: inline-block;\n    border-radius: 4px 0 0 4px; }\n.bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-left: 10px; }\n.bs-datepicker-multiple .bs-datepicker {\n      box-shadow: none;\n      position: relative; }\n.bs-datepicker-multiple .bs-datepicker:not(:last-child) {\n        padding-right: 10px; }\n.bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\n        content: \"\";\n        display: block;\n        width: 14px;\n        height: 10px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\n        position: absolute;\n        top: 25px;\n        left: -8px; }\n.bs-datepicker-multiple .bs-datepicker .left {\n        float: left; }\n.bs-datepicker-multiple .bs-datepicker .right {\n        float: right; }\n.bs-datepicker-container {\n    padding: 15px; }\n.bs-datepicker-custom-range {\n    padding: 15px;\n    background: #eee; }\n.bs-datepicker-predefined-btns button {\n    width: 100%;\n    display: block;\n    height: 30px;\n    background-color: #9aaec1;\n    border-radius: 4px;\n    color: #fff;\n    border: 0;\n    margin-bottom: 10px;\n    padding: 0 18px;\n    text-align: left;\n    transition: 0.3s; }\n.bs-datepicker-predefined-btns button:active, .bs-datepicker-predefined-btns button:hover {\n      background-color: #54708b; }\n.bs-datepicker .is-other-month {\n    color: rgba(0, 0, 0, 0.25); }\n.bs-datepicker-buttons {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-end;\n    padding-top: 10px;\n    border-top: 1px solid #e9edf0; }\n.bs-datepicker-buttons .btn-default {\n      margin-left: 10px; }\n/* .bs-timepicker */\n.bs-timepicker-container {\n  padding: 10px 0; }\n.bs-timepicker-label {\n  color: #54708b;\n  margin-bottom: 10px; }\n.bs-timepicker-controls {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px; }\n.bs-timepicker-controls button {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 0;\n    background-color: #e9edf0;\n    color: #54708b;\n    font-size: 16px;\n    font-weight: 700;\n    vertical-align: middle;\n    line-height: 0;\n    padding: 0;\n    transition: 0.3s; }\n.bs-timepicker-controls button:hover {\n      background-color: #d5dadd; }\n.bs-timepicker-controls input {\n    width: 35px;\n    height: 25px;\n    border-radius: 13px;\n    text-align: center;\n    border: 1px solid #e9edf0; }\n.bs-timepicker .switch-time-format {\n  text-transform: uppercase;\n  min-width: 54px;\n  height: 25px;\n  border-radius: 20px;\n  border: 1px solid #e9edf0;\n  background: #fff;\n  color: #54708b;\n  font-size: 13px; }\n.bs-timepicker .switch-time-format img {\n    vertical-align: initial;\n    margin-left: 4px; }\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 1080; }\n/* screen size < 1024px */\n@media (max-width: 768px) {\n  .bs-datepicker-multiple {\n    display: flex; }\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-top: 10px;\n      margin-left: 0; } }\n/* theming */\n.theme-default .bs-datepicker-head {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td span.selected,\n.theme-default .bs-datepicker-body table td.selected span,\n.theme-default .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-default .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td.week span {\n  color: #777; }\n.theme-green .bs-datepicker-head {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td span.selected,\n.theme-green .bs-datepicker-body table td.selected span,\n.theme-green .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-green .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.week span {\n  color: #5cb85c; }\n.theme-blue .bs-datepicker-head {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td span.selected,\n.theme-blue .bs-datepicker-body table td.selected span,\n.theme-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.week span {\n  color: #5bc0de; }\n.theme-dark-blue .bs-datepicker-head {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td span.selected,\n.theme-dark-blue .bs-datepicker-body table td.selected span,\n.theme-dark-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-dark-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.week span {\n  color: #337ab7; }\n.theme-red .bs-datepicker-head {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td span.selected,\n.theme-red .bs-datepicker-body table td.selected span,\n.theme-red .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-red .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td.week span {\n  color: #d9534f; }\n.theme-orange .bs-datepicker-head {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td span.selected,\n.theme-orange .bs-datepicker-body table td.selected span,\n.theme-orange .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-orange .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.week span {\n  color: #f0ad4e; }\n/*# sourceMappingURL=bs-datepicker.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLnNjc3MiLCJub2RlX21vZHVsZXMvc3JjL2RhdGVwaWNrZXIvdXRpbHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci91dGlscy9zY3NzL21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxvQkFBb0I7QUFDcEI7RUFDRSxjQUFhO0VBQ2IscUJBQW9CO0VBQ3BCLG9CQUFtQjtFQUNuQixpQkNSb0I7RURTcEIsNEJDTm9CO0VET3BCLG1CQUFrQjtFQUNsQixXQUFVO0VBYVYsWUFBWTtFQWVaLHlCQUF5QjtFQXlFekIseUJBQXlCO0VBd056Qix1QkFBdUI7RUEyQnZCLDZCQUE2QjtFQXNDN0IseUJBQXlCO0VBS3pCLGdDQUFnQztFQU1oQyxvQ0FBb0M7RUFzQnBDLHFCQUFxQjtFQUtyQiw0QkFBNEIsRUFZN0I7QUF2YkQ7SUFXSSxZQUFXO0lBQ1gsWUFBVztJQUNYLGVBQWMsRUFDZjtBQWRIO0lBaUJJLFlBQVcsRUFDWjtBQWxCSDs7Ozs7Ozs7Ozs7SUFnQ0ksY0FBYSxFQUNkO0FBR0Q7SUFDRSxpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLGNBQWE7SUFDYiwyQkFBMEI7SUFDMUIsb0JBQW1CO0lBU25CLGdDQUFnQyxFQTZDakM7QUEzREE7TUFRRyxZQUFXO01BQ1gsc0JBQXFCO01BQ3JCLG9CQUFtQjtNQUNuQixZQUFXLEVBQ1o7QUFaRjtNQWdCRyxzQkFBcUI7TUFDckIsb0JBQW1CO01BQ25CLFdBQVU7TUFDVixhQUFZO01BQ1osa0JBQWlCO01BQ2pCLFVBQVM7TUFDVCx3QkFBdUI7TUFDdkIsbUJBQWtCO01BQ2xCLGdCQUFlO01BQ2YsWUM1RGdCO01ENkRoQixpQkFBZ0IsRUFnQ2pCO0FBMURGO1FBK0JLLHFDQzlD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b290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3V0aWxzL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3V0aWxzL3Njc3MvbWl4aW5zJztcblxuLyogLmJzLWRhdGVwaWNrZXIgKi9cbi5icy1kYXRlcGlja2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJhY2tncm91bmQ6ICRtYWluLWJnO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwICRtYWluLWJveC1zaGFkb3c7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcblxuXG4gICY6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgYnMtZGF5LXBpY2tlciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAvKiBidXR0b24gKi9cbiAgYnV0dG9uOmhvdmVyLFxuICBidXR0b246Zm9jdXMsXG4gIGJ1dHRvbjphY3RpdmUsXG4gIGlucHV0OmhvdmVyLFxuICBpbnB1dDpmb2N1cyxcbiAgaW5wdXQ6YWN0aXZlLFxuICAmLWJ0bnMgYnV0dG9uOmhvdmVyLFxuICAmLWJ0bnMgYnV0dG9uOmZvY3VzLFxuICAmLWJ0bnMgYnV0dG9uOmFjdGl2ZSxcbiAgJi1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uOmFjdGl2ZSxcbiAgJi1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLyogLmJzLWRhdGVwaWNrZXItaGVhZCAqL1xuICAmLWhlYWQge1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAvKiAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbiAqL1xuICAgIGJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAmW2Rpc2FibGVkXSxcbiAgICAgICZbZGlzYWJsZWRdOmhvdmVyLFxuICAgICAgJltkaXNhYmxlZF06YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgICYubmV4dCxcbiAgICAgICYucHJldmlvdXMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmN1cnJlbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE1NXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi1oZWFkIHtcbiAgICBidXR0b24ge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIH1cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgKi9cbiAgJi1ib2R5IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xuICAgIG1pbi1oZWlnaHQ6IDIzMnB4O1xuICAgIG1pbi13aWR0aDogMjc4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcblxuICAgIC5kYXlzLndlZWtzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLyogLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSAqL1xuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuXG4gICAgICB0aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAyO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHRkIHtcbiAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAvKnotaW5kZXg6IDE7Ki9cbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpub3QoLmRpc2FibGVkKSBzcGFuIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlzLWhpZ2hsaWdodGVkOm5vdCguZGlzYWJsZWQpOm5vdCguc2VsZWN0ZWQpIHNwYW4sXG4gICAgICAgIHNwYW4uaXMtaGlnaGxpZ2h0ZWQ6bm90KC5kaXNhYmxlZCk6bm90KC5zZWxlY3RlZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHRlZDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwcztcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uZGlzYWJsZWQsXG4gICAgICAgICYuZGlzYWJsZWQgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAyO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi5zZWxlY3RlZCxcbiAgICAgICAgJi5zZWxlY3RlZCBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgJi5zZWxlY3Qtc3RhcnQ6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IDM1JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNlbGVjdC1lbmQ6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IC04NSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi5hY3RpdmUuc2VsZWN0LXN0YXJ0OmFmdGVyLFxuICAgICAgICBzcGFuLmFjdGl2ZS5zZWxlY3QtZW5kOmFmdGVyLFxuICAgICAgICAmLmFjdGl2ZS5zZWxlY3Qtc3RhcnQgc3BhbjphZnRlcixcbiAgICAgICAgJi5hY3RpdmUuc2VsZWN0LWVuZCBzcGFuOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgIHNwYW46YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICBib3R0b206IDZweDtcbiAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIHJpZ2h0OiAtMnB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUuc2VsZWN0LXN0YXJ0ICsgdGQuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgICAgbGVmdDogLTIwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZC5hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICAgICAgICB3aWR0aDogMTI1JTtcbiAgICAgICAgICBsZWZ0OiAtMjUlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbltjbGFzcyo9XCJzZWxlY3QtXCJdLFxuICAgICAgICAmW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgKi9cbiAgICAgICYuZGF5cyB7XG4gICAgICAgIHRkLFxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAmLmFjdGl2ZTpub3QoLnNlbGVjdC1zdGFydCk6YmVmb3JlLFxuICAgICAgICAgICYuaW4tcmFuZ2U6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuXG4gICAgICAgICAgJi5zZWxlY3Qtc3RhcnQge1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5pcy1oaWdobGlnaHRlZC5pbi1yYW5nZTpiZWZvcmUsXG4gICAgICAgICAgJi5pbi1yYW5nZS5zZWxlY3QtZW5kOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAmLnNlbGVjdC1zdGFydCArIHRkLnNlbGVjdC1lbmQ6YmVmb3JlLFxuICAgICAgICAgICYuc2VsZWN0LXN0YXJ0ICsgdGQuaXMtaGlnaGxpZ2h0ZWQ6YmVmb3JlLFxuICAgICAgICAgICYuYWN0aXZlICsgdGQuaXMtaGlnaGxpZ2h0ZWQ6YmVmb3JlLFxuICAgICAgICAgICYuYWN0aXZlICsgdGQuc2VsZWN0LWVuZDpiZWZvcmUsXG4gICAgICAgICAgJi5pbi1yYW5nZSArIHRkLmlzLWhpZ2hsaWdodGVkOmJlZm9yZSxcbiAgICAgICAgICAmLmluLXJhbmdlICsgdGQuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUud2Vla3MgKi9cbiAgICAgICYud2Vla3Mge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpub3QoLndlZWtzKSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICB0ZHtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYueWVhcnMge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5tb250aHMge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC5jdXJyZW50LXRpbWVkYXRlICovXG4gIC5jdXJyZW50LXRpbWVkYXRlIHtcbiAgICBjb2xvcjogJGZvbnQtY29sb3ItMDM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIHNwYW46bm90KDplbXB0eSk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBUUNBWUFBQURKVmlVRUFBQUJNa2xFUVZRb1U5VlR3VzNDUUJDY09VZ0J0RUJLU0F1a0FuQktNRSt3RkNBbFlJaGs4c1FseEZBQnRKQVNjQXN1QVBCRWV3WWN4Q1A4b3V4clBEc3phNjF1aVZOMW82Uk5IRDRodFNDbXE0OVJmTzcxQnZNSnFCQmtJVFJmMWttVVc0OW5RUkM5aDFJNUFabEJDbGFMOGFQMWZLZ09PeEN4OGFTTHMrUTE5ZVp1Tk84UW1QcUpSdERGZ3V5N09BY0RiSlBzKy9CS1ZQRElQcnZEMlpKZ1dBbVZlN08wckkwVnFzMXNleVdVWHB1Sm9wcFlDYTVMK1UrK05wTlBrcjVPRTJvTWRBUnNiM2d5a0pUNXlkWmNMOFo5V3c2MG54ZzJMaGpPTjlsaTlPd1haem8reExicDNuQzJzOUNMMlJydWVHeVZyZ3dObThIcHNDelo5RUVXNmtxWGxvMUdRZTAzRnpQLzdXOEhsMGRCdHU3QmY3enQ2bUl3dlgxUnZ6RENtNytxM21BVzBEbC9HUGRVQ2VYclpMVDlCckRyR2ttNHFsUHZBQUFBQUVsRlRrU3VRbUNDKTtcbiAgICB9XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSAqL1xuICAmLW11bHRpcGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG5cbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAuYnMtZGF0ZXBpY2tlciB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmICsgLmJzLWRhdGVwaWNrZXI6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBS0NBWUFBQUJyR3dUNUFBQUExRWxFUVZRb1U0MlJzUXJDVUF4Rjc3VnVEdTdPNG9NV1cvL0JVUkJCcFp2Z0trNHVJcmpvcUtPVGYrRG9wSU80dVlnZ3RGVGZ3Mytwa1FxQ1cxL0c1SjdrSmlGeTRtNU14VWx4QXpnSVBIWCtsek1QenVwUllsWWd4aVI3dnFzT1A4WUt6c1R4MHl4Rk1DVVorcTdhWnpscitPdmdvV2NBRnlBSGdhdDJqTFd1NDgyNTJEZHFBaWhESkdTU0pOVVV4WW1RanMzK2hQUUJsQWgyckcyTENPUG5hdzNJaUdEWDk5VFJDczdBU0pzTmhVT0E3ZC9MY3VIdlJHMjJGSVp2c05YdzFNWDZWWkV4Q2lsT1FLRWZlTFhyLzEwK2FDOUhvN2FyaDdvQUFBQUFTVVZPUks1Q1lJST0pO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgbGVmdDogLThweDtcbiAgICAgIH1cblxuICAgICAgLmxlZnQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLnJpZ2h0IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLWJ0bnMgKi9cbiAgJi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAvKi5icy1kYXRlcGlja2VyLWN1c3RvbS1yYW5nZSAqL1xuICAmLWN1c3RvbS1yYW5nZSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAkY3VzdG9tLXJhbmdlLWJnO1xuICB9XG5cbiAgLyogLmJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zICovXG4gICYtcHJlZGVmaW5lZC1idG5zIHtcbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tYmcyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAxO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMThweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAmOmFjdGl2ZSxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnMi1ob3ZlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAuaXMtb3RoZXItbW9udGggKi9cbiAgLmlzLW90aGVyLW1vbnRoIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLWJ1dHRvbnMgKi9cbiAgJi1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcblxuICAgIC5idG4tZGVmYXVsdCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLyogLmJzLXRpbWVwaWNrZXIgKi9cbi5icy10aW1lcGlja2VyIHtcbiAgJi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuXG4gICYtbGFiZWwge1xuICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgJi1jb250cm9scyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1iZztcbiAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tYmctaG92ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAuc3dpdGNoLXRpbWUtZm9ybWF0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1pbi13aWR0aDogNTRweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRtYWluLWJnO1xuICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMztcbiAgICBmb250LXNpemU6IDEzcHg7XG5cbiAgICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cbiAgfVxufVxuXG5icy1kYXRlcGlja2VyLWNvbnRhaW5lcixcbmJzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDgwO1xufVxuXG4vKiBzY3JlZW4gc2l6ZSA8IDEwMjRweCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5icy1kYXRlcGlja2VyIHtcbiAgICAmLW11bHRpcGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICYgKyAmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIHRoZW1pbmcgKi9cbkBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWxpc3Qge1xuICBAaW5jbHVkZSB0aGVtaW5nKCRuYW1lLCAkY29sb3IpO1xufVxuIiwiJG1haW4tYmc6ICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtYmc6ICNlZWUgIWRlZmF1bHQ7XG5cbiRtYWluLWJveC1zaGFkb3c6ICNhYWEgIWRlZmF1bHQ7XG5cbiRmb250LWNvbG9yLTAxOiAgICNmZmYgIWRlZmF1bHQ7XG4kZm9udC1jb2xvci0wMjogICAjOWFhZWMxICFkZWZhdWx0O1xuJGZvbnQtY29sb3ItMDM6ICAgIzU0NzA4YiAhZGVmYXVsdDtcblxuJGJvcmRlci1jb2xvcjogICAgI2U5ZWRmMCAhZGVmYXVsdDtcbiRoaWdobGlnaHRlZDogICAgICNlOWVkZjAgIWRlZmF1bHQ7XG5cbiRidG4tYmc6ICAgICAgICAgICNlOWVkZjAgIWRlZmF1bHQ7XG4kYnRuLWJnLWhvdmVyOiAgICAjZDVkYWRkICFkZWZhdWx0O1xuXG4kYnRuLWJnMjogICAgICAgICAjOWFhZWMxICFkZWZhdWx0O1xuJGJ0bi1iZzItaG92ZXI6ICAgIzU0NzA4YiAhZGVmYXVsdDtcblxuJHRoZW1lLWdyYXk6ICAgICAgIzc3NyAhZGVmYXVsdDtcbiR0aGVtZS1ncmVlbjogICAgICM1Y2I4NWMgIWRlZmF1bHQ7XG4kdGhlbWUtYmx1ZTogICAgICAjNWJjMGRlICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstYmx1ZTogIzMzN2FiNyAhZGVmYXVsdDtcbiR0aGVtZS1yZWQ6ICAgICAgICNkOTUzNGYgIWRlZmF1bHQ7XG4kdGhlbWUtb3JhbmdlOiAgICAjZjBhZDRlICFkZWZhdWx0O1xuXG4kZGlzYWJsZWQtYmFja2dyb3VuZDogIHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4zKSAhZGVmYXVsdDtcbiRkaXNhYmxlZC1jb2xvcjogICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuJHRoZW1lLWxpc3Q6IChcbiAgJ2RlZmF1bHQnOiAkdGhlbWUtZ3JheSxcbiAgJ2dyZWVuJzogJHRoZW1lLWdyZWVuLFxuICAnYmx1ZSc6ICR0aGVtZS1ibHVlLFxuICAnZGFyay1ibHVlJzogJHRoZW1lLWRhcmstYmx1ZSxcbiAgJ3JlZCc6ICR0aGVtZS1yZWQsXG4gICdvcmFuZ2UnOiAkdGhlbWUtb3JhbmdlLFxuKSAhZGVmYXVsdDtcbiIsIkBtaXhpbiB0aGVtaW5nKCRuYW1lLCAkY29sb3IpIHtcbiAgLnRoZW1lLSN7JG5hbWV9IHtcbiAgICAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICB9XG5cbiAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHtcbiAgICAgIHRhYmxlIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgIHNwYW4uc2VsZWN0ZWQsXG4gICAgICAgICAgJi5zZWxlY3RlZCBzcGFuLFxuICAgICAgICAgIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbiAgICAgICAgICAmW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi53ZWVrIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qIC5icy1kYXRlcGlja2VyICovXG4uYnMtZGF0ZXBpY2tlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwICNhYWE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgLyogYnV0dG9uICovXG4gIC8qIC5icy1kYXRlcGlja2VyLWhlYWQgKi9cbiAgLyogLmJzLWRhdGVwaWNrZXItYm9keSAqL1xuICAvKiAuY3VycmVudC10aW1lZGF0ZSAqL1xuICAvKiAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSAqL1xuICAvKiAuYnMtZGF0ZXBpY2tlci1idG5zICovXG4gIC8qLmJzLWRhdGVwaWNrZXItY3VzdG9tLXJhbmdlICovXG4gIC8qIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyAqL1xuICAvKiAuaXMtb3RoZXItbW9udGggKi9cbiAgLyogLmJzLWRhdGVwaWNrZXItYnV0dG9ucyAqLyB9XG4gIC5icy1kYXRlcGlja2VyOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuYnMtZGF0ZXBpY2tlciBicy1kYXktcGlja2VyIHtcbiAgICBmbG9hdDogbGVmdDsgfVxuICAuYnMtZGF0ZXBpY2tlciBidXR0b246aG92ZXIsXG4gIC5icy1kYXRlcGlja2VyIGJ1dHRvbjpmb2N1cyxcbiAgLmJzLWRhdGVwaWNrZXIgYnV0dG9uOmFjdGl2ZSxcbiAgLmJzLWRhdGVwaWNrZXIgaW5wdXQ6aG92ZXIsXG4gIC5icy1kYXRlcGlja2VyIGlucHV0OmZvY3VzLFxuICAuYnMtZGF0ZXBpY2tlciBpbnB1dDphY3RpdmUsXG4gIC5icy1kYXRlcGlja2VyLWJ0bnMgYnV0dG9uOmhvdmVyLFxuICAuYnMtZGF0ZXBpY2tlci1idG5zIGJ1dHRvbjpmb2N1cyxcbiAgLmJzLWRhdGVwaWNrZXItYnRucyBidXR0b246YWN0aXZlLFxuICAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uOmFjdGl2ZSxcbiAgLmJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgLyogLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b24gKi8gfVxuICAgIC5icy1kYXRlcGlja2VyLWhlYWQ6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdHJhbnNpdGlvbjogMC4zczsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b25bZGlzYWJsZWRdLCAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uW2Rpc2FibGVkXTphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuMyk7XG4gICAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5uZXh0LCAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5wcmV2aW91cyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5uZXh0IHNwYW4sIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uLnByZXZpb3VzIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uLmN1cnJlbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE1NXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEzcHg7IH1cbiAgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuICAuYnMtZGF0ZXBpY2tlci1ib2R5IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xuICAgIG1pbi1oZWlnaHQ6IDIzMnB4O1xuICAgIG1pbi13aWR0aDogMjc4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWRmMDtcbiAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlICovIH1cbiAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IC5kYXlzLndlZWtzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7IH1cbiAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgLyogLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzICovXG4gICAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLndlZWtzICovIH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGgge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjOWFhZWMxO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQge1xuICAgICAgICBjb2xvcjogIzU0NzA4YjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAvKnotaW5kZXg6IDE7Ki9cbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQ6bm90KC5kaXNhYmxlZCkgc3BhbiB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuaXMtaGlnaGxpZ2h0ZWQ6bm90KC5kaXNhYmxlZCk6bm90KC5zZWxlY3RlZCkgc3BhbixcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmlzLWhpZ2hsaWdodGVkOm5vdCguZGlzYWJsZWQpOm5vdCguc2VsZWN0ZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZGYwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDBzOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5kaXNhYmxlZCxcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5kaXNhYmxlZCBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzlhYWVjMTsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQsXG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuc2VsZWN0ZWQgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLnNlbGVjdC1zdGFydDpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogMzUlOyB9XG4gICAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogLTg1JTsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uYWN0aXZlLnNlbGVjdC1zdGFydDphZnRlcixcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmFjdGl2ZS5zZWxlY3QtZW5kOmFmdGVyLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmFjdGl2ZS5zZWxlY3Qtc3RhcnQgc3BhbjphZnRlcixcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUuc2VsZWN0LWVuZCBzcGFuOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQ6YmVmb3JlLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW46YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICBib3R0b206IDZweDtcbiAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIHJpZ2h0OiAtMnB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLnNlbGVjdC1zdGFydCArIHRkLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgIGxlZnQ6IC0yMCU7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZDpsYXN0LWNoaWxkLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgICAgICAgIHdpZHRoOiAxMjUlO1xuICAgICAgICAgIGxlZnQ6IC0yNSU7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuW2NsYXNzKj1cInNlbGVjdC1cIl0sXG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyB0ZC5hY3RpdmU6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSwgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLmluLXJhbmdlOm5vdCguc2VsZWN0LXN0YXJ0KTpiZWZvcmUsXG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3Bhbi5hY3RpdmU6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSxcbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLmluLXJhbmdlOm5vdCguc2VsZWN0LXN0YXJ0KTpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllZGYwOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3BhbiB7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4OyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLnNlbGVjdC1zdGFydCB7XG4gICAgICAgICAgei1pbmRleDogMjsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3Bhbi5pcy1oaWdobGlnaHRlZC5pbi1yYW5nZTpiZWZvcmUsIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLmluLXJhbmdlLnNlbGVjdC1lbmQ6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyB0ZC5zZWxlY3Qtc3RhcnQgKyB0ZC5zZWxlY3QtZW5kOmJlZm9yZSxcbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyB0ZC5zZWxlY3Qtc3RhcnQgKyB0ZC5pcy1oaWdobGlnaHRlZDpiZWZvcmUsXG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgdGQuYWN0aXZlICsgdGQuaXMtaGlnaGxpZ2h0ZWQ6YmVmb3JlLFxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLmFjdGl2ZSArIHRkLnNlbGVjdC1lbmQ6YmVmb3JlLFxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLmluLXJhbmdlICsgdGQuaXMtaGlnaGxpZ2h0ZWQ6YmVmb3JlLFxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLmluLXJhbmdlICsgdGQuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllZGYwO1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS53ZWVrcyB0ciB0ZDpudGgtY2hpbGQoMikuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZTpub3QoLndlZWtzKSB0ciB0ZDpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS55ZWFycyB0ZCBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLnllYXJzIHRyOm5vdCg6bGFzdC1jaGlsZCkgdGQgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5tb250aHMgdGQge1xuICAgICAgICBoZWlnaHQ6IDUycHg7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5tb250aHMgdGQgc3BhbiB7XG4gICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IH1cbiAgLmJzLWRhdGVwaWNrZXIgLmN1cnJlbnQtdGltZWRhdGUge1xuICAgIGNvbG9yOiAjNTQ3MDhiO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWRmMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgICAuYnMtZGF0ZXBpY2tlciAuY3VycmVudC10aW1lZGF0ZSBzcGFuOm5vdCg6ZW1wdHkpOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE4QUFBQVFDQVlBQUFESlZpVUVBQUFCTWtsRVFWUW9VOVZUd1czQ1FCQ2NPVWdCdEVCS1NBdWtBbkJLTUUrd0ZDQWxZSWhrOHNRbHhGQUJ0SkFTY0FzdUFQQkVld1ljeENQOG91eHJQRHN6YTYxdWlWTjFvNlJOSEQ0aHRTQ21xNDlSZk83MUJ2TUpxQkJrSVRSZjFrbVVXNDluUVJDOWgxSTVBWmxCQ2xhTDhhUDFmS2dPT3hDeDhhU0xzK1ExOWVadU5POFFtUHFKUnRERmd1eTdPQWNEYkpQcysvQktWUERJUHJ2RDJaSmdXQW1WZTdPMHJJMFZxczFzZXlXVVhwdUpvcHBZQ2E1TCtVKytOcE5Qa3I1T0Uyb01kQVJzYjNneWtKVDV5ZFpjTDhaOVd3NjBueGcyTGhqT045bGk5T3dYWnpvK3hMYnAzbkMyczlDTDJScnVlR3lWcmd3Tm04SHBzQ3paOUVFVzZrcVhsbzFHUWUwM0Z6UC83VzhIbDBkQnR1N0JmN3p0Nm1Jd3ZYMVJ2ekRDbTcrcTNtQVcwRGwvR1BkVUNlWHJaTFQ5QnJEckdrbTRxbFB2QUFBQUFFbEZUa1N1UW1DQyk7IH1cbiAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDsgfVxuICAgIC5icy1kYXRlcGlja2VyLW11bHRpcGxlICsgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cbiAgICAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSAuYnMtZGF0ZXBpY2tlciB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSAuYnMtZGF0ZXBpY2tlcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgLmJzLWRhdGVwaWNrZXIgKyAuYnMtZGF0ZXBpY2tlcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBOEFBQUFLQ0FZQUFBQnJHd1Q1QUFBQTFFbEVRVlFvVTQyUnNRckNVQXhGNzdWdUR1N080b01XVy8vQlVSQkJwWnZnS2s0dUlyam9xS09UZitEb3BJTzR1WWdndEZUZnczK3BrUXFDVzEvRzVKN2tKaUZ5NG01TXhVbHhBemdJUEhYK2x6TVB6dXBSWWxZZ3hpUjd2cXNPUDhZS3pzVHgweXhGTUNVWitxN2FaemxyK092Z29XY0FGeUFIZ2F0MmpMV3U0ODI1MkRkcUFpaERKR1NTSk5VVXhZbVFqczMraFBRQmxBaDJyRzJMQ09QbmF3M0lpR0RYOTlUUkNzN0FTSnNOaFVPQTdkL0xjdUh2UkcyMkZJWnZzTlh3MU1YNlZaRXhDaWxPUUtFZmVMWHIvMTArYUM5SG83YXJoN29BQUFBQVNVVk9SSzVDWUlJPSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICBsZWZ0OiAtOHB4OyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSAuYnMtZGF0ZXBpY2tlciAubGVmdCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSAuYnMtZGF0ZXBpY2tlciAucmlnaHQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgLmJzLWRhdGVwaWNrZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4OyB9XG4gIC5icy1kYXRlcGlja2VyLWN1c3RvbS1yYW5nZSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG4gIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFhZWMxO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XG4gICAgLmJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zIGJ1dHRvbjphY3RpdmUsIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyBidXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzA4YjsgfVxuICAuYnMtZGF0ZXBpY2tlciAuaXMtb3RoZXItbW9udGgge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XG4gIC5icy1kYXRlcGlja2VyLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllZGYwOyB9XG4gICAgLmJzLWRhdGVwaWNrZXItYnV0dG9ucyAuYnRuLWRlZmF1bHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cblxuLyogLmJzLXRpbWVwaWNrZXIgKi9cbi5icy10aW1lcGlja2VyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMDsgfVxuXG4uYnMtdGltZXBpY2tlci1sYWJlbCB7XG4gIGNvbG9yOiAjNTQ3MDhiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbi5icy10aW1lcGlja2VyLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiAgLmJzLXRpbWVwaWNrZXItY29udHJvbHMgYnV0dG9uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZGYwO1xuICAgIGNvbG9yOiAjNTQ3MDhiO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XG4gICAgLmJzLXRpbWVwaWNrZXItY29udHJvbHMgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWRhZGQ7IH1cbiAgLmJzLXRpbWVwaWNrZXItY29udHJvbHMgaW5wdXQge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGYwOyB9XG5cbi5icy10aW1lcGlja2VyIC5zd2l0Y2gtdGltZS1mb3JtYXQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtaW4td2lkdGg6IDU0cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWRmMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM1NDcwOGI7XG4gIGZvbnQtc2l6ZTogMTNweDsgfVxuICAuYnMtdGltZXBpY2tlciAuc3dpdGNoLXRpbWUtZm9ybWF0IGltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxuXG5icy1kYXRlcGlja2VyLWNvbnRhaW5lcixcbmJzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDgwOyB9XG5cbi8qIHNjcmVlbiBzaXplIDwgMTAyNHB4ICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSArIC5icy1kYXRlcGlja2VyLW11bHRpcGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDsgfSB9XG5cbi8qIHRoZW1pbmcgKi9cbi50aGVtZS1kZWZhdWx0IC5icy1kYXRlcGlja2VyLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3OyB9XG5cbi50aGVtZS1kZWZhdWx0IC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCxcbi50aGVtZS1kZWZhdWx0IC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuc2VsZWN0ZWQgc3Bhbixcbi50aGVtZS1kZWZhdWx0IC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3BhbltjbGFzcyo9XCJzZWxlY3QtXCJdOmFmdGVyLFxuLnRoZW1lLWRlZmF1bHQgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZFtjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3OyB9XG5cbi50aGVtZS1kZWZhdWx0IC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQud2VlayBzcGFuIHtcbiAgY29sb3I6ICM3Nzc7IH1cblxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjOyB9XG5cbi50aGVtZS1ncmVlbiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQsXG4udGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLFxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3BhbltjbGFzcyo9XCJzZWxlY3QtXCJdOmFmdGVyLFxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YzsgfVxuXG4udGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICBjb2xvcjogIzVjYjg1YzsgfVxuXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTsgfVxuXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQsXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLnNlbGVjdGVkIHNwYW4sXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTsgfVxuXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLndlZWsgc3BhbiB7XG4gIGNvbG9yOiAjNWJjMGRlOyB9XG5cbi50aGVtZS1kYXJrLWJsdWUgLmJzLWRhdGVwaWNrZXItaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7IH1cblxuLnRoZW1lLWRhcmstYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQsXG4udGhlbWUtZGFyay1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuc2VsZWN0ZWQgc3Bhbixcbi50aGVtZS1kYXJrLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuW2NsYXNzKj1cInNlbGVjdC1cIl06YWZ0ZXIsXG4udGhlbWUtZGFyay1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNzsgfVxuXG4udGhlbWUtZGFyay1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQud2VlayBzcGFuIHtcbiAgY29sb3I6ICMzMzdhYjc7IH1cblxuLnRoZW1lLXJlZCAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjsgfVxuXG4udGhlbWUtcmVkIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCxcbi50aGVtZS1yZWQgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLFxuLnRoZW1lLXJlZCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1yZWQgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZFtjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmOyB9XG5cbi50aGVtZS1yZWQgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICBjb2xvcjogI2Q5NTM0ZjsgfVxuXG4udGhlbWUtb3JhbmdlIC5icy1kYXRlcGlja2VyLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlOyB9XG5cbi50aGVtZS1vcmFuZ2UgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkLFxuLnRoZW1lLW9yYW5nZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLnNlbGVjdGVkIHNwYW4sXG4udGhlbWUtb3JhbmdlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3BhbltjbGFzcyo9XCJzZWxlY3QtXCJdOmFmdGVyLFxuLnRoZW1lLW9yYW5nZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7IH1cblxuLnRoZW1lLW9yYW5nZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLndlZWsgc3BhbiB7XG4gIGNvbG9yOiAjZjBhZDRlOyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJzLWRhdGVwaWNrZXIuY3NzLm1hcCAqLyJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, " body{\r\n    background-color: rgb(200, 235, 106);\r\n    \r\n}\r\np {\r\n    text-indent: 20px; /* Отступ первой строки в пикселах */\r\n   } \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0cscUNBQXFDOztDQUV4QztBQUNEO0lBQ0ksa0JBQWtCLENBQUMscUNBQXFDO0lBQ3hEIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMzUsIDEwNik7XHJcbiAgICBcclxufVxyXG5wIHtcclxuICAgIHRleHQtaW5kZW50OiAyMHB4OyAvKiDQntGC0YHRgtGD0L8g0L/QtdGA0LLQvtC5INGB0YLRgNC+0LrQuCDQsiDQv9C40LrRgdC10LvQsNGFICovXHJcbiAgIH0gXHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./bs-datepicker.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!****************************************************************************************!*\
  !*** multi ./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css ./src/styles.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Projects\AngularS\tmp\client\node_modules\ngx-bootstrap\datepicker\bs-datepicker.css */"./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css");
module.exports = __webpack_require__(/*! C:\Projects\AngularS\tmp\client\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map