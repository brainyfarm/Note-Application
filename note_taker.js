/**
* Class NoteApplication 
* Has a constructor that accepts the note author (author)
* constructor sets the instance variable author as the note author
*/
class NoteApplication {
	/**
	 * @constructor 
	 * @PARAMS author
	 */
	constructor( author ) {
		if ( typeof author === "string" && author.length > 0){
		 this.noteAuthor = author;
		 this.notes = [];
		}
	}
	
	
	
	/**
	 * Method create
	 * Creates a new note
	 * @PARAMS note_content
	 */
	 create( note_content ) {
	 	// Check to see note contain is a string and not empty
	 	if( note_content && typeof note_content === "string" && note_content.length > 0 )
	 		this.notes.push( note_content );
	 	else
	 		console.log("N content must be a string with length greater than 1");
	 }
	 
	 
	 
	 /**
	  * Method listNotes 
	  * Prints out individual note in the notes list
	  */
	 listNotes() {
	 	// Check to see if there are notes in list
	 	if( this.notes.length > 0){
	 		for(let i = 0; i < this.notes.length; i++){
	 		
	 			let noteContent = this.notes[i];
	 			let noteId = i;
	 		
	 			console.log( "Note ID: " + noteId + "\n" + noteContent + "\n" );
		 		console.log("By Author " + this.noteAuthor + "\n");
	 			}
			 }
		// If no notes exist 
		else{
			 	console.log("You have no notes saved");
			 }
	 	}
	 

	 /**
	  * Method get  
	  * @PARAMS note_id 
	  * @RETURNS content of note 
	  */
	 get( note_id ) {
	 	// Check to see note_id is a number and that the note exists
	 	if( typeof note_id === "number" && this.notes[ note_id ])
	 		return this.notes[ note_id ];
	 		else{
	 			console.log("Please supply a valid note id")
	 		}
	 } 
	 
	 
	 /**
	  * Method search 
	  * @PARAMS search_text
	  * @RETURN all note containing the string search_text
	  */
	 search( search_text ) {
	 	// Check to be sure search_text is a string and not empty
	 	if( typeof search_text === "string" && search_text.length > 0){
	 	console.log("Showing results for search " + "\'" + search_text + "\'");
	 
	 	for(var i = 0; i < this.notes.length; i++) {
    		var wordsInNoteArray = this.notes[i].toLowerCase().split(" ");
    		
    		// If search_text is found in the current note
    		if( wordsInNoteArray.indexOf(search_text.toLowerCase()) > -1 ) {
    		
       			console.log( "Note ID: " + i + "\n" + this.notes[i] + "\n" );
	 			console.log("By Author " + this.noteAuthor + "\n");
       			
					}					
	 			}
	 	}
	 	// If search term is invalid
	 	else{
	 		console.log("Please supply a valid search term");
	 	}
	 }
	 
	 
	 /**
	  * Method delete
	  * deletes note with the id note_id
	  * @PARAMS note_id
	  */
	  
	  delete( note_id ) {	 	
	  // Check to see note_id is a number and that the note exists
	 	if( typeof note_id === "number" && this.notes[ note_id ]){
	  		this.notes.splice( note_id, 1);
	 	}
	 	else{
	 		console.log("Please supply a valid note id");
	 	}
	  }
	  
	  /**
	   * Method edit
	   * replaces the content of note item
	   * @PARAMS note_id, new_content
	   */
	   edit( note_id, new_content ) {
	   		// Check note_id is a number, the note exists and the new_content is a string
	   		if( typeof note_id === "number" && this.notes[note_id] && typeof(new_content) === "string"){
	   			this.notes[ note_id ] = new_content;
	   		}
	   		else{
	   			console.log("Please supply a valid note id and new content");
	   		}
	   }
