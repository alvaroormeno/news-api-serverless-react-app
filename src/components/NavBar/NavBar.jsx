import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";

const NavBar = () => {
	const {
		handleSort,
		postsPerPage,
		totalposts,
		paginate,
		originalSortState,
		currentPage,
	} = useContext(GlobalContext);

	return (
		<div className="flex flex-col h-[280px] sm:mx-[20px] md:mx-[100px] justify-end  items-center gap-6">
			{/* Title */}
			<h1 className="sm:text-3xl md:text-5xl font-[800] text-white ">
				NEWS NOW!
			</h1>
			{/* Search Bar Component */}
			<SearchBar />
			{/* Sorting Button */}
			<button
				className="h-[35px] w-[200px] mb-[-0px] bg-blue-500 rounded-[50px] text-gray-100 font-[600] tracking-[1px]"
				onClick={handleSort}
			>
				{originalSortState ? "Sort Title A-Z" : "Sort Date Published"}
			</button>
			{/* Pagination Component */}
			<Pagination
				className=""
				postsPerPage={postsPerPage}
				totalPosts={totalposts}
				paginate={paginate}
			/>
			{/* Sort by & Current Page Container */}
			<div className="flex flex-row w-[100%] justify-between">
				{/* Sort State */}
				<p className="mt-[-20px] text-white sm:text-[12px] md:text-[18px] tracking-[.5px] font-[600]">
					{originalSortState
						? "Sorted by - Date Published"
						: "Sorted by - Title Alphabetical Order"}
				</p>
				{/* Current Page */}
				<p className="mt-[-20px] text-white sm:text-[12px] md:text-[18px] tracking-[.5px] font-[600]">
					{`Page - ${currentPage}`}
				</p>
			</div>
		</div>
	);
};

export default NavBar;
