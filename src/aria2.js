import Aria2 from 'aria2';

const aria2 = new Aria2();

export const Open = () => aria2.open();
export const Close = () => aria2.close();
export const AddURI = (uri, options) => aria2.call('addUri', [uri], options);

export default aria2;
