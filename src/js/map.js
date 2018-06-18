function initMap() {
  var uluru = {lat: 39.0864674, lng: -77.4834266};
  var map = new google.maps.Map(document.getElementById('sc7__mapWrapper__map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

window.onload = function() {
  var viewMapButton = document.
    querySelector('.sc7__feedback__location__mapButton__button');
  var showFeedbackButton = document.getElementById('sc7__mapWrapper__feedbackButton');
  var feedbackWindow = document.querySelector('.sc7__feedback');
  var map_ = document.getElementById('sc7__mapWrapper__map');

  viewMapButton.addEventListener('click', function() {
    feedbackWindow.style.display = 'none';
    map_.style.opacity = 1;
    showFeedbackButton.style.display = 'block';
  });

  showFeedbackButton.addEventListener('click', function() {
    feedbackWindow.style.display = 'flex';
    map_.style.opacity = 0.4;
    showFeedbackButton.style.display = 'none';
  });
};