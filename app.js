/**
 * Constants & Localization
 */
const TRANSLATIONS = {
    en: {
        login: "Log In",
        signup: "Sign Up",
        network: "Network",
        useCase: "Use Case",
        modelConfidence: "Model Confidence",
        high: "High",
        medium: "Medium",
        low: "Low",

        // Asset Info
        assetDesc: "XYZ Protocol is a decentralized infrastructure project focused on on-chain liquidity.",

        // Risk Categories
        cat_liquidity: "Liquidity Risk",
        cat_unlock: "Supply/Unlock Risk",
        cat_delist: "Delisting Risk",
        cat_holders: "Holder Concentration",

        // Risk Reasons
        reason_liq_high: "Low trading volume and wide spreads significantly increase slippage.",
        reason_liq_med: "Moderate liquidity depth but high dependence on a single exchange.",
        reason_unlock_high: "Major supply shock incoming: >10% of supply unlocks soon.",
        reason_unlock_med: "Moderate supply unlock detected; may cause sell pressure.",
        reason_unlock_low: "No significant unlocks detected in the near term.",
        reason_delist_high: "Exchange 'Monitoring Tag' is active. Unusually high risk of removal.",
        reason_delist_low: "No negative exchange flags detected.",
        reason_holder_high: "Whales control the majority of supply. Price manipulation is easier.",
        reason_holder_med: "Top holders own a significant portion of supply.",

        // Auth Message
        authMsg: "Authentication system coming soon!",

        // Feedback
        feedbackTitle: "Something unclear or concerning?",
        feedbackPrompt: "What confused you or made you hesitate while reviewing this risk analysis?",
        emailLabel: "Leave your email if you want updates (optional)",
        sendBtn: "Send feedback",
        feedbackSuccess: "Thanks — your feedback helps improve the risk model.",
        feedbackPlaceholder: "Type your thoughts here (1–2 sentences is enough)",

        // Misc
        beta: "BETA",
        demoDisclaimer: "Risk signals are generated from limited and manually curated data. This version is for demonstration and feedback purposes only."
    },
    vi: {
        login: "Đăng Nhập",
        signup: "Đăng Ký",
        network: "Mạng Lưới",
        useCase: "Ứng Dụng",
        modelConfidence: "Độ Tin Cậy Mô Hình",
        high: "Cao",
        medium: "Trung Bình",
        low: "Thấp",

        assetDesc: "Giao thức XYZ là dự án hạ tầng phi tập trung tập trung vào thanh khoản on-chain.",

        cat_liquidity: "Rủi Ro Thanh Khoản",
        cat_unlock: "Rủi Ro Giải Phóng Token",
        cat_delist: "Rủi Ro Hủy Niêm Yết",
        cat_holders: "Tập Trung Nắm Giữ",

        reason_liq_high: "Khối lượng giao dịch thấp và chênh lệch giá lớn làm tăng trượt giá.",
        reason_liq_med: "Độ sâu thanh khoản trung bình nhưng phụ thuộc nhiều vào một sàn.",
        reason_unlock_high: "Cú sốc cung lớn sắp tới: >10% nguồn cung sẽ được mở khóa.",
        reason_unlock_med: "Mở khóa nguồn cung trung bình; có thể gây áp lực bán.",
        reason_unlock_low: "Không phát hiện đợt mở khóa đáng kể nào trong ngắn hạn.",
        reason_delist_high: "Thẻ 'Theo Dõi' đang hoạt động. Nguy cơ hủy niêm yết cao bất thường.",
        reason_delist_low: "Không phát hiện cờ báo xấu từ sàn giao dịch.",
        reason_holder_high: "Cá voi kiểm soát phần lớn nguồn cung. Dễ thao túng giá.",
        reason_holder_med: "Các chủ sở hữu hàng đầu nắm giữ phần lớn nguồn cung.",

        authMsg: "Hệ thống xác thực sẽ sớm ra mắt!",

        feedbackTitle: "Có gì chưa rõ ràng hoặc đáng lo ngại?",
        feedbackPrompt: "Điều gì khiến bạn bối rối hoặc do dự khi xem xét phân tích rủi ro này?",
        emailLabel: "Để lại email nếu bạn muốn nhận cập nhật (tùy chọn)",
        sendBtn: "Gửi phản hồi",
        feedbackSuccess: "Cảm ơn — phản hồi của bạn giúp cải thiện mô hình rủi ro.",
        feedbackPlaceholder: "Nhập suy nghĩ của bạn ở đây (1-2 câu là đủ)",

        beta: "THỬ NGHIỆM",
        demoDisclaimer: "Các tín hiệu rủi ro được tạo ra từ dữ liệu hạn chế và thủ công. Phiên bản này chỉ dành cho mục đích minh họa và phản hồi."
    }
};

