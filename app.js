import { SCHOOL_DATA, POLICY_RULES } from './data.js';

function renderSchools() {
    const listContainer = document.getElementById('school-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    SCHOOL_DATA.forEach(school => {
        const item = document.createElement('div');
        item.className = 'school-item';

        item.innerHTML = `
            <div class="school-header">
                <div class="school-name">${school.name}</div>
                <div class="tier-tag">${school.tier}梯队</div>
            </div>
            <div class="school-details">
                <p><strong>所属板块：</strong> ${school.district}</p>
                <p><strong>对应初中：</strong> ${school.middleSchool}</p>
                <p><strong>优点：</strong> ${school.pros}</p>
            </div>
            <div class="housing-info">
                <p><strong>购房提示：</strong> <span class="budget-tag">${school.housing}</span></p>
            </div>
        `;

        listContainer.appendChild(item);
    });
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
    renderSchools();
    setupCalculator();
});
