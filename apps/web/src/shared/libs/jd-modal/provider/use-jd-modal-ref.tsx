import { createContext, useContext } from 'react';
import type { JdModalRef } from '../core/jd-modal-ref';

type Ref<R = unknown, D = unknown, C = unknown> = JdModalRef<R, D, C>;

export const JdModalRefContext = createContext<Ref>({} as Ref);
export const useJdModalRef = <R, D, C>(): Ref<R, D, C> => {
  return useContext(JdModalRefContext) as Ref<R, D, C>;
};