function sss(sideb, sidea, sidec) {
    var x = (Math.pow(sideb, 2) + Math.pow(sidec, 2) - Math.pow(sidea, 2)) / (2 * sideb * sidec); //cos angle A
    x = Math.acos(x); //I AM USING THE MATHS WITH RADS
    var y = (Math.pow(sidec, 2) + Math.pow(sidea, 2) - Math.pow(sideb, 2)) / (2 * sidec * sidea); // The other angle cosine I guess I didn't write this part
    y = Math.acos(y);
    var z = Math.PI - (x + y); //THE FINAL ANGLE
    var angles = [x, y, z]; //lol an array of angles
    for (i = 0; i < angles.length; i++) {
        angles[i] = angles[i] * (180 / Math.PI); //converts all the angles to degrees
    }
    return angles;
}

function aas(anglea, angleb, sidea) {
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
}
console.log(aas(35, 62, 7));