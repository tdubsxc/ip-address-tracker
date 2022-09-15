import L from "leaflet";

const map = L.map("map").setView([37.42, -122.08], 12);
const accessToken = "pk.eyJ1Ijoicmlja3lzbW9rZXMwNSIsImEiOiJjbDgzY3l3cW0wMGZpM3dxcjRsOHZucnVyIn0.nK-N9vS58g8PKYr30HdmDg";

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
  L.marker([37.42, -122.08]).addTo(map);
  mountMap();
});

function mountMap() {
  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken,
  }).addTo(map);
}
