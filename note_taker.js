/**
* Class NoteApplication 
* Has a constructor that accepts the note author (author)
* constructor sets the instance variable author as the note author
*/
class NoteApplication {
	
	constructor( author ) {
		
		 this.noteAuthor = author;
		 this.notes = [];

	}
	
	
	
	/**
	 * Method create takes in 
	 * @parameter note_content 
	 * Creates a note based on note_content
	 * Adds it to list of notes
	 */
	 create( note_content ) {
	 	
	 	notes.push( note_content );
	 	
	 }
	 
	 
	 
	 /**
	  * Method listNotes 
	  * prints out individual note in the notes
	  */
	 listNotes() {
	 	for(let i = 0; i < notes.length; i++){
	 		
	 		let noteContent = notes[i];
	 		let noteAuthor = author;
	 		let noteId = i;
	 		
	 		console.log( "NOTE ID: " + noteId + "\n" +
	 					 	noteContent + "\n" +
	 					 	"\n" +
	 					 	noteAuthor
	 		);

	 	}
	 }
	 
	 /**
	  * Method get 
	  * @parameter note_id 
	  * returns the content of the note 
	  */
	 get( note_id ) {
	 	return notes[note_id];
	 } 
	 
	 
	 
	 
	 
}

