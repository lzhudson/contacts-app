export default function orderArray(previousItem, nextItem, nameOrdernation) {
	if(previousItem[nameOrdernation] > nextItem[nameOrdernation]) {
		return 1;
	}
	if(previousItem[nameOrdernation] < nextItem[nameOrdernation]) {
		return -1;
	}
	return 0;
}