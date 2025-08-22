import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("shop-smart");
    const products = await db.collection("products").find().toArray();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("shop-smart");
    const body = await req.json();
    const { name, description, price, image } = body;

    if (!name || !description || !price) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    await db.collection("products").insertOne({
      name,
      description,
      price: parseFloat(price),
      image,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Product added" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to add product" }), { status: 500 });
  }
}
