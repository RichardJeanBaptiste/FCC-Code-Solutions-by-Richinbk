/*function addTogether(arg1,arg2) {
  
     function addTogether(arg1,arg2) {
  
  var params = [].slice.call(arguments);
  
  if(!params.every(function(param){
    return typeof param === 'number';
  })){
    return undefined;
  }
  
  if(params.length === 2){
     return params[0] + params[1];
     }else{
       var firstParam = params[0];
       var addOneMore = function(secondParam){
         return addTogether (firstParam, secondParam);
       };
       return addOneMore; n* 
     }
  
  
}

addTogether(2,3);
}
*/
var str = "-1 (757) 622-7382";
var x = str.replace(/\W*/g, '');
console.log(x);