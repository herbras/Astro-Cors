

export async function corsMiddleware({ request }, next) { 
  const response = await next();
  const headers = new Headers(response.headers);

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  return new Response(response.body, { 
    ...response, 
    headers: headers, 
  }); 
}
