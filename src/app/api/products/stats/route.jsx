import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // Your MongoDB connection file

export async function GET() {
  const client = await clientPromise;
  const db = client.db("shop-smart");
  const products = db.collection("products");

  const total = await products.countDocuments();
  const avgPriceResult = await products.aggregate([
    { $group: { _id: null, avgPrice: { $avg: { $toDouble: "$price" } } } },
  ]).toArray();

  const avgPrice = avgPriceResult[0]?.avgPrice || 0;

  return NextResponse.json({ total, avgPrice });
}
