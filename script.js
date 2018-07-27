
function myFirstApp(name, age) {
   alert("Привет, меня зовут " + name + " и это моя первая программа!");


   function showSkills() {
   	let skills = ["HTML5", "CSS3", "Photoshop"];
   	for(let i = 0; i < skills.length; i++){
       skills[i] = alert("Я владею " + skills[i]);
   	}
   }
   showSkills();
   

   function checkAge() {
   	let age = prompt("Сколько вам лет?");
   	if(age > 18) {
       alert("Ух, да вы уже старый!", "");
   	} else {
       alert("Привет, пусенька!", "");
       alert("Мне лет почти столько же, как и тебе)", "");
   	}
  }

checkAge();

function calcPow(num) {
console.log(num*num);
}
calcPow(4);
}

myFirstApp("Павел", 14);
