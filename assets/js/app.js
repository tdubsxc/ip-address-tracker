import L from "leaflet";

const ipAddress = document.querySelector("#ip");
const location = document.querySelector("#location");
const timezone = document.querySelector("#timezone");
const isp = document.querySelector("#isp");
const form = document.querySelector("#form");
const input = document.querySelector("#search");
const map = L.map("map").setView([37.42, -122.08], 12);
const accessToken = "pk.eyJ1Ijoicmlja3lzbW9rZXMwNSIsImEiOiJjbDgzY3l3cW0wMGZpM3dxcjRsOHZucnVyIn0.nK-N9vS58g8PKYr30HdmDg";
const geoApiKey = "8d75255d935649e0b1a849b65730dd5c";
const geoUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${geoApiKey}`;

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
  L.marker([37.42, -122.08]).addTo(map);
  mountMap();
});

form.addEventListener("submit", handleSubmit);

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

async function handleSubmit(e) {
  e.preventDefault();

  try {
    const res = await fetch(`${geoUrl}&ip=${input.value}`);
    const data = await res.json();

    if (data.code === 422) {
      throw new Error(data.messages);
    }

    const ipInfo = generateIpInfo(data);

    L.marker([ipInfo.lat, ipInfo.lng]).addTo(map);
    map.setView([ipInfo.lat, ipInfo.lng], 12);

    displayIpInfo(ipInfo);
  } catch (error) {
    alert("Invalid entry. Please enter a valid IP address. An example: 8.8.8.8");
  } finally {
    input.value = "";
  }
}

function generateIpInfo(data) {
  const ipInfo = {
    ip: data.ip,
    city: data.city,
    state: data.state_prov,
    tz: data.time_zone.name.split("/")[1].replace("_", " "),
    isp: data.isp.split("(")[0],
    lat: data.latitude,
    lng: data.longitude,
    zip: data.zipcode.split("-")[0],
  };

  return ipInfo;
}

function displayIpInfo(ipInfo) {
  ipAddress.textContent = ipInfo.ip;
  location.textContent = `${ipInfo.city}, ${ipInfo.state} ${ipInfo.zip}`;
  timezone.textContent = ipInfo.tz;
  isp.textContent = ipInfo.isp;
}
