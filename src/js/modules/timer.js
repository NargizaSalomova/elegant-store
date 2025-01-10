function timer(){
	// const endDay = new Date();
	// endDay.setDate(endDay.getDate() + 3) // three days from the current date

	const endDate = new Date('Jan 17, 2025, 23:59:59');

	const daysElement = document.querySelector('#days');
	const minutesElement = document.querySelector('#minutes');
	const hoursElement = document.querySelector('#hours');
	const secondsElement = document.querySelector('#seconds');

	let timerInterval;

	function updateTimer() {
		const now = new Date();
		const timeDifference = endDate - now;

		if (timeDifference <= 0) {
			daysElement.innerText = '0';
			hoursElement.innerText = '0';
			minutesElement.innerText = '0';
			secondsElement.innerText = '0';
			clearInterval(timerInterval);
			return;
		}

		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor(
			(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
		);
		const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

		daysElement.innerText = days < 10 ? '0' + days : days;
		hoursElement.innerText = hours < 10 ? '0' + hours : hours;
		minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
		secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
	}

	updateTimer(); // Start the timer when the page loads
	timerInterval = setInterval(updateTimer, 1000); // Update the timer every second


}

export default timer;
