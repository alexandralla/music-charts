
(function(exports) { 
    var x;
    function testfunc(x){
        return x[0];
    }
    function testfunc2(x){
        return x[1];
    }
    function testfunc3(x){
        return x[2];
    }
    exports.testfunc = testfunc;
    exports.testfunc2 = testfunc2;
    exports.testfunc3 = testfunc3;
       
})(typeof exports === 'undefined'?  
            this['testjavascript']={}: exports); 