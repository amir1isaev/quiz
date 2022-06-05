const randomId = (len: number = 999999999): number => {
	return Math.floor(Math.random() * len)
}
export default randomId
