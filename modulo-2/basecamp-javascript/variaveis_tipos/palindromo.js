function verificaPalindromo(string) {
  if (!string) return;
  console.log(string === string.split("").reverse().join(""));
}
verificaPalindromo("sas");
