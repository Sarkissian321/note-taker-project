let notes = []; // Temporary storage. Replace this with persistent storage later.

module.exports = function(app) {
    // Fetch existing notes
    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });

    // Save a new note
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
    
        notes.push(newNote);
        res.json(newNote);
    });

    // Delete a note by ID
    app.delete('/api/notes/:id', (req, res) => {
        let noteId = req.params.id;
        let noteIndex = notes.findIndex(note => note.id === noteId);
        if (noteIndex !== -1) {
            notes.splice(noteIndex, 1);
            res.json({ success: true, message: 'Note deleted' });
        } else {
            res.status(404).json({ success: false, message: 'Note not found' });
        }
    });
};
