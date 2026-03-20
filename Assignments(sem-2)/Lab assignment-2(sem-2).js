const API_KEY = "3c7668f51aec9afb542d0985210869f6";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const errorMsg = document.getElementById("errorMsg");
const weatherCard = document.getElementById("weatherCard");
const clearBtn = document.getElementById("clearBtn");
const historyList = document.getElementById("historyList");


searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  console.group("🔍 Search Triggered");
  console.log("City entered:", city);
  console.log("Timestamp:", new Date().toLocaleTimeString());
  console.groupEnd();

  if (!city) {
    console.warn("⚠️ Empty input - no city entered");
    return;
  }

  getWeather(city);
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("weatherHistory");
  console.log("🗑️ History cleared from localStorage");
  renderHistory();
});

async function getWeather(city) {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  console.group(`📡 API Call for: "${city}"`);
  console.log("Request URL:", url);

  try {
    const response = await fetch(url);

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`City not found (Status: ${response.status})`);
    }

    const data = await response.json(); // parse JSON
    console.log("✅ Data received:", data);
    console.groupEnd();

    showWeather(data);
    saveToHistory(city);
    hideError();

  } catch (error) {
    console.error("❌ Error fetching weather:", error.message);
    console.warn("Make sure city name is correct and API key is valid");
    console.groupEnd();

    showError();
    hideWeatherCard();
  }
}


function showWeather(data) {
  document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
  document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
  document.getElementById("condition").innerText = data.weather[0].description;
  document.getElementById("humidity").innerText = `${data.main.humidity}%`;
  document.getElementById("wind").innerText = `${data.wind.speed} m/s`;
  document.getElementById("feelsLike").innerText = `${Math.round(data.main.feels_like)}°C`;

  weatherCard.classList.remove("hidden");
  errorMsg.classList.add("hidden");

  console.info("🌡️ Weather card updated in DOM");
}

function showError() {
  errorMsg.classList.remove("hidden");
}

function hideError() {
  errorMsg.classList.add("hidden");
}

function hideWeatherCard() {
  weatherCard.classList.add("hidden");
}

function saveToHistory(city) {
  const cityFormatted = city.trim().toLowerCase();

  let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

  if (!history.includes(cityFormatted)) {
    history.unshift(cityFormatted); // add to front
    if (history.length > 8) history.pop(); // max 8 entries

    localStorage.setItem("weatherHistory", JSON.stringify(history));
    console.log("💾 Saved to localStorage:", history);
  } else {
    console.log("ℹ️ City already in history, not duplicating");
  }

  renderHistory();
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

  historyList.innerHTML = ""; // clear old tags

  if (history.length === 0) {
    historyList.innerHTML = `<span class="history-empty">No recent searches yet</span>`;
    return;
  }

  history.forEach((city) => {
    const tag = document.createElement("span"); // create element
    tag.className = "history-tag";
    tag.innerText = city.charAt(0).toUpperCase() + city.slice(1); // capitalize

    // clicking a tag re-searches that city
    tag.addEventListener("click", () => {
      cityInput.value = city;
      getWeather(city);
    });

    historyList.appendChild(tag); // add to DOM
  });
}

window.addEventListener("load", () => {
  console.log("📦 Page loaded - checking localStorage for history...");
  const saved = localStorage.getItem("weatherHistory");
  console.log("Stored history:", saved ? JSON.parse(saved) : "none");
  renderHistory();
});