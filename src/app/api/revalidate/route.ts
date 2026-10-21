import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

function revalidateAll() {
  revalidatePath("/news")
  revalidatePath("/news/[slug]", "page")
  revalidatePath("/blog")
  revalidatePath("/blog/[slug]", "page")
  revalidatePath("/sitemap.xml")
}

async function handle(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret")
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 })
  }

  revalidateAll()
  return NextResponse.json({ revalidated: true, now: Date.now() })
}

export async function POST(request: NextRequest) {
  return handle(request)
}

export async function GET(request: NextRequest) {
  return handle(request)
}
