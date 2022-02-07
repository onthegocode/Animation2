const logo = document.querySelectorAll('#logo path');


for(let i = 0; i<logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

var timer = {
    interval: null,
    seconds: 10,

    start: function () {
        var self = this,
            el = document.getElementById('time-to-update');

        el.innerText = this.seconds; // Output initial value

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) 
                window.location.reload();

            el.innerText = self.seconds;
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}

timer.start();