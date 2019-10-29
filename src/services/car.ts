export default class CarService {
    public static async all(params = <any>{}): Promise<Array<any>> {
      return [Math.random()];
    }
  
    public static async add(entity: any): Promise<number> {
      return 1;
    }
  
    public static async update(id: any, entity: any) {
    }
  
    public static async remove(id: any) {
    }
  }