function results() {
    // body...
    var a,b,W,d,m,P,A,T,C,F,E1,E2,n,nmax,adv;
    a = Number(document.getElementById("OuterDiameter").value);
    b = Number(document.getElementById("InnerDiameter").value);
    d = a+b;
    m = d/2;
    P = Number(document.getElementById("Pitch").value);
    A = (Math.atan(P/(Math.PI * m)));//HELIX ANGLE
    T = (Math.atan(Number(document.getElementById("friction").value)));//ANGLE THETA(0)
    document.getElementById("demo").value = m;
    document.getElementById("angle").value = A*180/Math.PI;
    let greeting;
   if (A < T) {
     greeting = "YES";
   } else {
     greeting = "NO";
   }
   W = Number(document.getElementById("weight").value);
   C = A+T;
   F = T-A;
   document.getElementById("self").value = greeting;
   E1 = W*(Math.tan(C));
   document.getElementById("Load").value = E1;
   E2 = W*(Math.tan(F));
   document.getElementById("lower").value = E2;
   n = Math.tan(A)/Math.tan(C);
   document.getElementById("efficiency").value = n;
   nmax = (1 - Math.sin(T))/(1 + Math.sin(T));
   document.getElementById("efficienct").value = nmax;
   adv = W/(E1);
   document.getElementById("adv").value = adv;
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
mybutton.style.display = "Top";
} else {
mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}