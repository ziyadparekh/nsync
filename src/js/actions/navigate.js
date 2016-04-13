import { browserHistory } from 'react-router';

export function routeTo(path) {
  return browserHistory.push(path);
} 