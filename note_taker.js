/**
* Class NoteApplication 
* Has a constructor that accepts the note author (author)
* constructor sets the instance variable author as the note author
*/
class NoteApplication {
	
	constructor( author ) {
		
		 this.noteAuthor = author;
		 this.notes = [];
		// console.log(noteAuthor);

	}
	
	
	
	/**
	 * Method create
	 * Creates a new note
	 * @PARAMS note_content
	 */
	 create( note_content ) {
	 	
	 	this.notes.push( note_content );
	 	
	 }
	 
	 
	 
	 /**
	  * Method listNotes 
	  * Prints out individual note in the notes list
	  */
	 listNotes() {

	 	for(let i = 0; i < this.notes.length; i++){
	 		
	 		let noteContent = this.notes[i];
	 		let noteId = i;
	 		
	 		console.log( "Note ID: " + noteId + "\n" +
	 					 	noteContent + "\n"
	 		);
	 		
	 		console.log("By Author " + this.noteAuthor + "\n");
	 	}
	 }
	 
	 /**
	  * Method get  
	  * @PARAMS note_id 
	  * @RETURNS content of note 
	  */
	 get( note_id ) {
	 	if( this.notes[ note_id ])
	 		return this.notes[note_id];
	 } 
	 
	 
	 /**
	  * Method search 
	  * @PARAMS search_text
	  * @RETURN all note containing the string search_text
	  */
	 search( search_text ) {
	 	if( typeof(search_text) === "string"){
	 		
	 	console.log("Showing results for search " + "\'" + search_text + "\'");
	 
	 	for(var i = 0; i < this.notes.length; i++) {
    		var wordsInNoteArray = this.notes[i].toLowerCase().split(" ");
    		
    		// If search_text is found in the current note
    		if( wordsInNoteArray.indexOf(search_text.toLowerCase()) > -1 ) {
    		
       			console.log( "Note ID: " + i + "\n" +
	 					 	this.notes[i] + "\n"
	 		);
	 		
	 			console.log("By Author " + this.noteAuthor + "\n");
       			
					}
					
	 			}
	 	}
	 		
	 	
	 }
	 
	 
	 /**
	  * Method delete
	  * deletes note with the id note_id
	  * @PARAMS note_id
	  */
	  
	  delete( note_id ) {
	  	// Check if the note exists
	  	if( this.note_id[ note_id ])
	  		this.notes.splice( note_id, 1);
	  }
	  
	  /**
	   * Method edit
	   * replaces the content of note item
	   * @PARAMS note_id, new_content
	   */
	   edit( note_id, new_content ) {
	   		// If the note_id exists and the new_content is a string
	   		if(this.notes[note_id] && typeof(new_content) === "string")
	   			this.notes[ note_id ] = new_content;
	   }
}