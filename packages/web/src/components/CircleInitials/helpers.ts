const getInitialsFromName = (name: string): string => {
  let result = name;
  const regex = /([a-zA-Z])[a-zA-Z]+/;
  while(regex.test(result)){
    result = result.replace(regex, '$1');
  }
  result = result.replace(/\s/, '');
  return result;
}

export const getInitialsFirstLastFromName = (name: string): string | null => {
  const allInitials = getInitialsFromName(name);
  if(allInitials.length === 1){
    return allInitials;
  }
  if(allInitials.length > 1){
    return `${allInitials.substr(0, 1)}${allInitials.substr(allInitials.length - 1, 1)}`;
  }
  return null;
};
