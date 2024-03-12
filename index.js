const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('llpB7Y31Yt', uuidlib.v4());
	}

module.exports = generateId
