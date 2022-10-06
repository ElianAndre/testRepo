export default function wrapGifts(gifts: string[]) {
  // ¡No olvides compartir tu solución en redes!

  const output: string[] = []

  gifts.forEach((e) => {
    output.push(`*${e}*`)
  })
output.push()
  console.log(output[output.length - 1])

  
  return []
}

wrapGifts(['📷', '⚽️'])
wrapGifts(['🏈🎸', '🎮🧸'])
