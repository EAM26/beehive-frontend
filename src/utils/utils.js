
export const colorOptions = ['background-orange', 'background-turquoise', 'background-green', 'background-peach', 'background-mint',];

export  const colorPicker = (myColors) =>  {
    return myColors[Math.floor(Math.random() * myColors.length)];
}