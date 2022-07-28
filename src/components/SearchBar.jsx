import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const SearchBar = () => {
    // Import setStates from globalcontext.js
	const { setQuery, setOrginalSortState, setCurrentPage } = useContext(GlobalContext);
    
    // State - save searched topic
	const [topic, setTopic] = useState("");

	const handleSearchClick = (e) => {
		e.preventDefault();
        
		if (topic !== "") setQuery(topic);

        setOrginalSortState(true)
		setCurrentPage(1)
	};

	return (
		<div>
			<form
				className="sm:w-[350px] md:w-[400px] flex flex-row justify-center"
				onSubmit={handleSearchClick}
			>
				<input
					className="rounded-[50px] h-[30px] w-[300px] pl-5 focus:outline-none"
					value={topic}
					type="text"
					placeholder="Search Topic ..."
					onChange={(event) => setTopic(event.currentTarget.value)}
				/>
				<button
					className="h-[30px] w-[100px] bg-cyan-600 rounded-[50px] ml-[-25px] text-gray-100"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
