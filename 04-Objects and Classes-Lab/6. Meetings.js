function schedule(array) {
  let meetings = {};
  for (let line of array) {
    let [day, name] = line.split(" ");
    if (meetings.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (let key in meetings)
  
    console.log(`${key} -> ${meetings[key]}`);
  
}
schedule(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)
