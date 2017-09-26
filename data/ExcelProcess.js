var XLSX = require('xlsx');
path = "今日头条需求.xlsx";
ExcelToList(path);

function ExcelToList(path){
	const workbook = XLSX.readFile(path);
	const sheetNames = workbook.SheetNames;
	const worksheet = workbook.Sheets[sheetNames[0]];

	const headers = {};
	const data = [];
	const keys = Object.keys(worksheet);

	var A = 0;
	var B = 0;
	var C = 0;
	var flagA = 0;
	var flagB = 0;

	keys
    // 过滤以 ! 开头的 key
    .filter(k => k[0] !== '!')
    // 遍历所有单元格
    .forEach(k => {
        // 如 A11 中的 A
        let col = k.substring(0, 1);
        // 如 A11 中的 11
        let row = parseInt(k.substring(1));
        // 当前单元格的值
        let value = worksheet[k].v;

        // 保存字段名
        if (row === 1) {
            headers[col] = value;
            return;
        }

        // 解析成 JSON
        if (!data[row]) {
        	switch (col) 
        	{
        	case 'A':
        		if(flagA > 0){
        			A ++;
        		}
        		B = 0;
        		flagB = 0;
        		data[A] = {};
        		data[A]['First'] = value;
        		data[A]['children'] = [];
        		flagA ++;
        		return;
        	
        	case 'B':
        		if(flagB > 0){
        			B ++;
        		}
        		C = 0;
        		temp = data[A]['children'];
        		temp[B] = {};
        		temp[B]['Second'] = value;
        		temp[B]['children'] = [];
        		flagA ++;
        		return;
        	
        	case 'C':
        		temp1 = data[A]['children'];
        		temp2 = temp1[B]['children']; 
        		temp2[C] = {};
        		temp2[C]['Third'] = value;
        		flagB ++;
        		C ++;
        	}
        }
    });
    console.log(data.length);
    console.log(data[1]["First"]);

    //return data;
} 