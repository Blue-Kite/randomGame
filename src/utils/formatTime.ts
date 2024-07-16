export const formatTime = (time: number) => {
	const minutes = String(Math.floor(time / 60)).padStart(2, '0');
	const second = String(time % 60).padStart(2, '0');
	const result = `${minutes} : ${second}`;
	return result;
};
