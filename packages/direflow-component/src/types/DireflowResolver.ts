import { type } from 'os';

type DireflowResolver = {
  _resolve?: Function,
  callback?: (element: HTMLElement) => void
};

export default DireflowResolver;
