import { getToken } from 'next-auth/jwt';

export async function middleware(req: any) {
    if (req.nextUrl.pathname === '/') {
        const session = await getToken({
            req,
            secret: process.env.JWT_SECRET,
            secureCookie: process.env.NODE_ENV === 'production'
        });

        if (!session) return Response.redirect('/signin');
    }
}
