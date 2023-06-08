# Getting football positional data

This tool has been developed to facilitate the manual extraction of players' positional data from images. To access and utilize the tool, please follow this [LINK](https://mumoyarce96.github.io/getPositionalData/).  It is important to note that this tool is currently under development and may not be fully functional yet.  

### The available functionalities are as follows:

1. **Select Pitch:** Choose between the options of a full pitch, right box, or left box.
2. **Write Team Names:** Enter the team names and press Enter.
3. **Load an Image:** Click the "Select file" button to upload an image file, then click the "Load Image" button.
4. **Select a Player:** Click on a circle on the pitch to select a player. The selected player's circle will turn purple.
5. **Select Action:** 
   - **Add Player:** After selecting a team, click the "Add Player" button and then click on the desired location on the pitch to add a new player.
   - **Move:** Press the "Move" button to change the location of a player or the ball. Select the object (player or ball) and drag it to the desired location.
   - **Change Number:** Select a player and choose a number. Click the "Change Number" button to assign the selected number to the player.
   - **Clear Pitch:** Delete all players on the pitch by clicking the "Clear Pitch" button.
   - **Delete Last:** Remove the last player added to the pitch by clicking the "Delete Last" button.
   - **Delete Selected:** Select a player and click the "Delete Selected" button to delete that specific player.
   - **Get Positions:** Press the "Get Positions" button to store the players' positions in the table located below the pitch.
   - **Show Frame:** Select a frame number and click the "Show Frame" button to display the positional data and locations of players and the ball on the pitch.
   - **Edit Frame:** Click the "Edit Frame" button to make changes to a selected frame. After making the necessary changes (adding or deleting players, changing locations), press the "Get Positions" button.
6. **Table:** The table stores the positional data.
   - **Clear Table:** Delete all data from the table by clicking the "Clear Table" button.
   - **Export to .csv:** Download the table as a .csv file named "positionalData.csv" by clicking the "Export to CSV" button.


### Future funtionalities:
1. Loading a .csv file containing tracking data.
2. Fix Show frame.
3. Writing the name of the downloaded .csv file.  
4. Deleting only a selected frame from the table.
