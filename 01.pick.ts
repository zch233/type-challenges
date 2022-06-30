// https://www.typescriptlang.org/play?#code/PQKgUABBAsELQUHnagG5wgBQJYGMDWl5yFH4BGAnhAIIB2ALgBYD21FAYgK4QAUAAgIZ0AZuwCUEAMSAA70CqyhPbUMzCSXYYANrTgZq+fOP0RAGRmA7t11QAfBEBE1oDn49ACUIgTlNA2-GBv-0CL0YApYwPOJgIAYzJFQAFQBlCEBQxUA7f0AQtwgAA0xcAB5ggBoIAGlzeMAYf8AxeUBYOUB75UBTuUB-eUAKV0Bg7QCofBAQQDm5QG8fQGj1BOD4iEBaOUBIBMBLo0AvxUA9HUByAwTMvMAQ80ACBMAEI0AAOUAqOUAG0xj2xrqIfEBo+UAgzUAsf8D409oAZ3xtWgBTACdBPiwbiGDGABNGCABvfChaDC0NQ3ABcEHOtDu2gA5n8IO8bucsFCAA4A5hgiFQ6iwqBQLCMAC2KOBt3eYJIjEYwIE+AAvoFaGQUS83p80HcbgA3DA3ADuEAAvBAALJkJI4VIfRgZADkAKBN1lEAAPhBZQTiaSbu9ZeZAgTqBCILRpWC2YwOdzeQLhb88XiFcCwbKAMI06gQO5UwmytJw-FEkk3Mlgx5qc43f1QBlQU7xQKWQAU6hAAOKA+jsEgQQBQcoBT80A0O6Hei0Wgo84g4DAC5YegAOgAVuc64w7tDgNBgAAvehwV0AOTAIGAYFHoAgAH0p9OZ9OIIADeRigGO5QCAHpPZxuJxBh6OmSzReLsJL0llLHaGWOQOvNzOIIBpW0Aq9GVXbXm9T7cjjDE1u0E3Ml7fBAACiACO7B8GoGRAQAHiyWC-nSECCN6hLqjwe43HAtYQcCOKIsA7AAhGsq7v+EBYHwkbnEKEAANr4DBcG0MkoHgWoLGwTc8E6gAjBkYoSlKnxyk6SrmOJ0bAZx8EsWBEEcUxOoAEz8YeKQWiJgLAsqaoakG2q6uJ5iSVWEDoeccA3NJmj3N6dz4AJR5CTK6qiTp6qasGZLubK2hchBGCGf6AC6o7XPcjzPK80o-PgomYpCML4AiSKoui1AJdiuLkfpIY6hSVIemAF7hQ8TwvIxXFkjxsX-FpoLgolOLFWFdAReVUmKe8Sm1Sa9WZUlgZanl5IQJS1I3LSF6Xq+b4QIA0HKLIAptazTeH5gKA+CWIAYEqANVyi6AMeRgAq3sWpblpW1ZIvWTYtm2HbAAI5x8vc3a9gOW0QIWx2nWWFZVjW13Nq27aduc1KEYoRofYAL2aAFiaJg-ed-1XY2QN3T2faDjuYBAA

/*
  4 - 实现 Pick
  -------
  by Anthony Fu (@antfu) #简单 #union #built-in
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  实现 TS 内置的 `Pick<T, K>`，但不可以使用它。
  
  **从类型 `T` 中选择出属性 `K`，构造成一个新的类型**。
  
  例如：
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```
  
  > 在 Github 上查看：https://tsch.js.org/4/zh-CN
*/


/* _____________ 你的代码 _____________ */

type MyPick<T, K extends keyof T> = {[I in K]: T[I]}

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/4/answer/zh-CN
  > 查看解答：https://tsch.js.org/4/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

