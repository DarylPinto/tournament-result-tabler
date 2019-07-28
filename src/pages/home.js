import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions as tournament } from "store/slices/tournament";
import axios from "axios";

const HomePage = () => {
	const dispatch = useDispatch();
	const [searchInput, setSearchInput] = useState("mango");

	// Request data from API
	// eslint-disable-next-line no-unused-vars
	const fetchFromApi = async () => {
		let res = await axios.get(`http://localhost:3001/${searchInput}`);
		// eslint-disable-next-line no-console
		console.log(res.data);
	};

	// Update redux store
	const updateTournamentName = () => {
		dispatch(tournament.updateInfo({ name: "Big House 5" }));
	};

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				updateTournamentName();
			}}
		>
			<h1>Tournament Tabler</h1>
			<input
				type="text"
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
			/>
			<button>Get the smasher</button>
		</form>
	);
};

export default HomePage;
