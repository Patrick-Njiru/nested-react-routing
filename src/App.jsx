import { Route, Routes } from "react-router-dom"
import {
	RootLayout,
	Home,
	Login,
	List,
	Search,
	AddProduct,
	ProductDisplay,
	ProductsLayout,
} from "./pages"

const App = () => {
	return (
		<>
			<Routes>
				<Route path='' element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='products' element={<ProductsLayout />}>
						<Route index element={<List />} />
						<Route path='list' element={<List />} />
						<Route path='add' element={<AddProduct />} />
						<Route path='search' element={<Search />} />
						<Route path=':id' element={<ProductDisplay />} />
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
