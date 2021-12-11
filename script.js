'use strict';
const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];
for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].trim() != '') {
		employers[i] = employers[i].toLowerCase().trim();
		employers[i] = employers[i][0].toUpperCase() + employers[i].slice(1);
		command.push(employers[i]);
	}
}

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = function(own) {
	own = own || 0;
	let everyCash = Array.prototype.slice.call(arguments);
	let total = own;
	for (let i = 0; i < everyCash[1].length; i++) {
		total += +everyCash[1][i];
	}
	return total;
}

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель:  ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log(`Технологии которые мы изучим: 
${null, sumTech}`);
}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);
