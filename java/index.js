   function triangleType(sides){
    var a = parseInt(document.getElementById('type').value);
    var b= parseInt(document.getElementById('typeB').value);
    var c= parseInt(document.getElementById('typeC').value);
var sides=[];
sides.push(a, b, c);
var t = sides[0];
var s = sides[1];
var r = sides[2];
      if(t+s<=r || s+r<=t || t+r<=s){
        alert("not a Triangle");
      }else if(t===s && s===r && r===t){
        alert("Equilateral Triangle");
    } else if(t==s || r==s || r==t){
      alert("Isosceles Triangle");
    } else if(t!==s && s!==r && t!==r){
        alert("Scalene Triangle");
      }else{
        alert("error");
      }
}
