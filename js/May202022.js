function getMiddle(s)
{
  const i = Math.floor(s.length / 2);
  let result = s[i];
  if(s.length % 2 === 0 && i > 0) {
    result = s[i-1] + result; 
  }
  return result;
}