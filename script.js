document.getElementById('data-source').addEventListener('change', async function () {

// Get the selected value from the dropdown
const selectedValue = this.value;

if (selectedValue) {

// Construct the API URL using the selected value
const apiUrl = `https://api.tibiadata.com/v4/character/${selectedValue}`;

// Fetch data from the API
const response = await fetch(apiUrl);
const characterData = await response.json();

// Fill the form with data from the API
function fillForm(data) {
    const form = document.getElementById('character-form');
    
    Object.keys(data).forEach(key => {
        const input = form.querySelector(`#${key}`);
        if (input) {
            input.value = data[key];
        }
    });
}

// Add event listeners to button
document.getElementById('button').addEventListener('click', () => {
    fillForm(characterData.character.character);
});


 let guild_data = {
	 guild_name: characterData.character.character.guild.name,
	 guild_rank: characterData.character.character.guild.rank,
 }

document.getElementById('button').addEventListener('click', () => {
    fillForm(guild_data);
});

}

});
