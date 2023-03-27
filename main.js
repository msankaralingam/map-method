const member = [
  {
    first_name: 'sankara',
    last_name: 'lingam',
    age: 30
  },
  {
    first_name: 'maha',
    last_name: 'vishnu',
    age: 45
  },
  {
    first_name: 'John',
    last_name: 'cena',
    age: 25
  }
];
x=[];
member.map(function(sl){
	x.push(sl.last_name);
})
console.log(x);
