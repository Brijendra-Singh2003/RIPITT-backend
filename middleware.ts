// middleware.js

import { NextResponse } from 'next/server';

export function middleware(req) {
  const origin = req.headers.get('origin');

  // Add CORS headers
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', "http://localhost:5173" || '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // For preflight requests
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204 });
  }

  return response;
}

// To apply middleware only to specific routes, add the following export
export const config = {
  matcher: '/api/:path*',  // Only apply to API routes (optional)
};
