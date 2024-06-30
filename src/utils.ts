export const sum = (obj: { a: number; b: number }) => {
  // Vòng lặp 0 đến 9
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }
  return obj.a + obj.b
}
