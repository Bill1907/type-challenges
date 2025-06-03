type Includes<T extends readonly any[], U> = T extends [infer H, ...infer R] 
  ? (<G>() => G extends H ? 1 : 2) extends (<G>() => G extends U ? 1 : 2)
    ? true 
    : Includes<R, U> 
  : false
