var eventDetails = document.querySelector('.sc2__eventTable');
var speakers = document.querySelector('.sc4__speakers');
var sponsors = document.querySelector('.sc5');
var pastEvents = document.querySelector('.sc6');
var contact = document.querySelector('.sc7');

function nav(y) {

    if (y == 1) {
        window.scrollTo(0, eventDetails.getBoundingClientRect().top);
    } else

    if (y == 2) {
        window.scrollTo(0, speakers.getBoundingClientRect().top);
    }

    if (y == 3) {
        window.scrollTo(0, sponsors.getBoundingClientRect().top);
    }

    if (y == 4) {
        window.scrollTo(0, pastEvents.getBoundingClientRect().top);
    }

    if (y == 5) {
        window.scrollTo(0, contact.getBoundingClientRect().top);
    }

    if (y == 6) {
        window.scrollTo(0, 0);
    }
}