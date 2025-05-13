import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "./firebaseConfig";
import books from "@/json/books.json";

//取得所有文件
const bookscollection = collection(db, "books");

// APIs
export const feedBooks = async () => {
    // 刪除現有資料
    const querySnapshot = await getDocs(bookscollection);
    querySnapshot.forEach(async (book) => {
        await deleteDoc(doc(db, "books", book.id));
    });
    //新增新的資料
    books.forEach(async (book) => {
        const docRef = await doc(bookscollection);
        await setDoc(docRef, { ...book, id: docRef.id, category: book.category.toUpperCase() });
    });
}

//從資料庫拿回資料並顯示在畫面上

//顯示所有商品
export const getBooks = async () => {
    const querySnapshot = await getDocs(bookscollection);
    //將查詢結果轉換成json陣列
    let result = [];
    querySnapshot.forEach(async (book) => {
        await result.push(book.data());
    });
    return result;
}


//顯示某一產品詳細頁面
export const getBookById = async (id) => {
    const docRef = await doc(db, "books", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

//顯示每一類別的商品
export const getBooksByCategory = async (category) => {
    //建立查詢 判斷類別
    const q = await query(bookscollection, where("category", "==", category.toUpperCase()));
    const querySnapshot = await getDocs(q);

    //將查詢結果轉換成json陣列
    let result = [];
    querySnapshot.forEach(async (book) => {
        await result.push(book.data());
    });
    return result;
}

