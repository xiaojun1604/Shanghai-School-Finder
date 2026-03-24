import { SCHOOL_DATA, POLICY_RULES } from './data.js';

let map;
const markers = {};

function initMap() {
    // Center of Minhang (approx. around Xinzhuang)
    map = L.map('map').setView([31.11, 121.38], 12);

    // Using Amap (Gaode) tiles which are much more reliable in China
    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        subdomains: ['1', '2', '3', '4'],
        minZoom: 3,
        maxZoom: 18
    }).addTo(map);

    // Initial center marker for Ziteng area (User's current location)
    L.circle([31.17, 121.36], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map).bindPopup('紫藤社区 (目前集体户所在地)').openPopup();

    // Ensure map is properly rendered if container size was zero at init
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
}

function renderSchools() {
    const listContainer = document.getElementById('school-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    SCHOOL_DATA.forEach((school, index) => {
        const item = document.createElement('div');
        item.className = 'school-item';

        item.innerHTML = `
            <div class="school-header">
                <div class="school-name-group">
                    <input type="checkbox" class="school-checkbox" data-index="${index}">
                    <div class="school-name">${school.name}</div>
                </div>
                <div class="tier-tag">${school.tier}梯队 | ${school.type}</div>
            </div>
            <div class="school-details">
                <p><strong>所属板块：</strong> ${school.district}</p>
                <p><strong>对应初中：</strong> ${school.middleSchool}</p>
                <p><strong>招生办电话：</strong> <span style="color: var(--secondary); font-weight: 600;">${school.contact}</span></p>
                <p><strong>优点：</strong> ${school.pros}</p>
            </div>
            <div class="housing-info">
                <p><strong>购房提示：</strong> <span class="budget-tag">${school.housing}</span></p>
            </div>
        `;

        listContainer.appendChild(item);
    });

    // Add event listeners for checkboxes
    const checkboxes = document.querySelectorAll('.school-checkbox');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', (e) => {
            const idx = e.target.getAttribute('data-index');
            const school = SCHOOL_DATA[idx];
            toggleMarker(school, e.target.checked);
        });
    });
}

function toggleMarker(school, show) {
    if (show) {
        if (!markers[school.name]) {
            const marker = L.marker(school.coord).addTo(map)
                .bindPopup(`<b>${school.name}</b><br>${school.district}<br>${school.housing}`)
                .openPopup();
            markers[school.name] = marker;

            // Pan to the marker
            map.panTo(school.coord);
        }
    } else {
        if (markers[school.name]) {
            map.removeLayer(markers[school.name]);
            delete markers[school.name];
        }
    }
}

function setupCalculator() {
    const hasProperty = document.getElementById('has-property');
    const years = document.getElementById('years');
    const result = document.getElementById('calc-result');
    if (!hasProperty || !years || !result) return;

    const update = () => {
        if (hasProperty.value === 'no') {
            result.innerText = "当前分值：第4-5类 (统筹安排)";
            result.style.color = "#d32f2f";
        } else {
            if (years.value === '3') {
                result.innerText = "当前分值：第1类 (稳入二梯队)";
                result.style.color = "#2e7d32";
            } else if (years.value === '1') {
                result.innerText = "当前分值：第2类 (较大概率进入)";
                result.style.color = "#f57c00";
            } else {
                result.innerText = "当前分值：第1-2类 (视年份热度)";
                result.style.color = "#f57c00";
            }
        }
    };

    hasProperty.addEventListener('change', update);
    years.addEventListener('change', update);
    update();
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    renderSchools();
    setupCalculator();
});
