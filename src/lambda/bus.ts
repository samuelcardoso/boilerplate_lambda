import BusService from "../services/bus";

export async function all(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(await BusService.all(event.queryStringParameters))
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
}
