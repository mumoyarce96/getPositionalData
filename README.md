# Getting football positional data

This is a tool developed to manually get players' positional data from pictures. To use this tool please follow this [LINK](https://mumoyarce96.github.io/getPositionalData/). Keep in mind this tool is not finished yet. 

The available functionalities are: 

1. **Select pitch:** Full pitch, right box or left box.
2. **Write team names:** Write the team name and press enter.
3. **Load an image:** Click the Select file button, select an image file to uplaod and click the Load Image button.
4. **Select a player:** To select a player make sure no action button is pressed. Click a circle on the pitch to select it. When a player is selected the color of the circle changes to purple.
5. **Select action:** 
    - **Add player:** To add a player, a team have to be selected (team 1 is selected by default). Once the team is selected, click the Add Player button and then click the location of the pitch where you'd like to add the new player.
    - **Move:** To change a players' or the ball's location press the Move button. Then, select the object whose position has to be changed (player or ball) and drag it to the desired location.
    - **Change number:** To change the number of a player. First, select a player. Then, choose a number and click the Change Number button.
    - **Clear pitch:** To delete every player on the pitch click the Clear Pitch button.
    - **Delete last:** To delete the last player added to the pitch click the Delete Last button.
    - **Delete selected:** To delete an specific player select the player and click the Delete Selected button.
    - **Get positions:** To store the players position in the table located below the pitch press the Get Positions button.
    - **Show frame:** To show the positional data from an specific frame select the Frame number and click the Show Frame button. It also shows the locations of the players and the ball on the pitch.
    - **Edit frame:** To edit a selected frame click the Edit Frame button. Then make all the needed changes (add or delete players, change locations) and press the Get Positions button.

6. **Table:** The table stores the positional data.
    - **Clear table:** To delete all the data from the table click the Clear Table button.
    - **Export to CSV:** Download the table as a .csv file named positionalData.csv.      

Future funtionalities:
1. Loading a .csv file containing tracking data.
2. Fix Show frame.
3. Writing the name of the downloaded .csv file.  
4. Deleting only a selected frame from the table.
