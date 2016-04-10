var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ZapisanySchema = new Schema({
    imie: String,
    email: String,
    zdj: String
});


module.exports = mongoose.model('Zapisany', ZapisanySchema);