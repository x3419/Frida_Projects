// Challenge: https://github.com/OWASP/owasp-mstg/tree/master/Crackmes/Android/Level_01

Java.perform(function() {

	console.log('START')

	var crackTarget = Java.use("sg.vantagepoint.a.c");

  // first we must bypass 3 root checks

	crackTarget.a.implementation=function(){
		//console.log("Hi Jack")
		return false;
	}
	crackTarget.b.implementation=function(){
		//console.log("Hi Jack")
		return false;
	}
	crackTarget.c.implementation=function(){
		//console.log("Hi Jack")
		return false;
	}


  // bypass debugging check

	var crackTarget2 = Java.use("sg.vantagepoint.a.b");

	crackTarget2.a.implementation=function(){
		//console.log("Hi Jack")
		return false;
	}


  // print secret

	var crackTarget5 = Java.use("sg.vantagepoint.a.a");

	crackTarget5.a.implementation=function(bArr, bArr2){
			console.log("IN SECRET METHOD"); // a(byte[] bArr, byte[] bArr2)

	    	var response = crackTarget5.a.overload("[B", "[B").call(this, bArr, bArr2);


	    	var buffer = Java.array('byte', response);
			var result = "";
			for(var i = 0; i < buffer.length; ++i){
			    result+= (String.fromCharCode(buffer[i]));
			}
	    	console.log("SECRET: " + result)
		    return response;
	}


})
