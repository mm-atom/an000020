import { toDataURL } from 'qrcode';

/**
 * 生成二维码
 * @param data_for_qrcode	二维码的数据
 * @param width				二维码的宽
 * @param dark_color		二维码的颜色
 * @param light_color		背景色
 */
export default function create_qr(data_for_qrcode: string, width: number, dark_color: string, light_color: string) {
	return toDataURL(data_for_qrcode, {
		color: {
			dark: dark_color,	// black pixels
			light: light_color	// white background
		},
		errorCorrectionLevel: 'H',	// LMQH
		margin: 1,
		width
	});
}
