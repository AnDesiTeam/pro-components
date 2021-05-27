const isDropdownValueType = (valueType: string) => {
  let isDropdown = false;
  if (
    (valueType.indexOf('date') > -1 && valueType.indexOf('Range') < 0) ||
    valueType === 'select'
  ) {
    isDropdown = true;
  }
  return isDropdown;
};

export default isDropdownValueType;
