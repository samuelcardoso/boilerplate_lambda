import LambdaExternal from "../externals/lambda.external";

export default class CarService {
    public static async all(params = <any>{}): Promise<Array<any>> {
      const buses = await <any>LambdaExternal.call('arn:aws:lambda:us-east-1:972145800023:function:boilerplatelambda-samuel-bus_all');
      return buses.concat([Math.random()]);
    }
  
    public static async add(entity: any): Promise<number> {
      return 1;
    }
  
    public static async update(id: any, entity: any) {
    }
  
    public static async remove(id: any) {
    }
  }