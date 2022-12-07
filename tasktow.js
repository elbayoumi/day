function Point3D(_x = 0, _y = 0, _z = 0) {
    this.x = _x;
    this.y = _y;
    this.z = _z;
}

Point3D.prototype.Desplay = function () { return `${this.x} ${this.y} ${this.z}` }
let dispay = new Point3D()
console.log(dispay.Desplay())
// Point3D.prototype.opration = function () { console.log(` this is oprations on variable ${this.x * this.y + this.z} ${this.x + this.y - this.z} ${this.x - this.y + this.z} `) }
let opration = new Point3D(2, 3, 6)
let opration2 = new Point3D(7, 4, 8)
// opration.opration()
let resoulte = (a, b, c, d, e, f) => {
    console.log(`a: ${(a + d) * (a + d)}, b: ${(b - e) * (b - e)}, c: ${(c * f) * (c * f)}, d: ${(d - a) * (d - a)},`)
}
resoulte(opration.x, opration.y, opration.z, opration2.x, opration2.y, opration2.z)