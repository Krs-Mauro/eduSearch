const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (character) {
    const randomHex = (Math.random() * 16) | 0
    const variantBits = character === 'x' ? randomHex : (randomHex & 0x3) | 0x8
    return variantBits.toString(16)
  })
}

export default generateUUID
