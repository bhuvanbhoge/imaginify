import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed-out users to access the specified routes:
  publicRoutes: [
    "/",
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
    "/transformations/add/remove",
    "/transformations/add/fill",
    "/transformations/add/store",
    "/transformations/add/recolor",
    "/transformations/add/removeBackground",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
