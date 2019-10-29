export default class MainService {
    public static async all(params = <any>{}): Promise<Array<any>> {
      return [];
    }
  
    public static async add(entity: any): Promise<number> {
      return 1;
    }
  
    public static async update(id: any, entity: any) {
    }
  
    public static async remove(id: any) {
    }
  }