let currentLang = 'en';
let currentSymbol = '1INCH'; // Default

// Metadata for specific coins (Demo purpose)
const COIN_METADATA = {
    "1INCH": {
        desc: "1inch Network is a decentralized exchange aggregator that sources liquidity from various exchanges.",
        network: "Ethereum, BSC, Polygon",
        useCase: "DeFi Aggregator"
    },
    "LUNA": {
        desc: "Terra is a public blockchain protocol deploying a suite of algorithmic decentralized stablecoins.",
        network: "Terra",
        useCase: "Layer 1 Blockchain"
    },
    "ETH": {
        desc: "Ethereum is a decentralized, open-source blockchain with smart contract functionality.",
        network: "Ethereum",
        useCase: "Layer 1 Blockchain"
    },
    "BTC": {
        desc: "Bitcoin is a decentralized digital currency, without a central bank or single administrator.",
        network: "Bitcoin",
        useCase: "Store of Value"
    },
    "ADA": {
        desc: "Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed research.",
        network: "Cardano",
        useCase: "Layer 1 Blockchain"
    },
    "DOT": {
        desc: "Polkadot allows specialized blockchains to communicate with each other in a secure, trust-free environment.",
        network: "Polkadot",
        useCase: "Interoperability"
    },
    "UNI": {
        desc: "Uniswap is a decentralized finance protocol that is used to exchange cryptocurrencies.",
        network: "Ethereum",
        useCase: "DEX"
    },
    "LINK": {
        desc: "Chainlink is a decentralized oracle network that provides real-world data to smart contracts.",
        network: "Ethereum",
        useCase: "Oracle"
    }
};

const DEFAULT_METADATA = {
    desc: "A decentralized digital asset powering a next-generation protocol.",
    network: "Multi-Chain",
    useCase: "Utility / Governance"
};

// Helper to get specific coin
function getCoinData() {
    // ALL_RISK_DATA is defined in data.js
    if (typeof ALL_RISK_DATA === 'undefined') return null;
    return ALL_RISK_DATA.find(c => c.Symbol === currentSymbol) || ALL_RISK_DATA[0];
}

/**
 * Logo Fetching Logic
 */
function updateAssetLogo(symbol) {
    const logoContainer = document.getElementById('asset-logo');

    // Create Image Element
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.alt = symbol;

    // Try primary source
    const primarySource = `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${symbol.toLowerCase()}.png`;

    img.onload = () => {
        logoContainer.innerHTML = '';
        logoContainer.appendChild(img);
        logoContainer.style.background = 'transparent'; // Remove gradient if image loads
        logoContainer.style.boxShadow = 'none';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
    };

    img.onerror = () => {
        // Fallback to text
        logoContainer.innerHTML = symbol;
        // Reset to gradient style
        logoContainer.style.background = 'linear-gradient(135deg, var(--primary), var(--accent))';
        logoContainer.style.boxShadow = '0 12px 24px rgba(139, 92, 246, 0.4)';
    };

    img.src = primarySource;
}

