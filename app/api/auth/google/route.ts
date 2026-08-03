import { NextResponse } from 'next/server'
import { getBackendApiUrl } from '@/lib/auth/backend'

const GOOGLE_AUTH_PATH = '/api/v1/auth/google'

export async function GET(request: Request) {
  const backendUrl = getBackendApiUrl()
  const redirectUrl = backendUrl
    ? `${backendUrl}${GOOGLE_AUTH_PATH}`
    : new URL(GOOGLE_AUTH_PATH, request.url).toString()

  return NextResponse.redirect(redirectUrl)
}
