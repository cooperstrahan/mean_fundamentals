users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
  

function userLanguages(users){
    var str = "";
    for (var x in users){
        str += users[x]['fname'] +" "+ users[x]['lname'] + " knows ";
        for (var i=0; i < users[x]['languages'].length-1; i++){
            str += users[x]['languages'][i]+", ";
        }
        str += "and " + users[x]['languages'][i]+".\n";

        str += users[x]['fname']+" is also interested in ";
        for (var j in users[x]['interests']){
            for (var y=0; y <users[x]['interests'][j].length; y++){
                if (j == 'television' || j == 'mysteries' || j == 'home'){
                    continue;
                }
                str += users[x]['interests'][j][y] + ", ";
            }
        }
         str += "and " + users[x]['interests'][j][y-1]+".\n";
    }
    console.log(str);
    
}



userLanguages(users);