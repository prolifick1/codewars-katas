function solution(string, limit) {
  if (string.trim().length <= limit) {
    return string.trim();
  } else if (string.length != limit) {
    return `${string.slice(0, limit)}...`
  }
}

module.exports = solution;