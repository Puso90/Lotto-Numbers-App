
const saveBtn = document.querySelector('.saveBtn');
const shareNum = document.querySelector('.shareBtn');
const listContainer = document.querySelector('#storing ul');
const feedbackEl = document.getElementById('feedback');

const storageKey = 'lotto_app';

function showFeedback(message) {
    if (!feedbackEl) return;
    feedbackEl.textContent = message;
    setTimeout(() => {
        feedbackEl.textContent = '';
    }, 3000);
}

function hasLuckyNumbers() {
    return Array.isArray(luckyNumbers) && luckyNumbers.length === 7;
}

function numbersKey(nums) {
    return nums.join(',');
}

function isDuplicate(nums) {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}');
    const key = numbersKey(nums);
    return Object.values(data).some((saved) => numbersKey(saved) === key);
}

function saveCurrentNumbers() {
    if (localStorage.getItem(storageKey) === null) {
        localStorage.setItem(storageKey, JSON.stringify({}));
    }

    const data = JSON.parse(localStorage.getItem(storageKey));
    const newid = new Date().getTime();
    data[newid] = luckyNumbers;
    localStorage.setItem(storageKey, JSON.stringify(data));

    return newid;
}

function deleteNumbers(obj_id) {
    const data = JSON.parse(localStorage.getItem(storageKey));
    delete data[obj_id];
    localStorage.setItem(storageKey, JSON.stringify(data));
}

function formatNumbers(nums) {
    return nums.join(' ,  ');
}

function createSavedListItem(nums, obj_id) {
    const saved = document.createElement('li');
    saved.classList.add('savedNumbers');
    saved.textContent = formatNumbers(nums);

    saved.addEventListener('click', () => {
        listContainer.removeChild(saved);
        deleteNumbers(obj_id);
    });

    listContainer.appendChild(saved);
    return saved;
}

function loadFromStorage() {
    if (localStorage.getItem(storageKey) === null) {
        return;
    }

    const data = JSON.parse(localStorage.getItem(storageKey));

    for (const [obj_id, value] of Object.entries(data)) {
        createSavedListItem(value, obj_id);
    }
}

loadFromStorage();

saveBtn.addEventListener('click', () => {
    if (!hasLuckyNumbers()) {
        showFeedback('Generate numbers first with GET LUCKY!');
        return;
    }

    if (isDuplicate(luckyNumbers)) {
        showFeedback('These numbers are already saved.');
        return;
    }

    const obj_id = saveCurrentNumbers();
    createSavedListItem(luckyNumbers, obj_id);
    showFeedback('Numbers saved.');
});

shareNum.addEventListener('click', async () => {
    const shareText = hasLuckyNumbers()
        ? `My lucky lotto numbers: ${formatNumbers(luckyNumbers)}`
        : 'Look up lucky lotto numbers, Boom.. Enjoy your luck!';

    const shareData = {
        url: document.URL,
        title: document.title,
        text: shareText,
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
            return;
        } catch (err) {
            if (err.name === 'AbortError') return;
        }
    }

    const fallbackText = `${shareText}\n${document.URL}`;

    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(fallbackText);
            showFeedback('Link copied to clipboard.');
            return;
        } catch {
            // fall through to prompt
        }
    }

    window.prompt('Copy this link to share:', fallbackText);
});

function initInfoPopups() {
    document.querySelectorAll('.info-item').forEach((item) => {
        const trigger = item.querySelector('.info-trigger');
        const closeBtn = item.querySelector('.popup-close');

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = item.classList.contains('popup-open');

            document.querySelectorAll('.info-item.popup-open').forEach((openItem) => {
                openItem.classList.remove('popup-open');
            });

            if (!isOpen) {
                item.classList.add('popup-open');
            }
        });

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            item.classList.remove('popup-open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.info-item')) {
            document.querySelectorAll('.info-item.popup-open').forEach((item) => {
                item.classList.remove('popup-open');
            });
        }
    });
}

initInfoPopups();
