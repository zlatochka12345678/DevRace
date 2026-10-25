// Функция переключения экранов
function navigateTo(screenId) {
    // Скрываем все экраны
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Показываем нужный экран
    const targetScreen = document.getElementById('screen-' + screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        targetScreen.scrollTop = 0; // Скролл вверх при переходе
    }

    // Логика нижнего меню
    const bottomNav = document.getElementById('bottom-nav');
    
    // Скрываем меню на экранах входа/регистрации
    if (screenId === 'auth' || screenId === 'register') {
        bottomNav.style.display = 'none';
    } else {
        bottomNav.style.display = 'flex';
        
        // Подсветка активной иконки
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));
        
        // Связываем экраны с кнопками меню
        let activeNavId = screenId;
        if (screenId === 'quest' || screenId === 'help') activeNavId = 'home';
        if (screenId === 'account') activeNavId = 'settings';

        const activeNavItem = document.getElementById('nav-' + activeNavId);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }
}

// Функция для открытия деталей квеста
function openQuest(type) {
    const title = document.getElementById('quest-title');
    const desc = document.getElementById('quest-desc');
    
    if (type === 'gathering') {
        title.innerText = "Точка сбора";
        desc.innerText = "Коллектив соберется, чтобы обсудить цели и задачи на день. Будь готов поделиться своими планами.";
    } else if (type === 'commit') {
        title.innerText = "Первый коммит";
        desc.innerText = "Твой первый шаг в команду. Напиши свой первый код и отправь на проверку капитану.";
    } else if (type === 'watch') {
        title.innerText = "Код-дозор";
        desc.innerText = "Ты работаешь в команде, дебажишь код и фиксишь баги. Найди уязвимость до релиза!";
    }
    
    navigateTo('quest');
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('auth');
});