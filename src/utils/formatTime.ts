const formatString = (num: number) => (num < 10 ? `0${num}` : num);
export const formatTime = (centiSecond: number) => {
	const result = formatString(centiSecond);
	return result;
};
