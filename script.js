document.addEventListener("DOMContentLoaded", () => {
    const chime = document.getElementById("chime");

    function setReminder() {
        const day = document.getElementById("day").value;
        const time = document.getElementById("time").value;
        const activity = document.getElementById("activity").value;

        if (!time) {
            alert("Please select a valid time.");
            return;
        }

        const reminderTime = new Date();
        const [hours, minutes] = time.split(':');
        reminderTime.setHours(hours);
        reminderTime.setMinutes(minutes);
        reminderTime.setSeconds(0);

        const now = new Date();
        let timeToAlarm = reminderTime - now;

        if (timeToAlarm < 0) {
            timeToAlarm += 86400000; // Add 24 hours if the time is in the past
        }

        setTimeout(() => {
            chime.play();
            alert(`Time for: ${activity}`);
        }, timeToAlarm);

        addReminderToList(day, time, activity);
    }

    function addReminderToList(day, time, activity) {
        const reminderList = document.getElementById("reminderList");
        const reminderItem = document.createElement("li");
        reminderItem.innerText = `${day} - ${time} - ${activity}`;
        reminderList.appendChild(reminderItem);
    }

    window.setReminder = setReminder;
});
