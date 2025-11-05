export async function POST(request: Request) {
    try {
        const data = await request.json();

        return new Response(JSON.stringify({ message: "OK", data }), {
            status: 200,
        });
    } catch (error) {
        return new Response("Erro interno", { status: 500 });
    }
}
