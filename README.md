# Note Taker Application

======
 A javascript note taking application.

## Files
* `note_taker.js` contains code for the NotesApplication app

## Documentation

### Set Up 
*To set up your note app and make yourself the default author, assume "Olawale" is the author:

 ```js
	let myNoteApp = new NotesApplication("Olawale");

 ``` 


## Creating Notes
*To create a new note, use the format: 

 ```js
	myNoteApp.create("This is a note entry ");

 ``` 

 
## View all Notes
*To view a list of all notes:

 ```js
	myNoteApp.listNotes();

 ``` 

## View a Specific Note
*To view a specific note, use the code below supplying the `note_id`
 ```js
	myNoteApp.get(1);

 ``` 

## Searching all Notes for a term
*Use the code below, supplying `search_term` (a string) 
```js
	myNoteApp.search("hello");

 ``` 


## Deleting a Note
*Use the `.delete()` method to delete a note. Pass the `note_id` (an integer) when invoking
```js
	myNoteApp.delete(1);

 ``` 

## Editing a Note
*To modify a note, use the `.edit()` method supplying the 	`note_id` (an integer) as well as the `new_content` (a string)
```js
	myNoteApp. edit( 1, "Here is the new note content" );

 ``` 

