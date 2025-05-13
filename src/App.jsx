
import './App.css'
import Home from '@/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Book from '@/pages/Book'
import Category from '@/pages/Category'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'
import { feedBooks } from './api'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

// 將書籍資料上傳到 Firebase Firestore
//feedBooks();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider context={{}} >
            <BrowserRouter>
              <Routes>
                {/*對應網站首頁"/"，會渲染Home*/}
                <Route path='/' element={<Home />} />
                <Route path='books'>
                  {/* :是可改變動態變數 */}
                  <Route path="category/:categoryName" element={<Category />} />
                  <Route path='ID/:bookID' element={<Book />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
