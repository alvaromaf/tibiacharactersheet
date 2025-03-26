// Define an asynchronous function to fetch and store the data
async function fetchCharacterData() {
  const apiUrl = "https://api.tibiadata.com/v4/character/Vetomo";
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data; // Return the data
}

// Function to fill the form with JSON data
function fillForm(data) {
    const form = document.getElementById('character-form');
    
    Object.keys(data).forEach(key => {
        const input = form.querySelector(`#${key}`);
        if (input) {
            input.value = data[key];
        }
    });
}

// Add event listeners to buttons
// Use async/await to access the returned value
(async () => {
  const characterData = await fetchCharacterData();
  console.log(characterData); // Access the fetched data

document.getElementById('source1-button').addEventListener('click', () => {
    fillForm(characterData.character.character);
});

 let guild_data = {
	 guild_name: characterData.character.character.guild.name,
	 guild_rank: characterData.character.character.guild.rank,
 }

document.getElementById('source1-button').addEventListener('click', () => {
    fillForm(guild_data);
});

})();