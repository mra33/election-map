
var makePolitician=function(name, partyColor) {
var politician= {};
politician.name=name;
politician.electionResults= null;
politician.totalVotes=0;
 politician.partyColor=partyColor;
politician.votesTallyTotal=function() {
  
  this.totalVotes=0;
  for (var i=0; i < this.electionResults.length; i++)
    {this.totalVotes=this.totalVotes + this.electionResults[i];
    }
  
}
return politician;
};
var stacy= makePolitician("Stacy Chan" ,[132, 17, 11]);
var judy = makePolitician ("Judy Hu", [245, 141, 136]);

stacy.electionResults=[5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,5,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
judy.electionResults= [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
stacy.electionResults[9]=1;
judy.electionResults[9]=28;
stacy.electionResults[4]=17;
judy.electionResults[4]=38;
stacy.electionResults[43]=11;
judy.electionResults[43]=27;
var setStateResults= function (state) {
  theStates[state].winner = null;
  if (stacy.electionResults[state] > judy.electionResults[state]) 
  {theStates[state].winner = stacy;}
  else if 
 (judy.electionResults[state] > stacy.electionResults[state]){theStates[state].winner = judy;}
  
  var stateWinner= theStates[state].winner;
  
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}
  var stateInfoTable=document.getElementById ('stateResults');
  var header=stateInfoTable.children[0];
  var body=stateInfoTable.children[1];
  var stateName=header.children[0].children[0];
  var abbrev =header.children[0].children[1];
  var candidate1name=body.children[0].children[0];
  var candidate2name=body.children[1].children[0];
  var candidate1results=body.children[0].children[1];
  var candidate2results=body.children[1].children[1];
  var winnersName=body.children[2].children[1];
  stateName.innerText=theStates[state].nameFull;
  abbrev.innerText="(" +theStates[state].nameAbbrev + ")";
  candidate1name.innerText=stacy.name;
  candidate2name.innerText=judy.name;
  candidate1results.innerText=stacy.electionResults[state];
  candidate2results.innerText=judy.electionResults[state];
 if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
  };
  

stacy.votesTallyTotal();  
judy.votesTallyTotal();
var winner ="???";
  if (stacy.totalVotes > judy.totalVotes)
  {winner = stacy.name;}
     else if (stacy.totalVotes < judy.totalVotes)
      {winner = judy.name;}
  console.log("AND THE WINNER IS..." + winner + "!!!");
console.log("Judy's color is: " + judy.partyColor);
console.log("Stacy's color is: " + stacy.partyColor);
var countryInfoTable=document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];
row.children[0].innerText=stacy.name;
row.children[1].innerText=stacy.totalVotes;
row.children[2].innerText=judy.name;
row.children[3].innerText=judy.totalVotes;
row.children[5].innerText=winner;
