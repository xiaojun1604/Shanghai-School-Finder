import { MEILONG_HOUSING_DATA } from './meilong_data.js';

document.addEventListener('DOMContentLoaded', () => {
    const propertyResults = document.getElementById('property-results');
    const filterSchool = document.getElementById('filter-school');
    const filterSize = document.getElementById('filter-size');
    const filterYear = document.getElementById('filter-year');

    function renderProperties(data) {
        propertyResults.innerHTML = '';

        if (data.length === 0) {
            propertyResults.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #666;">没有找到符合目前严苛条件的房源，请放宽条件重试。</div>';
            return;
        }

        data.forEach(prop => {
            const card = document.createElement('div');
            card.className = `property-card ${prop.isKing ? 'king-card' : ''}`;

            let kingBadgeHTML = prop.isKing ? '<div class="king-badge">性价比之王</div>' : '';
            let tagsHTML = prop.tags.map(tag => `<span style="background: var(--primary); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; margin-right: 5px;">${tag}</span>`).join('');

            card.innerHTML = `
                ${kingBadgeHTML}
                <div style="margin-bottom: 1rem;">${tagsHTML}</div>
                <h3 class="property-title">${prop.name}</h3>
                
                <div class="property-school">
                    <strong>对口初中：</strong> <span style="color: var(--accent); font-weight: bold;">${prop.middleSchool}</span><br>
                    <strong>对口小学：</strong> ${prop.primarySchool}
                </div>

                <div class="property-stats">
                    <div class="stat-item"><strong>板块：</strong> ${prop.plate}</div>
                    <div class="stat-item"><strong>面积：</strong> ${prop.size} ㎡</div>
                    <div class="stat-item"><strong>建成年代：</strong> ${prop.builtYear}年</div>
                    <div class="stat-item"><strong>单价：</strong> ${(prop.unitPrice / 10000).toFixed(1)}W/㎡</div>
                </div>

                <div class="price-highlight">总价约：${prop.totalPrice} 万</div>
                
                <div class="property-desc">
                    ${prop.description}
                </div>
            `;

            propertyResults.appendChild(card);
        });
    }

    function applyFilters() {
        let filtered = MEILONG_HOUSING_DATA;

        // Filter by School Tier
        const schoolVal = filterSchool.value;
        if (schoolVal === '2nd') {
            filtered = filtered.filter(p => p.middleSchool.includes('二梯队') || p.middleSchool.includes('一梯队'));
        }

        // Filter by Size
        const sizeVal = filterSize.value;
        if (sizeVal === '80') {
            filtered = filtered.filter(p => p.size >= 80);
        }

        // Filter by Built Year
        const yearVal = filterYear.value;
        if (yearVal === '2009') {
            filtered = filtered.filter(p => p.builtYear >= 2009);
        }

        // Sort: King always first, then by total price ascending
        filtered.sort((a, b) => {
            if (a.isKing && !b.isKing) return -1;
            if (!a.isKing && b.isKing) return 1;
            return a.totalPrice - b.totalPrice;
        });

        renderProperties(filtered);
    }

    // Attach event listeners
    filterSchool.addEventListener('change', applyFilters);
    filterSize.addEventListener('change', applyFilters);
    filterYear.addEventListener('change', applyFilters);

    // Initial render
    applyFilters();
});
