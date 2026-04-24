import { Link } from "react-router";

export function Welcome() {
  	return (
		<>
			<h1 className="text-center">Welcome to Home Page!</h1>
			<div className="text-center">
				<Link to="/about" state={{ from: "home" }}>Go to About Router</Link>
			</div>
		</>
	)
}
