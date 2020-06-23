//service unittest js file
$(Document).ready(function(){
	$('#Generate').click(function(){
		var input = $('#input_box').val();
		generateme(input);
	});
});

function generateme(str){
	var lines = str.split('\n');
	var words;
	var ans = "";
	var pattern = /\w+/g;
	var count = 0;
	for(var i = 0;i < lines.length;i++){
	    words = lines[i].match(pattern);
		count += words.length;
		if(count > 1000)
		{
			alert('limit exceeded!');
			break;
		}
		var temp = "";
		for(var j = 0; j< words.length; j++)
		{
			if(words[j] === "int"){
				temp += (randint()).toString();
			}
			else if(words[j] === "char"){
				temp += randchar();
			}
			else if(words[j] === "string"){
				if(words[j+1]==="int" || words[j+1]==="char" || words[j+1]==="string")
				{
					temp += '*';
				}
				else
				{
					var siz1 = words[j+1];
					if(siz1 >= 1000)
					{
						alert("too large");
						break;
					}
					temp += randstring(siz1);
					j++;
				}
			}
			else
			{
				temp += '*';
			}
			temp += ' ';
		}
		temp = temp.trim();
		ans += temp;
		ans += '\n';
	}
	stdoutme(ans);
}

function stdoutme(str)
{
	$('#output_box').val(str);
}

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

function randint(){
	return Math.floor((Math.random() * 1000) + 0);
}

function randchar(){
	var tt = (Math.floor((Math.random() * 26) + 0));
	var ch = String.fromCharCode(97 + tt);
	return ch;
}

function randstring(len){
	var temp = "";
	for(var i=0;i<(len);i++)
	{
		var tt = (Math.floor((Math.random() * 26) + 0));
		var ch = String.fromCharCode(97 + tt);
		temp += ch;
	}
	return temp;
}