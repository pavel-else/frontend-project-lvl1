export const getRandom = (from = 0, to = 100) => Math.round(Math.random() * to) + from;

export default { getRandom };
