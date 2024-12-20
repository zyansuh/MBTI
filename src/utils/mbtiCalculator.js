export const calculateMBTI = (answers) => {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  answers.forEach(({ type, answer }) => {
    const [option1, option2] = type.split("/");
    if (answer === option1) scores[option1]++;
    else scores[option2]++;
  });
  return `${scores.E >= scores.I ? "E" : "I"}${scores.S >= scores.N ? "S" : "N"}${scores.T >= scores.F ? "T" : "F"}${scores.J >= scores.P ? "J" : "P"}`;
};
