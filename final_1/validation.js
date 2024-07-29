function Validation(barangBelanja, totalBarang){
  if (barangBelanja < 0 || barangBelanja >= totalBarang) {
    console.log("Barang yang kamu masukkan tidak ada");
    return false
  }
  return true
}

module.exports = Validation