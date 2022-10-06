//! Entrada normal: 12$ * 3 = 36$
//! Tarjeta fidelidad:
//! 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
export default function shouldBuyFidelity(times: number) {
  // ¡No olvides compartir tu solución en redes!
  const normal = 12
  const fidelity = 250
  let tf = 0
  for (let i = 1; i <= times; i++) {
    tf += 12 * 0.75 ** i
  }
  const en = normal * times
  const ef = fidelity + tf
  return ef > en ? false : true
}
console.log(

  shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
);
console.log(
  shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad

);


//shouldBuyFidelity(3) // false -> Mejor comprar tickets de un sólo uso
