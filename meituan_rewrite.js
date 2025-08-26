function rewrite(url) {
  // 定义正则表达式，与Shadowrocket的规则相同
  const regex = /^http(s)?:\/\/(.*)\.d\.meituan\.net/;

  // 尝试匹配URL
  const match = url.match(regex);

  // 如果匹配成功
  if (match) {
    // match[1] 是第一个捕获组，即 's' 或 undefined
    // match[2] 是第二个捕获组，即 .d.meituan.net 之前的部分
    const protocol = match[1] ? 'https' : 'http'; // 根据捕获组1确定协议
    const subdomain = match[2]; // 获取捕获组2的子域名部分

    // 构建新的URL
    return `${protocol}://${subdomain}.dreport.meituan.net`;
  }

  // 如果不匹配，返回 null，表示不进行重写
  return null;
}
