export function buildArray(
  str: string,
  separator: string,
  json_array: string
): string {
  const converted = convert_separator(separator)
  if (separator !== 'space') {
    // 只要不等于空格就替换掉空格
    str = str.replace(' ', '')
  }
  const splited: string[] = str.split(converted)
  if (json_array !== '') {
    const dest: string[] = JSON.parse(json_array)
    dest.push(...splited)
    return JSON.stringify(dest)
  }
  if (str === '') {
    // 如果里面没有值的话, 继续走会输出 '[""]' 这样里面有个空内容 不好判断
    return '[]'
  }
  return JSON.stringify(splited)
}

function convert_separator(separator: string): string {
  switch (separator) {
    case 'newline':
      return '\n'
    case 'space':
      return ' '
    default:
      return separator
  }
}
