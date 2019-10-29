const AWS = require('aws-sdk');

export default class LambdaExternal {
  public static async call(functionName: string, payload?): Promise<Array<any>> {
    const lambda = new AWS.Lambda({
      region: 'us-east-1'
    });
    const params = {
      FunctionName: functionName,
      InvocationType: 'RequestResponse',
      LogType: 'Tail',
      Payload: payload ? JSON.stringify(payload) : undefined
    };

    debugger;
    return new Promise<Array<any>>((resolve, reject) => {
        debugger;
        lambda.invoke(params, (err, data) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        debugger;
        const ans = JSON.parse(data.Payload);
        debugger;
        if (ans.statusCode === 200) {
          return resolve(JSON.parse(ans.body));
        }
        debugger;
        return reject();
      });
    });
  }
}