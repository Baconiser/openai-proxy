import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
        const resp = new Response(null, { status: 204 });
        resp.headers.set("Access-Control-Allow-Origin", "*");
        resp.headers.set(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
        resp.headers.set(
            "Access-Control-Allow-Headers",
            "X-Requested-With, Content-Type, Authorization"
        );
        resp.headers.set("Access-Control-Allow-Credentials", "true");
        return resp;
    }

    const resp = await ctx.next();
    resp.headers.set("Access-Control-Allow-Origin", "*");
    resp.headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    resp.headers.set(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Authorization"
    );
    resp.headers.set("Access-Control-Allow-Credentials", "true");
    return resp;
}
