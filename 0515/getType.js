export default function getType(data){
  return Object.prototype.toString.call(data).slice(0);
}