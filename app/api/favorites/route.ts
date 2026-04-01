import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc, query, where, doc, deleteDoc } from "firebase/firestore";

const favoritesCol = collection(db, "favorites");

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email") || "";
    const q = email ? query(favoritesCol, where("email", "==", email)) : query(favoritesCol);
    const snapshot = await getDocs(q);
    const favorites = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(favorites);
}

export async function POST(req: NextRequest) {
    try {
        const { anime, email, animeId } = await req.json();

        if (!animeId || !email) {
            return NextResponse.json(
                { error: "Invalid data" },
                { status: 400 }
            );
        }

        // 1️⃣ Проверяем, есть ли уже такой favorite
        const q = query(
            favoritesCol,
            where("animeId", "==", animeId),
            where("email", "==", email)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            // Уже есть такой элемент — не добавляем
            return NextResponse.json(
                { message: "Already in favorites" },
                { status: 200 }
            );
        }

        // 2️⃣ Если нет, добавляем
        const docRef = await addDoc(favoritesCol, { anime, email, animeId });

        return NextResponse.json({
            id: docRef.id,
            anime,
            email,
            animeId,
        });
    } catch (error) {
        console.error("Error adding favorite:", error);
        return NextResponse.json(
            { error: "Failed to add favorite" },
            { status: 500 }
        );
    }
}
export async function DELETE(req: NextRequest) {
    const { animeId, email } = await req.json();

    if (!animeId || !email) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    const q = query(favoritesCol, where("animeId", "==", animeId), where("email", "==", email));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
        const docId = snapshot.docs[0].id;
        await deleteDoc(doc(db, "favorites", docId));
    }
    return NextResponse.json({ message: "Deleted" });
}