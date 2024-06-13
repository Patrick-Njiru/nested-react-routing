import { Outlet } from "react-router-dom"
import Navbar from "../scenes/Navbar"

const RootLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default RootLayout
