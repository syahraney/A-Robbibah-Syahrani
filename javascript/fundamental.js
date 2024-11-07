function aboutSeventeen() {
    let bandName = "Seventeen";
    let numberOfMembers = 13;
    let bandInfo = {
      origin: "South Korea",
      debutYear: 2015,
      fandomName: "Carat"
    };
  
    let message = `Band Name: ${bandName}\nNumber of Members: ${numberOfMembers}\nOrigin: ${bandInfo.origin}\nDebut Year: ${bandInfo.debutYear}\nFandom: ${bandInfo.fandomName}`;
    
    return message;
  }
  
  alert(aboutSeventeen());
  
  console.log(aboutSeventeen());
  