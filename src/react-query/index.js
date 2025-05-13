import { useQuery } from "@tanstack/react-query"
import { getBookById, getBooks, getBooksByCategory } from "../api";


//讓我用 hook 的方式簡單安全地抓資料，不用再自己管 useEffect 或 Axios 的重複流程。
export const useBooks = () => {
    console.log('getBooks 被呼叫了！');
    return useQuery({
        queryKey: ['books'],
        queryFn: getBooks
    });
};

export const useBooksByCategory = (category) => {
    return useQuery({
        queryKey: [category],
        queryFn: getBooksByCategory
    });
};

export const useBookById = (BookId) => {
    return useQuery({
        queryKey: [BookId],
        queryFn: getBookById
    });
}