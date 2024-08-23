# Translate Anime Title
The purpose of this script is to translate an anime title input and return the title in Japanese. The script does simple logging to verifiy that the anime returned is the one intended, as the search is fuzzy.

## Set Up:
This script currently requires no setup, although - readline arguments may be added at a later date!

## Running the Script:
Run the following command:
`node index.js <Name_of_Anime>`

It is important to note that this script uses `process.argv`. That being the case, be sure to use underscores or place your search entry in double quotes in the event that there are spaces in the title.

Example:
```bash
node index.js Attack_on_Titan
```
or

```bash
node index.js "Attack on Titan"
```