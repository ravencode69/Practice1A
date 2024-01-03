export class CtrClass {
  AtoIctr: number = 0;
  ItoActr: number = 0;

  incrAOper() {
    this.AtoIctr++;
    console.log('num of inactive->active ' + this.AtoIctr);
  }
  incrIOper() {
    this.ItoActr++;
    console.log('num of active->inactive  ' + this.ItoActr);
  }
}
