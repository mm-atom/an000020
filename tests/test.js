const test = require('ava');
const { promises } = require('fs');

const { readFile } = promises;

const { default: a } = require('../dist/index');

test('qrcode', async (t) => {
	const dataForQRcode = 'https://mm-edu.gitee.io';		// 二维码的数据
	const width = 80;				// 二维码的宽
	const dark_color = '#000000';	// 二维码的颜色
	const light_color = '#ffffff';	// 背景色
	const r = await a(dataForQRcode, width, dark_color, light_color);
	const f = await readFile('./tests/test.png');
	t.is(r.replace(/.*,/, ''), f.toString('base64'));
});
