let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

antrian.push("Nabila");
antrian.push("Maza", "Elsi");
antrian.pop();  // Elsi pulang
antrian.pop();  // Maza pulang

antrian.shift();  // Ray pergi
antrian.shift();  // Fiki pergi
antrian.shift();  // Fadhilla pergi
antrian.shift();  // Farah pergi

antrian.shift();  // Nabila pergi

antrian.unshift("Tomi");

console.log(antrian);  // hasil akhir antrian
