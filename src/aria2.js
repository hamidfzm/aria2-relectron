import Aria2 from 'aria2';

const aria2 = new Aria2();

export const Open = () => aria2.open();
export const Close = () => aria2.close();

export default aria2;
