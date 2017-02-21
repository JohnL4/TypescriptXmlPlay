export class StarSystem
{
   get id() { return this._id; }
   get technology() { return this._technology; }
   get environment() { return this._environment; }
   get resources() { return this._resources; }
   
   constructor(
      private _id: string,
      private _technology: Number,
      private _environment: Number,
      private _resources: Number
   ) {}

   toString() : string { return `${this._id} T${this._technology} E${this._environment} R${this._resources}` }
}
