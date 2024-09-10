
const cropData = {
    "tomato": {
        weather: "Warm climate, 18-29°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Worldwide"
    },
    "carrot": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Deep, loose, well-drained soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide"
    },
    "lettuce": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 6-8 weeks after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "potato": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring, Harvest: Late Summer to Fall",
        seedingMethod: "Seed potatoes",
        soilType: "Well-drained, loose soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide"
    },
    "cucumber": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer",
        regions: "Temperate to tropical regions"
    },
    "spinach": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 6-8 weeks after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "broccoli": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "bell pepper": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer to Fall",
        regions: "Temperate to tropical regions"
    },
    "onion": {
        weather: "Cool to moderate climate, 15-25°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: Summer or Spring",
        seedingMethod: "Seeds, sets, or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Summer or Fall to Spring",
        regions: "Temperate regions worldwide"
    },
    "eggplant": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer to Fall",
        regions: "Temperate to tropical regions"
    },
    "cauliflower": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "cabbage": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 3-4 months after planting",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "green beans": {
        weather: "Warm climate, 18-25°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Summer",
        regions: "Temperate to tropical regions"
    },
    "peas": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "radish": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 3-4 weeks after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, loose soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "kale": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "zucchini": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer",
        regions: "Temperate to subtropical regions"
    },
    "sweet corn": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer",
        regions: "Temperate to subtropical regions"
    },
    "garlic": {
        weather: "Cool to moderate climate, 10-20°C",
        seedingHarvest: "Planting: Fall, Harvest: Summer",
        seedingMethod: "Cloves",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Fall to Summer",
        regions: "Temperate regions worldwide"
    },
    "celery": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Moist, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide"
    },
    "beets": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, loose soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "asparagus": {
        weather: "Moderate climate, 15-25°C",
        seedingHarvest: "Planting: Spring, Harvest: Spring (2-3 years after planting)",
        seedingMethod: "Crowns or seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring",
        regions: "Temperate regions worldwide"
    },
    "brussels sprouts": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall to Winter",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Winter",
        regions: "Temperate regions worldwide"
    },
    "turnip": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, loose soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "swiss chard": {
        weather: "Cool to moderate climate, 10-25°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 4-6 weeks after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide"
    },
    "okra": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer",
        regions: "Subtropical to tropical regions"
    },
    "artichoke": {
        weather: "Cool to moderate climate, 15-25°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Mediterranean and temperate regions"
    },
    "leek": {
        weather: "Cool to moderate climate, 10-20°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall to Winter",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Winter",
        regions: "Temperate regions worldwide"
    },
    "parsnip": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall to Winter",
        seedingMethod: "Seeds",
        soilType: "Deep, loose, well-drained soil",
        growingSeason: "Spring to Winter",
        regions: "Temperate regions worldwide"
    },
    "rutabaga": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Summer, Harvest: Fall to Winter",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer to Winter",
        regions: "Temperate regions worldwide"
    },
    "kohlrabi": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "endive": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "fennel": {
        weather: "Cool to moderate climate, 15-25°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Mediterranean and temperate regions"
    },
    "collard greens": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "watercress": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 4-6 weeks after planting",
        seedingMethod: "Seeds or cuttings",
        soilType: "Moist, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide"
    },
    "taro": {
        weather: "Tropical to subtropical climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: 6-8 months after planting",
        seedingMethod: "Corms",
        soilType: "Moist, fertile soil",
        growingSeason: "Year-round in tropical climates",
        regions: "Tropical and subtropical regions"
    },
    "yam": {
        weather: "Tropical to subtropical climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: 8-10 months after planting",
        seedingMethod: "Tuber pieces",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Year-round in tropical climates",
        regions: "Tropical and subtropical regions"
    },
    "jicama": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: 5-9 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, sandy soil",
        growingSeason: "Spring to Fall",
        regions: "Tropical and subtropical regions"
    },
    "celeriac": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall",
        seedingMethod: "Seeds",
        soilType: "Moist, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide"
    },
    "apple": {
        weather: "Cool climate, 10-25°C",
        seedingHarvest: "Planting: Spring, Harvest: Late Summer to Fall",
        seedingMethod: "Grafting or seedlings",
        soilType: "Well-drained loamy soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide"
    },
    "banana": {
        weather: "Tropical climate, 20-35°C",
        seedingHarvest: "Planting: Year-round, Harvest: 9-12 months after planting",
        seedingMethod: "Suckers or tissue culture",
        soilType: "Rich, well-drained soil",
        growingSeason: "Year-round in tropical climates",
        regions: "Tropical and subtropical regions"
    },
    "orange": {
        weather: "Warm climate, 15-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Winter",
        seedingMethod: "Grafting",
        soilType: "Well-drained, slightly acidic soil",
        growingSeason: "Year-round",
        regions: "Mediterranean, subtropical regions"
    },
    "strawberry": {
        weather: "Temperate climate, 15-25°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: Spring to Summer",
        seedingMethod: "Runners or seeds",
        soilType: "Well-drained, rich soil",
        growingSeason: "Spring to Summer",
        regions: "Temperate regions worldwide"
    },
    "grape": {
        weather: "Mediterranean climate, 15-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Late Summer to Fall",
        seedingMethod: "Cuttings or grafting",
        soilType: "Well-drained, slightly alkaline soil",
        growingSeason: "Spring to Fall",
        regions: "Mediterranean, temperate regions"
    },
    "mango": {
        weather: "Tropical to subtropical, 24-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Grafting",
        soilType: "Well-drained, rich soil",
        growingSeason: "Year-round in tropical climates",
        regions: "Tropical and subtropical regions"
    },
    "pineapple": {
        weather: "Tropical climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: 18-24 months after planting",
        seedingMethod: "Crown or slips",
        soilType: "Well-drained, sandy loam",
        growingSeason: "Year-round in tropical climates",
        regions: "Tropical regions"
    },
    "watermelon": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, sandy loam",
        growingSeason: "Summer",
        regions: "Warm temperate to tropical regions"
    },
    "peach": {
        weather: "Temperate climate, 15-25°C",
        seedingHarvest: "Planting: Winter, Harvest: Summer",
        seedingMethod: "Grafting",
        soilType: "Well-drained, sandy loam",
        growingSeason: "Spring to Summer",
        regions: "Temperate regions"
    },
    "kiwi": {
        weather: "Temperate climate, 15-20°C",
        seedingHarvest: "Planting: Fall or Spring, Harvest: Fall",
        seedingMethod: "Grafting or cuttings",
        soilType: "Well-drained, slightly acidic soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions"
    },
    "cherry": {
        weather: "Cool climate, 15-25°C",
        seedingHarvest: "Planting: Winter, Harvest: Early Summer",
        seedingMethod: "Grafting",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Summer",
        regions: "Temperate regions"
    },
    "avocado": {
        weather: "Subtropical climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Year-round",
        seedingMethod: "Grafting",
        soilType: "Well-drained, sandy loam",
        growingSeason: "Year-round",
        regions: "Subtropical regions"
    },
    "papaya": {
        weather: "Tropical climate, 20-30°C",
        seedingHarvest: "Planting: Year-round, Harvest: 9-12 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, rich soil",
        growingSeason: "Year-round in tropical climates",
        regions: "Tropical and subtropical regions"
    },
    "plum": {
        weather: "Temperate climate, 15-25°C",
        seedingHarvest: "Planting: Winter, Harvest: Summer",
        seedingMethod: "Grafting",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Summer",
        regions: "Temperate regions"
    },
    "lemon": {
        weather: "Mediterranean climate, 15-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Year-round",
        seedingMethod: "Grafting",
        soilType: "Well-drained, slightly acidic soil",
        growingSeason: "Year-round",
        regions: "Mediterranean, subtropical regions"
    },
    "blackberry": {
        weather: "Temperate climate, 15-25°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: Summer",
        seedingMethod: "Cuttings or root divisions",
        soilType: "Well-drained, rich soil",
        growingSeason: "Spring to Summer",
        regions: "Temperate regions"
    },
    "fig": {
        weather: "Mediterranean climate, 15-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Cuttings",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Mediterranean, warm temperate regions"
    },
    "guava": {
        weather: "Tropical to subtropical, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Year-round",
        seedingMethod: "Seeds or grafting",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Year-round in tropical climates",
        regions: "Tropical and subtropical regions"
    },
    "pomegranate": {
        weather: "Mediterranean climate, 15-35°C",
        seedingHarvest: "Planting: Winter, Harvest: Fall",
        seedingMethod: "Cuttings or air layering",
        soilType: "Well-drained, slightly alkaline soil",
        growingSeason: "Spring to Fall",
        regions: "Mediterranean, subtropical regions"
    },
    "raspberry": {
        weather: "Cool climate, 15-25°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: Summer",
        seedingMethod: "Cane cuttings or root divisions",
        soilType: "Well-drained, rich soil",
        growingSeason: "Spring to Summer",
        regions: "Temperate regions"
    },
    "apricot": {
        weather: "Mediterranean climate, 15-30°C",
        seedingHarvest: "Planting: Winter, Harvest: Early Summer",
        seedingMethod: "Grafting",
        soilType: "Well-drained, slightly alkaline soil",
        growingSeason: "Spring to Summer",
        regions: "Mediterranean, temperate regions"
    },
    "coconut": {
        weather: "Tropical climate, 25-35°C",
        seedingHarvest: "Planting: Year-round, Harvest: 6-10 years after planting",
        seedingMethod: "Seed (coconut)",
        soilType: "Well-drained, sandy soil",
        growingSeason: "Year-round",
        regions: "Tropical coastal regions"
    },
    "dragonfruit": {
        weather: "Tropical to subtropical, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Cuttings",
        soilType: "Well-drained, slightly acidic soil",
        growingSeason: "Spring to Fall",
        regions: "Tropical and subtropical regions"
    },
    "lychee": {
        weather: "Subtropical climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Air layering or grafting",
        soilType: "Well-drained, acidic soil",
        growingSeason: "Spring to Summer",
        regions: "Subtropical regions"
    },
    "passionfruit": {
        weather: "Tropical to subtropical, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall to Winter",
        seedingMethod: "Seeds or cuttings",
        soilType: "Well-drained, rich soil",
        growingSeason: "Year-round in tropical climates",
        regions: "Tropical and subtropical regions"
    },
    "persimmon": {
        weather: "Temperate to subtropical, 15-30°C",
        seedingHarvest: "Planting: Winter, Harvest: Fall",
        seedingMethod: "Grafting",
        soilType: "Well-drained, loamy soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate to subtropical regions"
    },
    "blueberry": {
        weather: "Cool climate, 15-25°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: Summer",
        seedingMethod: "Cuttings or seedlings",
        soilType: "Well-drained, acidic soil",
        growingSeason: "Spring to Summer",
        regions: "Temperate regions"
    },
    "cranberry": {
        weather: "Cool climate, 15-25°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall",
        seedingMethod: "Cuttings or seedlings",
        soilType: "Acidic, peaty soil",
        growingSeason: "Spring to Fall",
        regions: "Cool temperate regions"
    },
    "durian": {
        weather: "Tropical climate, 25-35°C",
        seedingHarvest: "Planting: Rainy season, Harvest: 4-5 years after planting",
        seedingMethod: "Seeds or grafting",
        soilType: "Well-drained, rich soil",
        growingSeason: "Year-round",
        regions: "Southeast Asia"
    },
    "grapefruit": {
        weather: "Subtropical climate, 15-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Winter",
        seedingMethod: "Grafting",
        soilType: "Well-drained, slightly acidic soil",
        growingSeason: "Year-round",
        regions: "Subtropical regions"
    },
    "kiwifruit": {
        weather: "Temperate climate, 15-20°C",
        seedingHarvest: "Planting: Fall or Spring, Harvest: Fall",
        seedingMethod: "Grafting or cuttings",
        soilType: "Well-drained, slightly acidic soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions"
    },
    "lime": {
        weather: "Tropical to subtropical, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Year-round",
        seedingMethod: "Grafting",
        soilType: "Well-drained, slightly acidic soil",
        growingSeason: "Year-round",
        regions: "Tropical and subtropical regions"
    },
    "longan": {
        weather: "Tropical to subtropical, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Air layering or grafting",
        soilType: "Well-drained, slightly acidic soil",
        growingSeason: "Spring to Summer",
        regions: "Tropical and subtropical regions"
    },
    "loquat": {
        weather: "Subtropical climate, 15-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Spring",
        seedingMethod: "Seeds or grafting",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Year-round",
        regions: "Subtropical regions"
    },
    "mandarin": {
        weather: "Subtropical climate, 15-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Winter",
        seedingMethod: "Grafting",
        soilType: "Well-drained, slightly acidic soil",
        growingSeason: "Year-round",
        regions: "Subtropical regions"
    },
    "mangosteen": {
        weather: "Tropical climate, 25-35°C",
        seedingHarvest: "Planting: Rainy season, Harvest: 10-20 years after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, rich soil",
        growingSeason: "Year-round",
        regions: "Tropical regions"
    },
    "mulberry": {
        weather: "Temperate to subtropical, 15-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Cuttings or grafting",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Summer",
        regions: "Temperate to subtropical regions"
    },
    "nectarine": {
        weather: "Temperate climate, 15-25°C",
        seedingHarvest: "Planting: Winter, Harvest: Summer",
        seedingMethod: "Grafting",
        soilType: "Well-drained, sandy loam",
        growingSeason: "Spring to Summer",
        regions: "Temperate regions"
    },
    "olive": {
        weather: "Mediterranean climate, 15-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall",
        seedingMethod: "Cuttings or grafting",
        soilType: "Well-drained, slightly alkaline soil",
        growingSeason: "Year-round",
        regions: "Mediterranean regions"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const cropSearch = document.getElementById('crop-search');
    const resultSection = document.getElementById('result-section');

    searchBtn.addEventListener('click', searchCrop);
    cropSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchCrop();
        }
    });

    function searchCrop() {
        const cropName = cropSearch.value.toLowerCase().trim();
        if (cropData[cropName]) {
            displayCropInfo(cropName, cropData[cropName]);
        } else {
            displayError();
        }
    }

    function displayCropInfo(cropName, info) {
        resultSection.innerHTML = `
            <h2>${cropName.charAt(0).toUpperCase() + cropName.slice(1)}</h2>
            <p><strong>Weather Conditions:</strong> ${info.weather}</p>
            <p><strong>Seeding and Harvest Times:</strong> ${info.seedingHarvest}</p>
            <p><strong>Seeding Method:</strong> ${info.seedingMethod}</p>
            <p><strong>Soil Type:</strong> ${info.soilType}</p>
            <p><strong>Growing Season:</strong> ${info.growingSeason}</p>
            <p><strong>Major Regions:</strong> ${info.regions}</p>
        `;
    }

    function displayError() {
        resultSection.innerHTML = '<p class="error">Crop not found. Please try another crop name.</p>';
    }
});