// 3. UI Controller
function renderDashboard() {
    const t = TRANSLATIONS[currentLang];
    const coinData = getCoinData();

    if (!coinData) {
        console.error("No data found");
        return;
    }

    // 1. Static Text Updates
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Skip Network and UseCase labels/values as they are English only
        if (['network', 'useCase'].includes(key)) return;
        if (t[key]) el.textContent = t[key];
    });

    // Dynamic Attribute Updates
    const feedbackInput = document.getElementById('feedback-text');
    if (feedbackInput) feedbackInput.placeholder = t.feedbackPlaceholder;

    // 2. Update Asset Overview (Left Section)
    document.querySelector('.asset-name').textContent = `${coinData.Symbol} Protocol`;

    // Metadata Lookup
    const meta = COIN_METADATA[coinData.Symbol] || DEFAULT_METADATA;

    document.querySelector('.project-desc').textContent = meta.desc;

    // Metadata - Network and Use Case (English Only)
    const metaValues = document.querySelectorAll('.meta-value');
    const metaLabels = document.querySelectorAll('.meta-label');

    if (metaLabels.length >= 2) {
        metaLabels[0].textContent = "Network";
        metaLabels[1].textContent = "Use Case";
    }

    if (metaValues.length >= 2) {
        metaValues[0].textContent = meta.network;
        metaValues[1].textContent = meta.useCase;
    }

    // Update Logo
    updateAssetLogo(coinData.Symbol);

    // 3. Render Risk List (Right Section)
    const listContainer = document.getElementById('risk-list');
    listContainer.innerHTML = ''; // clear

    // Map Excel columns to our UI categories
    const categories = [
        { key: "cat_liquidity", jsonKey: "Liquidity Risk", noteKey: "Liquidity Note" },
        { key: "cat_unlock", jsonKey: "Supply/Unlock Risk", noteKey: "Supply/Unlock Risk Note" },
        { key: "cat_delist", jsonKey: "Delisting Risk", noteKey: "Delisting Risk Note" },
        { key: "cat_holders", jsonKey: "Holder Concentration", noteKey: "Holder Concentration Note" }
    ];

    categories.forEach(cat => {
        const item = document.createElement('div');
        item.className = 'risk-list-item';

        const rawLevel = coinData[cat.jsonKey];
        const levelCode = rawLevel ? rawLevel.toLowerCase() : 'low';

        // Colors
        let dotColor = "🟢";
        if (levelCode === 'medium') dotColor = "🟡";
        if (levelCode === 'high') dotColor = "🔴";

        const categoryLabel = t[cat.key];
        const reasonText = coinData[cat.noteKey] || "No data available";
        const levelLabel = t[levelCode] || rawLevel;

        item.innerHTML = `
            <div class="risk-item-header" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                <span class="risk-category-name">${categoryLabel}</span>
                <span class="risk-level-indicator ${levelCode}" style="display: flex; align-items: center; gap: 6px;">
                    ${dotColor} ${levelLabel}
                    <span class="expand-arrow" style="font-size: 0.8em; transition: transform 0.2s;">▼</span>
                </span>
            </div>
            <p class="risk-explanation" style="display: none; margin-top: 8px; font-size: 0.9em; color: var(--text-secondary, #ccc);">${reasonText}</p>
        `;

        const header = item.querySelector('.risk-item-header');
        const explanation = item.querySelector('.risk-explanation');
        const arrow = item.querySelector('.expand-arrow');

        header.addEventListener('click', () => {
            const isHidden = explanation.style.display === 'none';
            explanation.style.display = isHidden ? 'block' : 'none';
            arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        });

        listContainer.appendChild(item);
    });
}

function setupEventHandlers() {
    // Language Toggle


    // Auth Buttons
    const authHandler = () => {
        alert(TRANSLATIONS[currentLang].authMsg);
    };
    document.getElementById('btn-login').addEventListener('click', authHandler);
    document.getElementById('btn-signup').addEventListener('click', authHandler);



    // Search Handler
    const searchInput = document.getElementById('coin-search');
    const dataList = document.getElementById('coin-list');

    // Populate Datalist
    if (typeof ALL_RISK_DATA !== 'undefined' && dataList) {
        // Sort coins for better UX
        const sortedCoins = [...ALL_RISK_DATA].sort((a, b) => a.Symbol.localeCompare(b.Symbol));

        sortedCoins.forEach(coin => {
            const option = document.createElement('option');
            option.value = coin.Symbol;
            dataList.appendChild(option);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toUpperCase();

            // Try to find exact match
            if (typeof ALL_RISK_DATA !== 'undefined') {
                const found = ALL_RISK_DATA.find(c => c.Symbol === val);
                if (found) {
                    currentSymbol = val;
                    renderDashboard();
                }
            }
        });

        // Clear on focus for easier new search
        searchInput.addEventListener('focus', () => {
            searchInput.value = '';
        });
    }
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    setupEventHandlers();
    renderDashboard();
});
