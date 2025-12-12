import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: ["/admin/:path*"]
};

export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER ?? "";
  const pass = process.env.ADMIN_PASS ?? "";

  // If not configured, block admin by default.
  if (!user || !pass) {
    return new NextResponse("Admin is not configured.", { status: 401 });
  }

  const auth = req.headers.get("authorization") || "";
  const [type, encoded] = auth.split(" ");

  if (type !== "Basic" || !encoded) {
    return unauthorized();
  }

  const decoded = Buffer.from(encoded, "base64").toString("utf8");
  const [u, p] = decoded.split(":");

  if (u === user && p === pass) return NextResponse.next();
  return unauthorized();
}

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin", charset="UTF-8"'
    }
  });
}
