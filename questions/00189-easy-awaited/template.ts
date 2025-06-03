type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T extends { then: (onfulfilled: (value: infer V) => any) => any } ? MyAwaited<V> : T;
