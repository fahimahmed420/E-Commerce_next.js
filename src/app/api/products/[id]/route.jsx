import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("shop-smart");
    const body = await req.json();
    const { name, description, price, image } = body;

    await db.collection("products").updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { name, description, price: parseFloat(price), image, updatedAt: new Date() } }
    );

    return new Response(JSON.stringify({ message: "Product updated" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update" }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("shop-smart");
    await db.collection("products").deleteOne({ _id: new ObjectId(params.id) });

    return new Response(JSON.stringify({ message: "Product deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete" }), { status: 500 });
  }
}
