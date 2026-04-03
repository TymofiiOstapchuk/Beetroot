const center = [46.47883790244089, 30.72356452654997];

const map = L.map("map");
map.setView(center, 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//L.marker(center).addTo(map).bindPopup("Hello Leaflet");
// .openPopup();

const circle = L.circle(center, {
  radius: 600,
  color: "red",
  fillColor: "blue",
  fillOpacity: 0.4,
});
circle.addTo(map);
circle.bindPopup("Hello leaflet");
