import React, { useState } from "react";
import s from "./App.module.scss";
import PlayerCard from "./components/PlayerCard";
import MatchesCard from "./components/MatchesCard";
import {
	players as defaultPlayers,
	matches as defaultMatches
} from "./data/defaults.js";

const DEBUG = true;
const DebugTab = ({ ...data }) => {
	const style = {
		color: "white",
		fontSize: 12,
		lineHeight: "1.6em",
		fontFamily: "monospace",
		position: "fixed",
		bottom: 0,
		right: 0
	};

	data = Object.values(data);

	return <span style={style}>{data.map(datum => JSON.stringify(datum))}</span>;
};

const App = () => {
	const [round, setRound] = useState("Grand Finals");
	const [streamLink, setStreamLink] = useState("");
	const [players, setPlayers] = useState(defaultPlayers);
	const [matches, setMatches] = useState(defaultMatches);

	return (
		<main>
			<h1 className={s.logo}>Tournament Tabler</h1>
			<section className={s.mainSection}>
				<div className={s.roundInfo}>
					<input
						className={s.round}
						type="text"
						placeholder="Round"
						required
						value={round}
						onChange={e => setRound(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Stream Link (optional but recommended)"
						value={streamLink}
						onChange={e => setStreamLink(e.target.value)}
					/>
				</div>
				<div className={s.setInfo}>
					{players.map((player, i) => (
						<PlayerCard
							key={i}
							playerIndex={i}
							player={player}
							setPlayers={setPlayers}
						/>
					))}
					<MatchesCard />
				</div>
				<button className={s.btn}>Generate Table</button>
			</section>
			{DEBUG && (
				<DebugTab
					round={round}
					streamLink={streamLink}
					players={players}
					matches={matches}
				/>
			)}
		</main>
	);
};

export default App;
