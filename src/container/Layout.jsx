import React, { useContext } from "react";
import NewsCard from "../components/NewsCard/NewsCard";
import { GlobalContext } from "../GlobalContext";
import Pagination from "../components/Pagination/Pagination";
import NavBar from "../components/NavBar/NavBar";

const Layout = (props) => {
	// Values from GlobalContext
	const {
		currentNewsArticles,
		postsPerPage,
		totalposts,
		paginate,
	} = useContext(GlobalContext);

	return (
		<main className="h-[100%] w-screen bg-gradient-to-b  from-violet-500 to-fuchsia-500">
			{/* /// NAVBAR /// */}
			<NavBar/>
			{/*/// NEWS CARDS CONTAINER ///*/}
			<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:mx-[20px] md:mx-[100px]">
				{/* Map newscard for each news object */}
				{currentNewsArticles &&
					currentNewsArticles.map((news) => (
						<NewsCard data={news} key={news.url} />
					))}
			</div>
			{/*/// PAGINATION CONTAINER ///*/}
			<div className="py-[40px] flex felx-row justify-center sm:mx-[20px] md:mx-[100px]">
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={totalposts}
					paginate={paginate}
				/>
			</div>
		</main>
	);
};

export default Layout;
