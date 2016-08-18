# Note Taker Application

======
 A javascript note taking application.

## FILES
* `note_taker.js` contains code for the NotesApplication app


======

## DOCUMENTATION

### Set Up 
* To set up your note app and make yourself the default author, assume "Olawale" would be the author.

 ```js
	let myNoteApp = new NotesApplication("Olawale");

 ``` 


## Creating Notes
* To create a new note, ensure you supply valid note content during invocation.

 ```js
	myNoteApp.create("This is a note entry");

 ``` 

 
## View all Notes
* View all saved notes.

 ```js
	myNoteApp.listNotes();

 ``` 

## View a Specific Note
* To view a specific note, use the code below supplying the `note_id`
 ```js
	myNoteApp.get(1);

 ``` 

## Searching all Notes for a term
* Use the code below, supplying `search_term` (a string) 
```js
	myNoteApp.search("hello");

 ``` 


## Deleting a Note
* Use the `.delete()` method to delete a note. Pass the `note_id` (an integer) when calling.
```js
	myNoteApp.delete(1);

 ``` 

## Editing a Note
* To modify a note, use the `.edit()` method supplying the 	`note_id` (an integer) as well as the `new_content` (a string)
```js
	myNoteApp. edit(1, "Here is the new note content");

 ``` 

