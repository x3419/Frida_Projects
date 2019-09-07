// Notes:
// Very cool that you can dynamically set nested hooks
// 		- How do you unhook?

Java.perform(function() {

	console.log('START')

	var crackTarget = Java.use("sg.vantagepoint.a.b");

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


	var crackTarget2 = Java.use("sg.vantagepoint.a.a");

	crackTarget2.a.implementation=function(){
		//console.log("Hi Jack")
		return false;
	}




	// this is a "cheat", doesn't count since I don't have the flag
	// var crackTarget6 = Java.use("sg.vantagepoint.uncrackable2.CodeCheck");
	// crackTarget6.a.implementation=function(str){

	// 	//var response = crackTarget6.a.overload('java.lang.String').call(this, str);
	// 	return true;

	// }


	// we can see from the keyword 'native' that '_bar' is imported from a shared library. I dumped the shared library to make sense of the asm implementation through IDA.
	// var lib = Module.findExportByName("libfoo.so","Java_sg_vantagepoint_uncrackable2_CodeCheck_bar")
	// var base = Module.findBaseAddress("libfoo.so")

	// console.log("BASE: " + lib)
	// console.log("BASE + OFF: " + lib.add(0x4008)) 

	// You sould be able to set ptr(lib.add(0x4008)) = 0x1 as an additional "cheat".
	// You should also be able to read a DWORD from the appropriate pointer shown below in the decompiled code to read the secret.


//--------------------------- IDA Decompiled ----------------------------------------------------------------------
 	// v5 = 'nahT';
  //   v6 = 'f sk';
  //   v7 = 'a ro';
  //   v8 = 't ll';
  //   v9 = 'eh';
  //   v10 = 'sif ';
  //   v11 = 104;
  //   v3 = (const char *)(*(int (__cdecl **)(int, int, _DWORD))(*(_DWORD *)a1 + 0x2E0))(a1, a3, 0);
  //   if ( (*(int (__cdecl **)(int, int))(*(_DWORD *)a1 + 684))(a1, a3) == 23 && !strncmp(v3, (const char *)&v5, 0x17u) )
  //     result = 1;
//--------------------------------------------------------------------------------------------------------------------

	// However, it's obvious based on the char little-endian representation of the local variables that the secret is multiple appended char[]'s.
	// Secret: Thanks for all the fish
		


})
