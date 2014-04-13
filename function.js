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
function aas(anglea, angleb, sidea) {
    console.log(anglea+angleb);
    var anglec = 180 - (anglea + angleb);
    var angles = [anglea, angleb, anglec];
    for (i = 0; i < angles.length; i++) {
        angles[i] = angles[i] * (Math.PI / 180);
    }
    var sideb = (sidea * Math.sin(angles[0])) / Math.sin(angles[1]);
    var sidec = (sidea * Math.sin(angles[2])) / Math.sin(angles[1]);
    var thestuff = [angles[2] * (180 / Math.PI), sideb, sidec];
    return thestuff;
}

function AddDiv() {
    var thetriangletodom = sss(side1.value, side2.value, side3.value);
    document.getElementById("container").innerHTML = thetriangletodom;
}
function AddDivAAS() {
    var x = Number.parseInt(angle1.value);
    var y = Number.parseInt(angle2.value);
    var z = Number.parseInt(sidea.value);
    var thetriangletodom = aas(x, y, z);
    document.getElementById("container2").innerHTML = thetriangletodom;
}
function Clear(){
    var x = document.getElementsByTagName('div');
    var i;
    for (i in x) {
        x[i].innerHTML = "";
    }
function PlotLine(side, angle, startpointx, startpointy){
    var angle = angle * (Math.PI / 180); //convert degrees to rads
    var tempx = Math.cos(angle)*side; //get cosine of angle and multiply by length
    var tempy = Math.sin(angle)*side; //get sine of angle and multiply  by length
    var x = tempx + startpointx; //add cosine result to starting x coordinate to find endpoint x coordinate
    var y = tempy + startpointy; //add sine result to starting y coordinate to find endpoint y coodinate
    var results = [x,y];
    return results;
}
console.log(PlotLine(5,45,0,0));
function PlotTriangle(sidea,anglea,sideb,angleb,sidec,anglec){

}