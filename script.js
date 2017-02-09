var array = ["Orange","Apple","Kiwi","Mango","Banana","Pineapple"];
document.write(array + "<br>");

var fruits = ["Pear","Lemon","Cherry"];
array.splice(array.length / 2,0,fruits);
document.write(array + "<br>");

array.splice(0,2);
document.write(array + "<br>");

array.unshift("Plum");
document.write(array + "<br>");

var moreFruits = ["Mandarin", "Merry"];
array.splice(2,2);
array.splice(array.length/2,0,moreFruits);
document.write(array + "<br>");

array.pop();
document.write(array + "<br>");

var aLotOfFruits = ["Apricot", "Carrot", "Date"];
array.splice(array.length-1,0,aLotOfFruits);
document.write(array + "<br>");

array.splice(array.length/2,1);
document.write(array + "<br>");

array.splice(0,1,"Banana");
array.splice(array.length-1,1,"Plum");
document.write(array + "<br>");

array.unshift("Grape");
document.write(array + "<br>");

document.write(array.reverse());

