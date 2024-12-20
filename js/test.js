async function GetGames() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ca12352d98msh8838034e96d9ef6p188470jsnc8ab6e478958",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    // Fetch list of shooter games
    const gamesResponse = await fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
      options
    );
    if (!gamesResponse.ok) throw new Error("Failed to fetch games list.");
    const games = await gamesResponse.json();
    // console.log("Games List:", games);

    // Fetch details of a specific game
    const gameDetailsResponse = await fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452",
      options
    );
    if (!gameDetailsResponse.ok)
      throw new Error("Failed to fetch game details.");
    const gameDetails = await gameDetailsResponse.json();
    console.log("Game Details:", gameDetails);
  } catch (error) {
    // console.error("Error fetching data:", error);
  }
}

GetGames();
