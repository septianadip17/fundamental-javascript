function ValidationBelanja(barangBelanja, belanja){
  if (barangBelanja < 0 || barangBelanja >= belanja.length) {
    console.log("Barang yang kamu masukkan tidak ada");
    return false
  }
  return true
}

module.exports = ValidationBelanja