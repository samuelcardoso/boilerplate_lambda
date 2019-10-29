import CarService from "../services/car.service";

export async function all(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(await CarService.all(event.queryStringParameters))
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
}

export async function add(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    return {
      statusCode: 201,
      body: JSON.stringify(await CarService.add(JSON.stringify(event.body)))
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
}

export async function update(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    return {
      statusCode: 204,
      body: JSON.stringify(await CarService.update(event.pathParameters.id, JSON.stringify(event.body)))
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
}

export async function remove(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    return {
      statusCode: 204,
      body: JSON.stringify(await CarService.remove(event.pathParameters.id))
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
}
