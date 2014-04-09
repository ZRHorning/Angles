function sss(sideb, sidea, sidec) {
    var angleb = (Math.pow(sideb, 2) + Math.pow(sidec, 2) - Math.pow(sidea, 2)) / (2 * sideb * sidec);
    //cos angle A
    var angleb = Math.acos(angleb);
    //I AM USING THE MATHS WITH RADS
    var anglea = (Math.pow(sidec, 2) + Math.pow(sidea, 2) - Math.pow(sideb, 2)) / (2 * sidec * sidea);
    var anglea = Math.acos(anglea);
    var anglec = Math.PI - (angleb + anglea);
    var angles = [angleb, anglea, anglec];
    for (i = 0; i < angles.length; i++) {
        angles[i] = angles[i] * (180 / Math.PI);
        angles[i] = "<br/> Angle " + (i + 1 + ": ") + angles[i].toPrecision(4);
    }
    return angles;

}

/*function aas(anglea, angleb, sidea) {
    var anglec = 180 - (anglea + angleb);
    var angles = [anglea, angleb, anglec]; //lol an array of angles
    console.log(angles.length);
    for (i = 0; i < angles.length; i++) {
        angles[i] = angles[i] * (Math.PI / 180); //converts all the angles to degrees
    }
    var sideb = (sidea * Math.sin(angles[0])) / Math.sin(angles[1]); //iunn
    var sidec = (sidea * Math.sin(angles[2])) / Math.sin(angles[1]); //equally lost
    var thestuff = [angles[2] * (180 / Math.PI), sideb, sidec];
    return thestuff;
}*/
function AddDiv() {
    var thetriangletodom = sss(side1.value, side2.value, side3.value);
    document.getElementById("container").innerHTML = thetriangletodom;
}
function AddDivAAS() {
    var thetriangletodom = aas(angle1.value, angle2.value, side1.value);
    document.getElementById("container2").innerHTML = thetriangletodom;
}

function Clear() {
    document.getElementsByTagName("form").reset();
    document.getElementsByTagName("div").innerHTML = "";
}