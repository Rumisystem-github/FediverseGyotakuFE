function date_format(date) {
	let hours = date.getHours();
	let am_pm = "午前";

	if (hours > 12) {
		am_pm = "午後";
		hours = hours - 12;
	}

	return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日 ${am_pm}${hours}時${date.getMinutes()}分${date.getSeconds()}秒`;
}