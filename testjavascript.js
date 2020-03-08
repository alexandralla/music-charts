
(function(exports) { 
    var x;
    function testfunc(x){
        return x[0];
    }
    function testfunc2(x){
        return x[1];
    }
    exports.testfunc = testfunc;
    exports.testfunc2 = testfunc2;
       
})(typeof exports === 'undefined'?  
            this['testjavascript']={}: exports); 