const path = require('path');

module.exports = function(app) {
    // Route to display the landing page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // Route to display the notes page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
};
