/**
 * New node file
 */

function operation(req, res) {
	
	var operation = req.body.operation;
	var result1 = 0;
	
	if(!(isNaN(req.body.field1)) && !(isNaN(req.body.field2))){
		var firstNo = parseFloat(req.body.field1);
		var secondNo = parseFloat(req.body.field2);	
		switch(operation){
		case 'addition':
			result1 = firstNo + secondNo;
			break;
		case 'subtraction':
			result1 = firstNo - secondNo;
			break;
		case 'multiplication':
			result1 = firstNo * secondNo;
			break;
		case 'division':			
			if(secondNo!=0)
				result1 = firstNo / secondNo;
			else
				return err;
			break;		
		}		
	} else {
		
	}
	res.render('index', { result:result1, firstNo: firstNo, secondNo:secondNo } );
}

exports.arithmetic = operation;