// "use strict"

var Smiles = function(dir){
	this.content = "";
	this.dir = dir;
	this.file = "";
	this.context = "";
}

Smiles.prototype.isValid = function(context){
	/*  
	* Assumed that the correct format of SMILES is not consist of white space/tab 
	*/
	if (/\s/g.test(context)) {
		return false;
    }
    this.context = context;
    return true;
}

Smiles.prototype.get_context = function(){
	return this.context;
}


Smiles.prototype.read = function(file){
	$.get(this.dir + file, function(context){
		return context;
	});
}