import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("shop-smart");

    const products = await db
      .collection("products")
      .find()
      .sort({ createdAt: -1 }) // newest first
      .limit(3)
      .toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch highlights" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
