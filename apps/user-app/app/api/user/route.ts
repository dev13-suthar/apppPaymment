import { NextResponse } from "next/server";
import db from "@repo/db/client"


export const GET = async () => {
    const user = await db.user.findMany({});
   return NextResponse.json({
    helo:user
   })
}