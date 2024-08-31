import { neon } from '@neondatabase/serverless';

// Exposes the sql neon query

export async function POST(request: Request) {
    try {
        const sql = neon(`${process.env.DATABASE_URL}`);
        const { name, email, clerkId } = await request.json();

        if (!name || !email || !clerkId) {
            return Response.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const response = await sql`
        INSERT INTO users (
            name,
            email,
            clerk_Id
        )
        VALUES (
            ${name},
            ${email},
            ${clerkId}    
        )    
    `;

        return new Response(JSON.stringify({ data: response }), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return Response.json({ error: error }, { status: 500 });
    }
}

// const posts = await sql('SELECT * FROM posts');
